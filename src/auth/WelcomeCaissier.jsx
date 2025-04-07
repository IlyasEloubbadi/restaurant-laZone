import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

export default function WelcomeCaissier() {
  const [Name, setName] = useState(''); // Ensure this is declared here
  const [caissierEmail, setCaissierEmail] = useState('');
  const [caissierPassword, setCaissierPassword] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    localStorage.setItem("userName", Name);
    navigate('/home'); // Navigate to home
    // Optionally handle API call here
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#3a211a] via-[#fbe484] to-[#c98634] text-center font-sans">
      <div className="logo">
        <img src={logo} alt="Logo" />
        <h1 className="text-[#d2c620] text-6xl font-extrabold tracking-wide uppercase drop-shadow-lg">LA ZONE - RESTAURANT</h1>
        <h2 className="text-white text-4xl font-bold italic">BIENVENUE CHEZ NOUS !</h2>
        <hr className="divider" />
        <h3 className="text-white text-3xl font-semibold bg-[#ffd700] px-6 py-3 rounded-full shadow-lg hover:bg-[#f5deb3] transition-colors duration-300">Espace Caissier</h3>

        <form onSubmit={handleSubmit}>
          <input
            className="mt-2 p-3 w-full rounded-lg border-2 border-[#8d6e63] focus:ring-2 focus:ring-[#ffd700] outline-none transition duration-300"
            type="text"
            placeholder="Entrer votre prénom"
            required
            value={Name}
            onChange={(e) => setName(e.target.value)}
          /><br />

          <input
            className="mt-2 p-3 w-full rounded-lg border-2 border-[#8d6e63] focus:ring-2 focus:ring-[#ffd700] outline-none transition duration-300"
            type="email"
            placeholder="Entrer votre Email"
            required
            value={caissierEmail}
            onChange={(e) => setCaissierEmail(e.target.value)}
          /><br />

          <input
            className="mt-2 p-3 w-full rounded-lg border-2 border-[#8d6e63] focus:ring-2 focus:ring-[#ffd700] outline-none transition duration-300"
            type="password"
            placeholder="Entrer votre mot de passe"
            required
            value={caissierPassword}
            onChange={(e) => setCaissierPassword(e.target.value)}
          /><br />

          <button 
            type="submit"
            className="w-full bg-[#ffd700] text-white p-3 rounded-lg font-semibold hover:bg-[#f5deb3] transition-colors duration-300"
          >
            Accéder à mon espace
          </button>
        </form>
      </div>
    </div>
  );
};
