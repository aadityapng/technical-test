'use client';

import { useProducts } from '../context/ProductContext';

export function ProductList() {
  const { filteredProducts } = useProducts();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProducts.map(product => (
        <div key={product.id} className="border rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
          <div className="bg-white p-4">
            <h2 className="font-bold text-xl text-gray-900">{product.title}</h2>
            <p className="text-lg text-gray-700 mt-2">Price: <span className="font-semibold text-gray-800">${product.price}</span></p>
            <p className="text-sm text-gray-500 mt-1">Category: <span className="font-medium">{product.category}</span></p>
          </div>
        </div>
      ))}
    </div>
  );
}
