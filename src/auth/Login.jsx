import {useState} from 'react';
import axios from'axios';
import logo from '../assets/logo1.png'
import {useNavigate} from 'react-router-dom';


export default function Login(){
    // const [name,setName] = useState('');
    const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [message, setMessage] = useState("");
        const [error, setError] = useState('');

        const handleRegister = () =>{
          navigate('/')
        }
        const navigate = useNavigate();
        const handleLogin = async (e) => {
            e.preventDefault();
            try {
              const response = await axios.post('http://127.0.0.1:8000/api/login', {
                email,
                password
              });
              setMessage(response.data.message);
        
              // 🟢 Ici on vérifie la réponse
            //   if (response.data.status === 'success') {
            //     alert('Connexion réussie !');
        
                // ✅ ON STOCKE LE TOKEN ICI
                localStorage.setItem('token', response.data.token);
                // on stock l'username(nom d'utilisateur) pour l'utiliser dans le header
                localStorage.setItem('username', response.data.name);
                //stocker le role
                localStorage.setItem('role', response.data.role);
        
                // 🔁 Redirection (si tu veux)
                if (response.data.role === 'admin') {
                    // window.location.href = '/dashboard';
                    navigate('/dash')

                  } else if (response.data.role === 'caissier') {
                    // window.location.href = '/caissier';
                    navigate('/caissier')
                    
                  } else {
                    window.location.href = '/home';
                  }
                // }
              } catch (err) {
                // Gestion des erreurs de connexion
               
                  setError(err.response.data.message);
              }
            };
        
        

    return(
        <div>
   <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#3a211a] via-[#fbe484] to-[#c98634] text-center font-sans">
   <button 
          onClick={handleRegister} 
          className=" bg-[#ffd700] text-white  font-semibold hover:bg-[#f5deb3] transition-colors duration-300"
        >
          Register
        </button>
      <div className="logo">
        <img src={logo} alt="Logo" />
        <h1 className="text-[#d2c620] text-6xl font-extrabold tracking-wide uppercase drop-shadow-lg">LA ZONE - RESTAURANT</h1>
        <h2 className="text-white text-4xl font-bold italic">BIENVENUE CHEZ NOUS !</h2>
        <hr className="divider" />
        {/* <h3 className="text-white text-3xl font-semibold bg-[#ffd700] px-6 py-3 rounded-full shadow-lg hover:bg-[#f5deb3] transition-colors duration-300">Espace Caissier</h3> */}

        <form onSubmit={handleLogin}>
          {/* <input
            className="mt-2 p-3 w-full rounded-lg border-2 border-[#8d6e63] focus:ring-2 focus:ring-[#ffd700] outline-none transition duration-300"
            type="text"
            placeholder="Entrer votre prénom"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          /><br /> */}

          <input
            className="mt-2 p-3 w-full rounded-lg border-2 border-[#8d6e63] focus:ring-2 focus:ring-[#ffd700] outline-none transition duration-300"
            type="email"
            placeholder="Entrer votre Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          /><br />

          <input
            className="mt-2 p-3 w-full rounded-lg border-2 border-[#8d6e63] focus:ring-2 focus:ring-[#ffd700] outline-none transition duration-300"
            type="password"
            placeholder="Entrer votre mot de passe"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /><br />

          <button 
            type="submit"
            className="w-full bg-[#ffd700] text-white p-3 rounded-lg font-semibold hover:bg-[#f5deb3] transition-colors duration-300"
          >
            Accéder à mon espace
          </button>
          {error && <div style={{ color: 'red' }}>{error}</div>}
        </form>
      </div>
    </div>

        </div>
    )
}