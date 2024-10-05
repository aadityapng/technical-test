'use client';

import { useProducts } from '../context/ProductContext';

export function CategoryFilter() {
  const { categories, selectedCategory, setSelectedCategory } = useProducts();
  
  return (
    <select
      value={selectedCategory}
      onChange={(e) => setSelectedCategory(e.target.value)}
      className="p-2 border rounded-lg bg-slate-400"
    >
      {categories.map(category => (
        <option key={category} value={category}>{category}</option>
      ))}
    </select>
  );
}