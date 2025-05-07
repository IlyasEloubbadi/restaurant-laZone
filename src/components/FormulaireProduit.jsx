// import React, { useState } from 'react';
// import axios from 'axios';

// const FormulaireProduit = ({ produit, onClose, onSave }) => {
//   const [name, setName] = useState(produit.name);
//   const [price, setPrice] = useState(produit.price);
//   const [image, setImage] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append('name', name);
//     formData.append('price', price);
//     if (image) {
//       formData.append('image', image);
//     }

//     axios.post(`http://127.0.0.1:8000/api/products/${produit.id}`, formData)
//       .then(() => {
//         onSave();
//         onClose();
//       })
//       .catch(err => console.error('Erreur modification produit ❌', err));
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
//       <div className="bg-white p-6 rounded shadow-lg w-96">
//         <h2 className="text-xl font-bold mb-4">Modifier le produit</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label className="block font-semibold">Nom</label>
//             <input
//               type="text"
//               className="w-full border px-3 py-2 rounded"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label className="block font-semibold">Prix</label>
//             <input
//               type="number"
//               className="w-full border px-3 py-2 rounded"
//               value={price}
//               onChange={(e) => setPrice(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label className="block font-semibold">Nouvelle image (optionnel)</label>
//             <input
//               type="file"
//               className="w-full"
//               onChange={(e) => setImage(e.target.files[0])}
//             />
//           </div>
//           <div className="flex justify-end space-x-2">
//             <button
//               type="button"
//               onClick={onClose}
//               className="px-4 py-2 bg-gray-300 rounded"
//             >
//               Annuler
//             </button>
//             <button
//               type="submit"
//               className="px-4 py-2 bg-blue-600 text-white rounded"
//             >
//               Sauvegarder
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default FormulaireProduit;


import React, { useState } from 'react';
import axios from 'axios';

const FormulaireProduit = ({ produit, onClose, onSave }) => {
  const [name, setName] = useState(produit.name);
  const [price, setPrice] = useState(produit.price);
  const [image, setImage] = useState(null); // fichier
  const [imageUrl, setImageUrl] = useState(''); // url directe
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (image) {
      // Cas image fichier
      const formData = new FormData();
      formData.append('name', name);
      formData.append('price', price);
      formData.append('image', image);
  
      try {
        await axios.post(`http://127.0.0.1:8000/api/products/${produit.id}`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
        onSave();
        onClose();
      } catch (err) {
        console.error('Erreur image fichier ❌', err.response?.data || err);
      }
    } else if (imageUrl.trim() !== '') {
      // Cas image URL
      try {
        await axios.put(`http://127.0.0.1:8000/api/products/${produit.id}`, {
          name,
          price,
          image_url: imageUrl,
        });
        onSave();
        onClose();
      } catch (err) {
        console.error('Erreur image URL ❌', err.response?.data || err);
      }
    } else {
      // Pas d’image
      try {
        await axios.put(`http://127.0.0.1:8000/api/products/${produit.id}`, {
          name,
          price,
        });
        onSave();
        onClose();
      } catch (err) {
        console.error('Erreur sans image ❌', err.response?.data || err);
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Modifier le produit</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="block font-semibold">Nom</label>
            <input
              type="text"
              className="w-full border px-3 py-2 rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="block font-semibold">Prix</label>
            <input
              type="number"
              className="w-full border px-3 py-2 rounded"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="block font-semibold">Uploader une image (optionnel)</label>
            <input
              type="file"
              className="w-full"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>

          <div className="mb-3">
            <label className="block font-semibold">Ou coller une URL d'image (optionnel)</label>
            <input
              type="text"
              className="w-full border px-3 py-2 rounded"
              placeholder="https://exemple.com/image.jpg"
              value={imageUrl}
              onChange={(e) => {
                setImageUrl(e.target.value);
                setImage(null); // on efface le fichier si URL est remplie
              }}
            />
          </div>

          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Sauvegarder
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormulaireProduit;
