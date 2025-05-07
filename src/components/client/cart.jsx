// import React from 'react';
// import { TrashIcon } from '@heroicons/react/24/outline'; // Import de l'icône Trash (optionnel)

// const Cart = ({ cartItems, removeItem }) => {
//   const total = cartItems.reduce((acc, item) => acc + item.prix * item.quantity, 0);

//   const handleCommander = () => {
//     // Add your order logic here
//     console.log('Commander clicked', cartItems);
//     alert('Commaid1nde passée avec succès!');
//   };
//   return (
//     <div className="bg-white p-4 rounded-lg shadow-lg">
//       <h2 className="text-3xl font-bold mb-4 text-gray-800">Panier</h2>
//       {cartItems.length === 0? (
//         <p className="text-center text-gray-500">Aucun article dans le panier.</p>
//       ) : (
//         <ul className="space-y-4">
//           {cartItems.map((item, index) => (
//             <li key={index} className="relative flex justify-between items-center p-4 border-b border-gray-200 group">
//               {/* Produit à gauche avec moins d'espace entre le nom et le prix */}
//               <div className="flex justify-start items-center space-x-2 w-full">
//                 <span className="text-lg">{item.nom} *{item.quantity}</span>
//                 <span className="text-lg font-semibold">{item.prix} DH</span>
//               </div>

//               {/* Icône de suppression à droite */}
//               <button
//                 onClick={() => removeItem(item.id)}
//                 className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full hover:bg-red-500 hover:text-white transition-all"
//               >
//                 <TrashIcon className="w-5 h-5" />
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//       <div className="mt-6 font-semibold text-xl text-gray-800">Total : {total} DH</div>
      
//       {/* Commander Button */}
//       {cartItems.length > 0 && (
//         <button 
//           onClick={handleCommander}
//           className="mt-4 w-full bg-yellow-600 hover:bg-orange-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
//         >
//           Commander
//         </button>
//       )}
//     </div>
//   );
// };

// export default Cart;
import axios from 'axios';
import React from 'react';

const Cart = ({ cart, onRemove }) => {
  const groupedCart = cart.reduce((acc, item) => {
    const existing = acc.find(i => i.id === item.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);

  const total = groupedCart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleCommander = async () => {
    if (cart.length === 0) {
      alert("Aucune commande passée - Votre panier est vide !");
      return;
    }

    const username = localStorage.getItem("username");
    const token = localStorage.getItem("token"); // 🔐 récupération du token

    if (!username || !token) {
      alert("Nom du client ou token manquant !");
      return;
    }

    const groupedCart = cart.reduce((acc, item) => {
      const existing = acc.find(i => i.id === item.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        acc.push({ ...item, quantity: 1 });
      }
      return acc;
    }, []);

    const total = groupedCart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

    const data = {
      client_name: username,
      total_price: total,
      status: 'en cours',
      user_id: 1,
      products: groupedCart.map(item => ({
        id: item.id,
        quantity: item.quantity,
      })),
    };

    try {
      console.log("Données envoyées à l'API :", data);
      const response = await axios.post(
        'http://127.0.0.1:8000/api/orders',
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
          },
        }
      );
      console.log('Commande envoyée ✅', response.data);
      alert("Commande envoyée avec succès !");
    } catch (error) {
      console.error('Erreur lors de l’envoi de la commande ❌', error.response?.data || error.message);
      alert("Erreur lors de l'envoi de la commande.");
    }

    console.log("Nom client depuis localStorage:", username);
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">🛒 Panier</h2>
      {groupedCart.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <ul className="space-y-2">
          {groupedCart.map((item, index) => (
            <li key={index} className="flex justify-between items-center border-b pb-1">
              <span>
                {item.name} x{item.quantity} – {item.price * item.quantity} dh
              </span>
              <button
                className="text-red-600 hover:underline"
                onClick={() => onRemove(item.id)}
              >
                Supprimer
              </button>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-3 font-semibold">Total: {total} dh</div>
      <button 
        onClick={handleCommander}
        className="mt-4 w-full bg-yellow-600 hover:bg-orange-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
      >
        Commander
      </button>
    </div>
  );
};

export default Cart;
