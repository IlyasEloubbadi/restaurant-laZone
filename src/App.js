import logo from './logo.svg';
import './App.css';
import Register from './auth/Register';
import Homee from './auth/Homee';
import Home from './auth/Home'
import WelcomeClient from './auth/WelcomeClient';
import WelcomeCaissier from './auth/WelcomeCaissier';
import WelcomeGerant from './auth/WelcomeGerant';
import Hello from './components/compter';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Layout from './components/client/layout';
import Details from './pages/Details';
import Compter from './components/compter';
import Dashboard from './components/dashboard';
import Caissier from './components/caissier';
import Login from './auth/Login';
// import AdminLayout from './components/dashboard';
import AdminProduits from './components/AdminProduits';
import AjoutProduit from './components/dashboard';
import AdminLayout from './components/adminlayout'
import React from 'react';


function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
     <Route path="/compter" element={<Compter/>} />
     <Route path="/" element={<Register/>}/>
     <Route path="/login" element ={<Login/>}/>
     {/* <Route path="/systeme" element={<Homee />} /> */}
     {/* <Route path="/w" element={<Home />} /> */}
        {/* <Route path="/login" element={<WelcomeClient />} /> */}
        {/* <Route path="/caissier" element={<WelcomeCaissier/>} /> */}
        {/* <Route path="/gerant" element={<WelcomeGerant/>} /> */}
        <Route path="/ajouter" element={<AjoutProduit/>} />
        <Route path="/dash" element={<AdminLayout/>} />
        <Route path="/caissier" element={<Caissier/>} />
        <Route path="/produits" element={<AdminProduits/>} />


        <Route path="/home" element={<Layout />}> 
      
    </Route>

</Routes>
</BrowserRouter>

</> 
);
}

export default App;
