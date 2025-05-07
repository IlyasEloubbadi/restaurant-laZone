import { useState,useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header';
import Cart from './cart'
import ListeProduits from './ListProduits';
// import ProductCard from './ProductCard';
import axios from 'axios';

function Layout() {
  
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error("Erreur de chargement", err));
  }, []);
  const handleAddToCart = (product) => {
    setCart(prev => [...prev, product]);
   
      console.log("Ajout au panier :", product);
  };

  const handleRemoveFromCart = (id) => {
    setCart(prev => prev.filter(p => p.id !== id));
  };
  //dark mode 

  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check localStorage to see if the user has a preference saved
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedMode);
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
    localStorage.setItem('darkMode', !isDarkMode); // Save preference in localStorage
  };
  return (
    <div>
      <Header/>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 3 }}>
          <ListeProduits products={products} onAddToCart={handleAddToCart} />
        </div>
        <div style={{ flex: 1 }}>
        <Cart cart={cart} onRemove={handleRemoveFromCart} />
        </div>
      </div>
    </div>
  );
}

  // const [cartItems, setCartItems] = useState([]);

  // const ajouterAuPanier = (produit) => {
  //   setCartItems((prevItems) => {
  //     const existingProduct = prevItems.find(item => item.id === produit.id);
  //     if (existingProduct) {
  //       return prevItems.map(item =>
  //         item.id === produit.id
  //           ? { ...item, quantity: item.quantity + 1 }
  //           : item
  //       );
  //     } else {
  //       return [...prevItems, { ...produit, quantity: 1 }];
  //     }
  //   });
  // };
  // const removeItem = (itemId) => {
  //   setCartItems(cartItems.filter(item => item.id !== itemId)); // Supprimer l'item du panier
  // };


  // return (
  //   <div className="min-h-screen flex flex-col bg-gray-50">
  //     <Header/>
  //     <div className="flex flex-1 space-x-4 p-6">
  //       <div className="w-3/4 bg-white p-6 shadow-lg rounded-lg">
  //         {/* Grid layout for products */}
  //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  //           <ListeProduits ajouterAuPanier={ajouterAuPanier}/>
  //         </div>
  //       </div>
  //       <div className="w-1/4 bg-gray-100 p-6 shadow-lg rounded-lg">
  //         <Cart cartItems={cartItems} removeItem={removeItem} />
  //       </div>
  //     </div>
  //   </div>
  // );

export default Layout;
