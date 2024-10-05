"use client";

import { ProductProvider } from "../context/ProductContext";
import { SearchBar } from "../components/SearchBar";
import { CategoryFilter } from "../components/CategoryFilter";
import { ProductList } from "../components/ProductList";

export default function ProductPage() {
  return (
    <ProductProvider>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-10 mt-10 text-center bg-orange-600 text-white p-2 rounded-lg">Product Catalog</h1>
        <div className="mb-4 space-y-2">
          <SearchBar />
          <CategoryFilter />
        </div>
        <ProductList />
      </div>
    </ProductProvider>
  );
}
