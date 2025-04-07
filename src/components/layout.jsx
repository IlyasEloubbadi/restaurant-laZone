import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header';
import Cart from './cart'
import ListeProduits from './ListProduits';

function Layout() {
  const [cartItems, setCartItems] = useState([]);

  const ajouterAuPanier = (produit) => {
    setCartItems((prevItems) => {
      const existingProduct = prevItems.find(item => item.id === produit.id);
      if (existingProduct) {
        return prevItems.map(item =>
          item.id === produit.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...produit, quantity: 1 }];
      }
    });
  };
  const removeItem = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId)); // Supprimer l'item du panier
  };


  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header/>
      <div className="flex flex-1 space-x-4 p-6">
        <div className="w-3/4 bg-white p-6 shadow-lg rounded-lg">
          {/* Liste des produits */}
          <ListeProduits ajouterAuPanier={ajouterAuPanier}/>
        </div>
        <div className="w-1/4 bg-gray-100 p-6 shadow-lg rounded-lg">
          {/* Panier */}
          <Cart cartItems={cartItems}  removeItem={removeItem} />
        </div>
      </div>
    </div>
  );
}

export default Layout;
