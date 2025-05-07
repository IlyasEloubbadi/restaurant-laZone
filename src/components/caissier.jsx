import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import Header from './header';

const Caissier = () => {
  const [orders, setOrders] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('http://127.0.0.1:8000/api/orders', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => {
        setOrders(res.data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error('Erreur chargement commandes ❌', err);
        setIsLoading(false);
      });
  }, []);

  const updateStatus = (orderId, newStatus) => {
    console.log("Mise à jour du statut en cours...", orderId, newStatus); // 🔍
    
    const token = localStorage.getItem('token'); // n'oublie PAS le token ici
  
    axios.put(`http://127.0.0.1:8000/api/orders/${orderId}`, {
      status: newStatus,
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(() => {
      // Mise à jour locale de l'état
      setOrders(prev => prev.map(o => o.id === orderId ? { ...o, status: newStatus } : o));
      console.log("✅ Statut mis à jour avec succès !");
    }).catch(err => {
      console.error('❌ Erreur changement statut', err);
    });
  };
  return (
    
 

    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">📋 Liste des commandes</h2>
      
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden">
          <thead className="bg-gray-100 text-gray-700 uppercase text-sm">
            <tr>
              <th className="px-6 py-4">Client</th>
              <th className="px-6 py-4">Total</th>
              <th className="px-6 py-4">Statut</th>
              <th className="px-6 py-4">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {orders.map(order => (
              <tr key={order.id} className="border-t">
                <td className="px-6 py-4">{order.client_name}</td>
                <td className="px-6 py-4">{order.total_price} MAD</td>
                <td className="px-6 py-4 capitalize font-medium">
                  {order.status === 'termine' && <span className="text-green-600">✔ Terminé</span>}
                  {order.status === 'annule' && <span className="text-red-600">✖ Annulé</span>}
                  {order.status === 'en cours' && <span className="text-yellow-600">⏳ En cours</span>}
                  {order.status === 'en attente' && <span className="text-gray-600">🕓 En attente</span>}
                </td>
                <td className="px-6 py-4 space-x-2">
                  <button
                    onClick={() => updateStatus(order.id, 'termine')}
                    className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded disabled:opacity-50"
                    disabled={order.status !== 'en cours'}
                  >
                    ✅ Confirmer
                  </button>
                  <button
                    onClick={() => updateStatus(order.id, 'annule')}
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded disabled:opacity-50"
                    disabled={order.status !== 'en cours'}
                  >
                    ❌ Annuler
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  );
};

export default Caissier;
