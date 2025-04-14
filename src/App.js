import logo from './logo.svg';
import './App.css';
import Homee from './auth/Homee';
import Home from './auth/Home'
import WelcomeClient from './auth/WelcomeClient';
import WelcomeCaissier from './auth/WelcomeCaissier';
import WelcomeGerant from './auth/WelcomeGerant';
import Hello from './components/compter';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Layout from './components/layout';
import Details from './pages/Details';
import Compter from './components/compter';
import Dashboard from './components/dashboard';
import AdminDashboard from './components/AdminDashboard';

function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
     <Route path="/compter" element={<Compter/>} />
     <Route path="/systeme" element={<Homee />} />
     {/* <Route path="/w" element={<Home />} /> */}
        <Route path="/" element={<WelcomeClient />} />
        <Route path="/caissier" element={<WelcomeCaissier/>} />
        <Route path="/gerant" element={<WelcomeGerant/>} />
        <Route path="/dash" element={<Dashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/home" element={<Layout />}> 
      
    </Route>

</Routes>
</BrowserRouter>

</> 
);
}

export default App;
