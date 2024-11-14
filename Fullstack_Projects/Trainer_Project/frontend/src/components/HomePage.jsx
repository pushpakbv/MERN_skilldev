import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import AddTrainer from './AddTrainer';
import GetTrainer from './GetTrainer';

function HomePage() {
  const [trainers, setTrainers] = useState([]);

  // Fetch trainers data when the component mounts
  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/trainers/');
        setTrainers(response.data);
      } catch (error) {
        console.error('Error fetching trainers:', error);
      }
    };
    fetchTrainers();
  }, []);

  const handleAddTrainer = (newTrainer) => {
    setTrainers([...trainers, newTrainer]);
  };

  const handleDeleteTrainer = async (trainerId) => {
    try {
      await axios.delete(`http://localhost:3000/api/trainers/${trainerId}`);
      setTrainers(trainers.filter((trainer) => trainer._id !== trainerId));
    } catch (error) {
      console.error('Error deleting trainer:', error);
    }
  };

  return (
    // <Router>
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-6">Trainer Management</h1>

      <nav className="flex justify-center space-x-4 mb-6">
        <Link to="/" className="text-blue-500 hover:underline">Trainer List</Link>
        <span>|</span>
        <Link to="/add-trainer" className="text-blue-500 hover:underline">Add Trainer</Link> {/* Update path if needed */}
      </nav>

      <Routes>
        <Route path="/" element={<GetTrainer trainers={trainers} onDeleteTrainer={handleDeleteTrainer} />} />
        <Route path="/add-trainer" element={<AddTrainer onAddTrainer={handleAddTrainer} />} />
        {/* Add more routes if needed */}
      </Routes>
    </div>
    // </Router>
  );
}

export default HomePage;
