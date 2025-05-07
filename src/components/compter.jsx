
  import React, { useEffect, useState } from 'react';
  import axios from 'axios';
  import ListeProduits from '../components/client/ListProduits';
  
  import FormulaireProduit from './FormulaireProduit'; // formulaire que je peux te donner juste après
  
  const   Compter = () => {
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
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Gestion des produits</h2>
  
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
    );
  };
  
  export default Compter;
  

