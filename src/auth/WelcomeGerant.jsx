import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';
export default function WelcomeCaissier() {
  const [gerantName, setGerantName] = useState('');
  const [gerantemail, setGerantEmail] = useState('');
  const [gerantpassword, setGerantPassword] = useState('');
 const navigate = useNavigate(); // Initialize the navigation function

  const handleSubmit = () => {
    navigate('/dash');

   //Api(fetch,axios)
  };
  return (
    <div>
      {/* <div className="body"> */}
      <div class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#3a211a] via-[#fbe484] to-[#c98634] text-center font-sans">
      <div className="logo">  
        <img src={logo} alt="Logo" /> 
        {/* <h1 className="title">LA ZONE - RESTAURANT</h1>  */}
        {/* <h2 className="client">BIENVENUE CHEZ NOUS !</h2> */}
        {/* <hr className="divider" /> */}
        {/* <h2 className="client-espace">Espace Caissier</h2> */}
      <h1 class="text-[#ffd700] text-6xl font-extrabold tracking-wide uppercase drop-shadow-lg">LA ZONE - RESTAURANT</h1>
      <br></br>
      <h2 class="text-white text-4xl font-bold italic">BIENVENUE CHEZ NOUS !</h2> <br></br>
      <hr className="divider" />
      <h3 class="text-white text-3xl font-semibold bg-[#ffd700] px-6 py-3 rounded-full shadow-lg hover:bg-[#f5deb3] transition-colors duration-300">Espace Gerant</h3>

        <form onSubmit={handleSubmit}>
        <input
          // className="Name"
          className="mt-2 p-3 w-full rounded-lg border-2 border-[#8d6e63] focus:ring-2 focus:ring-[#ffd700] outline-none transition duration-300"
          type="text"
          placeholder="Entrer votre prénom"
          required
          value={gerantName}
          onChange={(e) => setGerantName(e.target.value)}
        /><br />

        <input
          // className="Name"
          className="mt-2 p-3 w-full rounded-lg border-2 border-[#8d6e63] focus:ring-2 focus:ring-[#ffd700] outline-none transition duration-300"
          type="email"
          placeholder="Entrer votre Email"
          required
          value={gerantemail}
          onChange={(e) => setGerantEmail(e.target.value)}
        /><br />

        <input
          // className="Name"
          className="mt-2 p-3 w-full rounded-lg border-2 border-[#8d6e63] focus:ring-2 focus:ring-[#ffd700] outline-none transition duration-300"
          type="password"
          placeholder="Entrer votre mot de passe"
          required
          value={gerantpassword}
          onChange={(e) => setGerantPassword(e.target.value)}
        /><br />

         <button onClick={handleSubmit} 
          // className="connect"
          className="w-full bg-[#ffd700] text-white p-3 rounded-lg font-semibold hover:bg-[#f5deb3] transition-colors duration-300">
          Accéder à mon espace 
        </button>
        </form>
      </div>
      </div>
    </div>
  );
};
