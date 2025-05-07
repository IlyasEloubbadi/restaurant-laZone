
// export default function ListeProduits({ products, onAddToCart }) {
//   console.log(products.image);

//   return (
//     <div>
//       <h2>Nombre de Produits : {products.length}</h2>
//       <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
//        {products.map(product => (
//           <div key={product.id} className="border rounded-xl p-3 shadow hover:shadow-lg">
//        {/* <img src={`http://localhost:8000/images/pizza.png`}className="w-full h-32 object-cover rounded"/>  */}
//       <img src={`http://localhost:8000/images/${product.image}`} alt={product.name}className="w-full h-32 object-cover rounded-md"  />
//     {/* <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded-md" /> */}
     
//           <h4  className="text-lg font-bold mt-2">{product.name}</h4>
//           <strong className="text-green-600 font-semibold mt-1">{product.price} DH</strong>
//           <br />
//           <button 
//              className="mt-2 bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600"onClick={() => onAddToCart(product)}>Ajouter au panier</button>
         
//          </div>
         
//       ))}
        
//          </div>
//     </div>
//   );
// }
import React from 'react';

export default function ListeProduits({
  products,
  onAddToCart,
  mode = 'client',
  onDeleteProduct,
  onEditProduct,
}) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-black">Nombre de Produits : {products.length}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative border rounded-xl p-3 shadow hover:shadow-lg cursor-pointer group"
            onClick={() => mode === 'admin' && onEditProduct && onEditProduct(product)}
          >
            {/* Supprimer (admin uniquement) */}
            {mode === 'admin' && (
              <button
                className="absolute top-2 right-2 text-red-600 text-xl font-bold hidden group-hover:block"
                onClick={(e) => {
                  e.stopPropagation(); // empêche le clic de déclencher la modif
                  onDeleteProduct && onDeleteProduct(product.id);
                }}
              >
                ✖
              </button>
            )}

            {/* Image */}
            <img
              src={`http://localhost:8000/images/${product.image}`}
              alt={product.name}
              className="w-full h-32 object-cover rounded-md"
            />

            {/* Nom et prix */}
            <h4 className="text-lg font-bold mt-2">{product.name}</h4>
            <strong className="text-green-600 font-semibold mt-1">{product.price} DH</strong>

            {/* Ajouter au panier (client uniquement) */}
            {mode === 'client' && (
              <button
                className="mt-2 bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600"
                onClick={(e) => {
                  e.stopPropagation(); // empêche le clic de déclencher autre chose
                  onAddToCart(product);
                }}
              >
                Ajouter au panier
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
