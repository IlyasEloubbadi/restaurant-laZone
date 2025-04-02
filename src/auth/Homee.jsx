import React from 'react';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

function Homee() {
  const navigate = useNavigate(); // Initialize the navigation function

  const handleClient = () => {
    navigate('/client'); // Navigate to the client page
  };

  const handleCaissier = () => {
    navigate('/caissier'); // Navigate to the caissier page
  };

  const handleGerant = () => {
    navigate('/gerant'); // Navigate to the gerant page
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission
    // You can handle other actions here, e.g., form validation, API calls, etc.
  };

  return (
    // <div className="home">
    <div class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#3a211a] via-[#b16448] to-[#c98634] p-8 text-center font-sans">
      <div className="logo">
        <img src={logo} alt="Restaurant Logo" />
      </div>
      <h1 class="text-[#ffd700] text-6xl font-extrabold tracking-wide uppercase drop-shadow-lg">LA ZONE - RESTAURANT</h1>
      <br></br>
      <h2 class="text-white text-4xl font-bold italic">BIENVENUE CHEZ NOUS !</h2> <br></br>
      <hr className="divider" />
      <h3 class="text-white text-3xl font-semibold bg-[#ffd700] px-6 py-3 rounded-full shadow-lg hover:bg-[#f5deb3] transition-colors duration-300">CONNECTEZ – VOUS</h3>
      <div className="button-group">
      {/* <div class="flex justify-center gap-4"> */}
        <form className="button-group-form" onSubmit={handleSubmit}>
        {/* <form class="flex gap-4 p-6 bg-yellow-400/80 rounded-lg hover:bg-orange-600 transition-colors duration-300" onSubmit={handleSubmit}> */}
        <button type="button" className="button" onClick={handleClient}>Client</button>
          <button type="button" className="button" onClick={handleCaissier}>Caissier</button>
          <button type="button" className="button" onClick={handleGerant}>Gerant</button> 
          {/* <button type="button" className="p-3 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-300" onClick={handleClient}>Client</button>
          <button type="button" className="p-3 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-300" onClick={handleCaissier}>Caissier</button>
          <button type="button" className="p-3 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-300" onClick={handleGerant}>Gerant</button> */}
        </form>
      </div>
    </div>
  );
}

export default Homee;
