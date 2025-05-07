import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ListeProduits from '../components/client/ListProduits';
import { Link } from 'react-router-dom';

import FormulaireProduit from './FormulaireProduit'; // formulaire que je peux te donner juste après

const AdminProduits = () => {
  const [products, setProducts] = useState([]);
  const [produitEnCours, setProduitEnCours] = useState(null);

  useEffect(() => {
    fetchProduits();
  }, []);

  const fetchProduits = () => {
    axios.get('http://127.0.0.1:8000/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error('Erreur chargement produits ❌', err));
  };

  const handleSupprimerProduit = (id) => {
    if (window.confirm('Supprimer ce produit ?')) {
      axios.delete(`http://127.0.0.1:8000/api/products/${id}`)
        .then(() => {
          setProducts(products.filter(p => p.id !== id));
        })
        .catch(err => console.error('Erreur suppression ❌', err));
    }
  };

  const handleModifierProduit = (produit) => {
    setProduitEnCours(produit);
  };

  const handleSauvegarde = () => {
    setProduitEnCours(null);
    fetchProduits(); // rafraîchir après modif
  };

  return (
    <div className="flex h-screen">
    {/* Sidebar */}
    <aside className="w-64 bg-gray-800 text-white p-4">
      <h1 className="text-2xl font-bold mb-6">Admin</h1>
      <nav className="space-y-4">
        <Link to="/ajouter" className="block hover:underline">➕ Ajouter un produit</Link>
        <Link to="/produits" className="block hover:underline">📦 Liste des produits</Link>
        </nav>
        </aside>
    {/* <div className="p-6"> */}
      <h2 className="text-2xl font-bold mb-4 text-black">Gestion des produits</h2> <br></br>

      <ListeProduits
        products={products}
        mode="admin"
        onDeleteProduct={handleSupprimerProduit}
        onEditProduct={handleModifierProduit}
      />

      {produitEnCours && (
        <FormulaireProduit
          produit={produitEnCours}
          onClose={() => setProduitEnCours(null)}
          onSave={handleSauvegarde}
        />
      )}
    </div>
    // </div>
  );
};

export default AdminProduits;
