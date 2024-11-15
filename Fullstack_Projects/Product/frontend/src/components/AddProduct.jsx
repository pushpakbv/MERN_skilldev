import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddTrainer({ onAddTrainer }) {
  const [trainerName, setTrainerName] = useState('');
  const [trainerLocation, setTrainerLocation] = useState('');
  const [trainerSkills, setTrainerSkills] = useState('');
  const [trainerPhone, setTrainerPhone] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newTrainer = {
      trainer_name: trainerName,
      trainer_location: trainerLocation,
      trainer_skills: trainerSkills,
      trainer_phone: trainerPhone
    };

    try {
      const response = await axios.post('http://localhost:3000/api/trainers/', newTrainer);

      if (response.status === 201) {
        onAddTrainer(response.data);  // Update the parent component if needed
        setTrainerName('');
        setTrainerLocation('');
        setTrainerSkills('');
        setTrainerPhone('');
        navigate('/');
      }
    } catch (error) {
      console.error("Error adding trainer:", error);
      alert("An error occurred while adding the trainer.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Add Trainer</h2>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Trainer Name:</label>
        <input
          type="text"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={trainerName}
          onChange={(e) => setTrainerName(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Trainer Location:</label>
        <input
          type="text"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={trainerLocation}
          onChange={(e) => setTrainerLocation(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Trainer Skills:</label>
        <input
          type="text"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={trainerSkills}
          onChange={(e) => setTrainerSkills(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Trainer Phone:</label>
        <input
          type="number"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={trainerPhone}
          onChange={(e) => setTrainerPhone(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Add Trainer
      </button>
    </form>
  );
}

export default AddTrainer;
