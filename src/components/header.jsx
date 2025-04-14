import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserCircle2 } from 'lucide-react'; // Import the icon

function Header() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const storedName = localStorage.getItem('userName');
    if (storedName) setUserName(storedName);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <header className="flex justify-between items-center px-6 py-3 bg-gradient-to-r from-[#3a211a] via-[#b16448] to-[#c98634] text-white shadow-md">
      
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-[#ffd700] hover:text-white transition">
        laZone
      </Link>

      {/* Profil compact */}
      <div className="flex items-center gap-3">
        <p className="text-md font-medium">Bonjour, {userName || 'Invité'}</p>
        <UserCircle2 size={30} className="text-white" />
        <button 
          onClick={handleLogout} 
          className="bg-red-600 hover:bg-red-400 text-white px-3 py-1 rounded text-sm"
        >
          Déconnexion
        </button>
      </div>
    </header>
  );
}

export default Header;
