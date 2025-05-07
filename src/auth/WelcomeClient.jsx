import React, { useState } from 'react';
import logo from '../assets/logo1.png'
import { useNavigate } from 'react-router-dom';
export default function WelcomeClient() {
  const [Name, setName] = useState('');
  const[Email,setEmail]=useState('');
  const[Password,setPassword]=useState('');
  

 const navigate = useNavigate(); // Initialize the navigation function
  const handleSubmit = () => {
   //api(axios,fetch)
   //sauvegarder le nom
   localStorage.setItem("userName", Name);
   navigate('/home');
  };


  return (
    <div class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#3a211a] via-[#fbe484] to-[#c98634] text-center font-sans">
        <div className="logo">  
        <img src={logo} alt="Logo" />     
      <h1 class="text-[#ffd700] text-6xl font-extrabold tracking-wide uppercase drop-shadow-lg">LA ZONE - RESTAURANT</h1>
      <h2 class="text-white text-4xl font-bold italic">Connexion</h2>
      <h2 class="text-white text-4xl font-bold italic">BIENVENUE CHEZ NOUS !</h2>
      <hr className="divider" />
      <form onSubmit={handleSubmit}>
      <input
          className="mt-2 p-3 w-full rounded-lg border-2 border-[#8d6e63] focus:ring-2 focus:ring-[#ffd700] outline-none transition duration-300"
          type="text"
          name="Name"
          placeholder="Name"
          value={Name}
          onChange={(e) => setName(e.target.value)}
          required
        /><br /><br />
        <input
          className="mt-2 p-3 w-full rounded-lg border-2 border-[#8d6e63] focus:ring-2 focus:ring-[#ffd700] outline-none transition duration-300"
          type="email"
          name="email"
          placeholder="Email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br /><br />
        <input
          className="mt-2 p-3 w-full rounded-lg border-2 border-[#8d6e63] focus:ring-2 focus:ring-[#ffd700] outline-none transition duration-300"
          type="password"
          name="password"
          placeholder="Mot de passe"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br /><br />
        <button type="submit"
         className="w-full bg-[#ffd700] text-white p-3 rounded-lg font-semibold hover:bg-[#f5deb3] transition-colors duration-300">          Accéder à mon espace 
</button>
      </form>
    </div>
    </div>
  );
}

