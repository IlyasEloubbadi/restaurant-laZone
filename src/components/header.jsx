
import {useState}from 'react'
import { Link } from 'react-router-dom';
// import shoppingcart from '../assets/shopping-cart.png'

function Header() {
  const [name, setName] = useState('');
  return (
    <header className='flex justify-between items-center mb-5' >
   <Link to="/" className='text-xl font-semibold'  >laZone</Link>
  <div className='w-10 h-10 bg-gray-100 rounded-full
            flex justify-center items-center relative'>
     <p className="text-xl">Hello, {name}</p> <br></br>
         <button 
           className="bg-[#ff0000]  p-2 rounded-lg hover:bg-[#f5deb3] transition-colors text[black]" >
           Deconnexion
         </button> 
  {/* <img src={shoppingcart} alt="Cart" className='w-6'/>
  <span className='absolute top-2/3 right-1/2 bg-red-500 text-white 
  text-sm w-5 h-5 rounded-full flex justify-center items-center ' >0</span> */}
  </div>
    </header>
  )
}

export default Header;
