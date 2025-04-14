import React from 'react';
import { TrashIcon } from '@heroicons/react/24/outline'; // Import de l'icône Trash (optionnel)

const Cart = ({ cartItems, removeItem }) => {
  const total = cartItems.reduce((acc, item) => acc + item.prix * item.quantity, 0);

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Panier</h2>
      {cartItems.length === 0? (
        <p className="text-center text-gray-500">Aucun article dans le panier.</p>
      ) : (
        <ul className="space-y-4">
          {cartItems.map((item, index) => (
            <li key={index} className="relative flex justify-between items-center p-4 border-b border-gray-200 group">
              {/* Produit à gauche avec moins d'espace entre le nom et le prix */}
              <div className="flex justify-start items-center space-x-2 w-full">
                <span className="text-lg">{item.nom} *{item.quantity}</span>
                <span className="text-lg font-semibold">{item.prix} DH</span>
              </div>

              {/* Icône de suppression à droite */}
              <button
                onClick={() => removeItem(item.id)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full hover:bg-red-500 hover:text-white transition-all"
              >
                <TrashIcon className="w-5 h-5" />
              </button>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-6 font-semibold text-xl text-gray-800">Total : {total} DH</div>
    </div>
  );
};

export default Cart;
