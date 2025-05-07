// src/components/admin/AjoutProduit.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AjoutProduit = () => {
  const [form, setForm] = useState({ name: '', price: '', image: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://127.0.0.1:8000/api/produits', form)
      .then(res => {
        setMessage('✅ Produit ajouté !');
        setForm({ name: '', price: '', image: '' }); // reset form
      })
      .catch(err => {
        setMessage('❌ Erreur ajout produit');
        console.error(err);
      });
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
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Ajouter un produit</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Nom du produit"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Prix"
          value={form.price}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="image"
          placeholder="URL de l'image (optionnel)"
          value={form.image}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Ajouter
        </button>
      </form>
      {message && <p className="mt-4">{message}</p>}
    </div>
  </div>
  );
};

export default AjoutProduit;