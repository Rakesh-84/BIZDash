import React, { useState } from 'react';
import { products as initialProducts } from '../data/Product';
import { Package, Plus, Trash2 } from 'lucide-react';

function Products() {
  // Now we ARE using setProductList to manage the inventory
  const [productList, setProductList] = useState(initialProducts);

  // LOGIC: Delete a product from the list
  const deleteProduct = (id) => {
    const updatedProducts = productList.filter(item => item.id !== id);
    setProductList(updatedProducts);
  };
const addProduct = (newProduct) => {
  // We use the spread operator (...) to keep old products and add the new one
  setProductList([...productList, newProduct]);
  };
  // Add these new states at the top of your component
const [name, setName] = useState("");
const [price, setPrice] = useState("");

const handleSubmit = (e) => {
  e.preventDefault(); // Prevents the page from refreshing
  if (!name || !price) return; // Don't add empty products

  const newEntry = {
    id: Date.now(), // Simple way to get a unique ID
    name: name,
    price: parseFloat(price),
    stock: 0, // Default stock for new items
    category: "General"
  };

  addProduct(newEntry);
  setName(""); // Clear the input
  setPrice(""); // Clear the input
};
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold flex items-center gap-2 text-gray-800">
          <Package className="text-blue-600" /> Inventory Management
        </h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-all">
          <Plus size={18} /> Add Product
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {productList.map(product => (
          <div key={product.id} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg text-gray-800">{product.name}</h3>
                <span className="text-xs font-medium px-2 py-1 bg-gray-100 text-gray-500 rounded-full uppercase">
                  {product.category}
                </span>
              </div>
              {/* DELETE BUTTON */}
              <button 
                onClick={() => deleteProduct(product.id)}
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <Trash2 size={20} />
              </button>
            </div>

            <div className="mt-6 flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-400 font-medium">Price</p>
                <p className="font-bold text-blue-600 text-xl">${product.price}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-400 font-medium">Stock</p>
                <p className={`font-bold ${product.stock < 50 ? 'text-orange-500' : 'text-green-600'}`}>
                  {product.stock} units
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {productList.length === 0 && (
        <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-gray-200">
          <Package size={48} className="mx-auto text-gray-300 mb-4" />
          <p className="text-gray-500 text-lg">Your inventory is empty.</p>
        </div>
      )}
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded-xl shadow-sm mb-6 flex gap-4 items-end">
  <div className="flex-1">
    <label className="text-xs text-gray-500 font-bold uppercase">Product Name</label>
    <input 
      type="text" 
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="e.g. Sony Headphones"
      className="w-full border-b-2 border-gray-100 outline-none focus:border-blue-500 py-2"
    />
  </div>
  <div className="w-32">
    <label className="text-xs text-gray-500 font-bold uppercase">Price</label>
    <input 
      type="number" 
      value={price}
      onChange={(e) => setPrice(e.target.value)}
      placeholder="0.00"
      className="w-full border-b-2 border-gray-100 outline-none focus:border-blue-500 py-2"
    />
  </div>
  <button type="submit" className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors">
    <Plus size={20} />
  </button>
</form>
    </div>
  );
}

export default Products;