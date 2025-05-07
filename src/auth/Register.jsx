import React, { useState } from "react";
import logo from '../assets/logo1.png';
import axios from "axios";
import { useNavigate } from 'react-router-dom';


function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
    // // State to manage password visibility
    // const [showPassword, setShowPassword] = useState(false);
  
    // // Toggle the password visibility
    // const togglePassword = () => {
    //   setShowPassword(!showPassword);
    // };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
 const navigate = useNavigate(); // Initialize the navigation function
const handleLogin = () =>{
  navigate('/login')
}
  const handleSubmit = async (e) => {
    // navigate('/');
    e.preventDefault();
    try {
      const res = await axios.post("http://127.0.0.1:8000/api/register", formData);
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response ? err.response.data.message : "Erreur lors de l'inscription");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#3a211a] via-[#fbe484] to-[#c98634] text-center font-sans">
              <button 
          onClick={handleLogin} 
          className=" bg-[#ffd700] text-white  font-semibold hover:bg-[#f5deb3] transition-colors duration-300"
        >
          login
        </button>
        <div className="logo">  
        <img src={logo} alt="Logo" /> 
        <h1 className="text-[#ffd700] text-6xl font-extrabold tracking-wide uppercase drop-shadow-lg">LA ZONE - RESTAURANT</h1>
      <h2 className="text-white text-4xl font-bold italic">Inscription</h2>
      <hr className="divider" />
      <form onSubmit={handleSubmit}>
        <input
          className="mt-2 p-3 w-full rounded-lg border-2 border-[#8d6e63] focus:ring-2 focus:ring-[#ffd700] outline-none transition duration-300"
          type="text"
          name="name"
          placeholder="Nom"
          value={formData.name}
          onChange={handleChange}
          required
        /><br /><br />
        <input
          className="mt-2 p-3 w-full rounded-lg border-2 border-[#8d6e63] focus:ring-2 focus:ring-[#ffd700] outline-none transition duration-300"
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        /><br /><br />
        <input
          className="mt-2 p-3 w-full rounded-lg border-2 border-[#8d6e63] focus:ring-2 focus:ring-[#ffd700] outline-none transition duration-300"
          type="password"
          name="password"
          placeholder="Mot de passe"
          value={formData.password}
          onChange={handleChange}
          required
        /> <br /><br />
        {/* <div>
      <input
        className="mt-2 p-3 w-full rounded-lg border-2 border-[#8d6e63] focus:ring-2 focus:ring-[#ffd700] outline-none transition duration-300"
        type={showPassword ? 'text' : 'password'}
        id="password"
        name="password"
        placeholder="Enter your password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <button type="button" onClick={togglePassword}>
        {showPassword ? 'Hide' : 'Show'}
      </button>
    </div>*/}
        <button type="submit"
         className="w-full bg-[#ffd700] text-white p-3 rounded-lg font-semibold hover:bg-[#f5deb3] transition-colors duration-300">S'inscrire</button>
      </form>
      <div style={{ color: 'red' }}>{message}</div>
      

    </div>
    </div>
  );
}

export default Register;
