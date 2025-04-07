import React from 'react';

const ListeProduits = ({ ajouterAuPanier }) => {
  const produits = [
    { id: 1, nom: 'Pizza', prix: 60 },
    { id: 2, nom: 'Tacos', prix: 45 },
    { id: 3, nom: 'Burger', prix: 50 },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Nos produits</h2>
      <ul className="space-y-4">
        {produits.map((p) => (
          <li key={p.id} className="flex justify-between items-center p-4 border-b border-gray-300 shadow-md rounded-lg bg-white">
            <div>
              <p className="font-semibold text-xl">{p.nom}</p>
              <p className="text-sm text-gray-500">{p.prix} DH</p>
            </div>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
              onClick={() => ajouterAuPanier(p)}
            >
              Ajouter
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListeProduits;
