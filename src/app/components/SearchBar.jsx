'use client';

import { useProducts } from '../context/ProductContext';

export function SearchBar() {
  const { searchTerm, setSearchTerm } = useProducts();
  
  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search products..."
      className="p-2 border rounded-lg w-full"
    /> 
  );
}