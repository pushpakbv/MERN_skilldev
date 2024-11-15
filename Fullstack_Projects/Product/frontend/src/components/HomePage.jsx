import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import AddProduct from './AddProduct';
import GetProduct from './GetProduct';
import EditProduct from './EditProduct';


function HomePage() {
  const [products, setProducts] = useState([]);

  // Fetch products data when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/products/');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const handleUpdateProduct = async (updatedProduct) => {
    const updatedProducts = products.map((product) => product._id === updatedProduct._id ? updatedProduct:product);
    setProducts(updatedProducts);
  };

  const handleDeleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:3000/api/products/${productId}`);
      setProducts(products.filter((product) => product._id !== productId));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <Router>
      <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Product Management</h1>
        <nav className="flex justify-center space-x-4 mb-6">
          <Link to="/" className="text-blue-500 hover:underline">Product List</Link>
          <span>|</span>
          <Link to="/add-product" className="text-blue-500 hover:underline">Add Product</Link>
        </nav>

        <Routes>
          <Route path="/" element={<GetProduct products={products} onDeleteProduct={handleDeleteProduct} />} />
          <Route path="/add-product" element={<AddProduct onAddProduct={handleAddProduct} />} />
          {/* Add more routes if needed */}
          <Route path="/edit-product/:id" element={<EditProduct products={products} onUpdateProduct={handleUpdateProduct} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default HomePage;
