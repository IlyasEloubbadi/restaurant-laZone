import React, { useState } from 'react';
import logo from '../assets/logo.png';

export default function WelcomeCaissier() {
  const [caisserName, setCaisserName] = useState('');
  const [caissieremail, setCaissierEmail] = useState('');
  const [caissierpassword, setCaissierPassword] = useState('');

  const handleSubmit = () => {
    
   //Api(fetch,axios)
  };
  return (
    <div>
      {/* <div className="body"> */}
      <div class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#3a211a] via-[#b16448] to-[#c98634] p-8 text-center font-sans">
      <div className="logo">  
        <img src={logo} alt="Logo" /> 
        {/* <h1 className="title">LA ZONE - RESTAURANT</h1>  */}
        {/* <h2 className="client">BIENVENUE CHEZ NOUS !</h2> */}
        {/* <hr className="divider" /> */}
        {/* <h2 className="client-espace">Espace Caissier</h2> */}
      <h1 class="text-[#d2c620] text-6xl font-extrabold tracking-wide uppercase drop-shadow-lg">LA ZONE - RESTAURANT</h1>
      <br></br>
      <h2 class="text-white text-4xl font-bold italic">BIENVENUE CHEZ NOUS !</h2> <br></br>
      <hr className="divider" />
      <h3 class="text-white text-3xl font-semibold bg-[#ffd700] px-6 py-3 rounded-full shadow-lg hover:bg-[#f5deb3] transition-colors duration-300">Espace Caissier</h3>

        <form onSubmit={handleSubmit}>
        <input
          // className="Name"
          className="mt-2 p-3 w-full rounded-lg border-2 border-[#8d6e63] focus:ring-2 focus:ring-[#ffd700] outline-none transition duration-300"
          type="text"
          placeholder="Entrer votre prénom"
          value={caisserName}
          onChange={(e) => setCaisserName(e.target.value)}
        /><br />

        <input
          // className="Name"
          className="mt-2 p-3 w-full rounded-lg border-2 border-[#8d6e63] focus:ring-2 focus:ring-[#ffd700] outline-none transition duration-300"
          type="email"
          placeholder="Entrer votre Email"
          value={caissieremail}
          onChange={(e) => setCaissierEmail(e.target.value)}
        /><br />

        <input
          // className="Name"
          className="mt-2 p-3 w-full rounded-lg border-2 border-[#8d6e63] focus:ring-2 focus:ring-[#ffd700] outline-none transition duration-300"
          type="password"
          placeholder="Entrer votre mot de passe"
          value={caissierpassword}
          onChange={(e) => setCaissierPassword(e.target.value)}
        /><br />

<button onClick={handleSubmit => ({ caisserName,caissieremail,caissierpassword })} 
          // className="connect"
          className="w-full bg-[#ffd700] text-white p-3 rounded-lg font-semibold hover:bg-[#f5deb3] transition-colors duration-300"
        >
          Accéder à mon espace
        </button>
        </form>
      </div>
      </div>
    </div>
  );
};
