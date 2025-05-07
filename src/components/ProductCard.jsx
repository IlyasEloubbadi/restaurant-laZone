// import React from 'react';

// const ProductCard = ({ product, addToCart }) => {
//   return (
//     <div className="bg-white rounded-2xl shadow p-4 flex flex-col items-center">
//       <img
//         src={product.image}
//         alt={product.name}
//         className="w-32 h-32 object-cover rounded"
//       />
//       <h2 className="text-lg font-bold mt-2">{product.name}</h2>
//       <p className="text-gray-600 text-sm text-center">{product.description}</p>
//       <p className="text-green-600 font-semibold mt-1">{product.price} MAD</p>
//       <button
//         onClick={() => addToCart(product)}
//         className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded"
//       >
//         Ajouter au panier
//       </button>
//     </div>
//   );
// };

// export default ProductCard;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Produits = () => {
//   const [produits, setProduits] = useState([]);

//   useEffect(() => {
//     axios.get('http://127.0.0.1:8000/api/produits')
//       .then(res => setProduits(res.data))
//       .catch(err => console.error('Erreur chargement produits ❌', err));
//   }, []);

//   const supprimerProduit = (id) => {
//     axios.delete(`http://127.0.0.1:8000/api/produits/${id}`)
//       .then(() => setProduits(prev => prev.filter(p => p.id !== id)))
//       .catch(err => console.error('Erreur suppression ❌', err));
//   };

//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-4">Gestion des Produits</h1>
//       <table className="w-full bg-white rounded shadow">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="p-3 text-left">Nom</th>
//             <th className="p-3 text-left">Prix</th>
//             <th className="p-3 text-left">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {produits.map(p => (
//             <tr key={p.id} className="border-t">
//               <td className="p-3">{p.name}</td>
//               <td className="p-3">{p.price} MAD</td>
//               <td className="p-3 space-x-2">
//                 <button className="bg-yellow-400 px-3 py-1 rounded text-white hover:bg-yellow-500">Modifier</button>
//                 <button
//                   onClick={() => supprimerProduit(p.id)}
//                   className="bg-red-500 px-3 py-1 rounded text-white hover:bg-red-600">
//                   Supprimer
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Produits;

// components/ProduitCard.jsx
import React from 'react';

const ProduitCard = ({ produit, mode, onClickModifier, onClickSupprimer, onAjouterAuPanier }) => {
  return (
    <div
      className="relative border p-4 rounded hover:shadow cursor-pointer"
      onClick={() => mode === 'admin' && onClickModifier && onClickModifier(produit)}
    >
      {/* Bouton supprimer pour admin */}
      {mode === 'admin' && (
        <button
          className="absolute top-2 right-2 text-red-600 font-bold"
          onClick={(e) => {
            e.stopPropagation();
            onClickSupprimer && onClickSupprimer(produit.id);
          }}
        >
          ✖
        </button>
      )}

      <img src={produit.image} alt={produit.nom} className="w-full h-32 object-cover rounded" />
      <h3 className="mt-2 font-bold">{produit.nom}</h3>
      <p>{produit.prix} MAD</p>

      {/* Bouton panier pour client */}
      {mode === 'client' && (
        <button
          className="mt-2 bg-blue-500 text-white px-4 py-1 rounded"
          onClick={(e) => {
            e.stopPropagation();
            onAjouterAuPanier && onAjouterAuPanier(produit);
          }}
        >
          Ajouter au panier
        </button>
      )}
    </div>
  );
};

export default ProduitCard;