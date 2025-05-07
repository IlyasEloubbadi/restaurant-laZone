import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import AjoutProduit from './dashboard';
import AdminProduits from './AdminProduits';

const AdminLayout = () => {
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

      {/* Contenu principal */}
      <main className="flex-1 bg-gray-100 p-6 overflow-y-auto">
        <Outlet />
        {/* < AjoutProduit/>
        <AdminProduits/> */}
      </main>
    </div>
  );
};

export default AdminLayout;