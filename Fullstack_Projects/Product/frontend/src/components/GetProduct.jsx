import React from 'react';
import { Link } from 'react-router-dom';

function GetProduct({ products, onDeleteProduct }) {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <ul className="space-y-4">
        {products.map((product) => (
          <li key={product._id} className="p-4 bg-white shadow-md rounded-lg">
            <p className="text-gray-700"><strong>Name:</strong> {product.product_name}</p>
            <p className="text-gray-700"><strong>Location:</strong> {product.product_location}</p>
            <p className="text-gray-700"><strong>Skills:</strong> {product.product_skills}</p>
            <p className="text-gray-700"><strong>Phone:</strong> {product.product_phone}</p>
            <div className="mt-4 flex space-x-2">
              <Link to={`/edit-product/${product._id}`}>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  Edit
                </button>
              </Link>
              <button
                onClick={() => onDeleteTrainer(trainer._id)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GetTrainer;
