import logo from './logo.svg';
import './App.css';
import Homee from './auth/Homee';
import WelcomeClient from './auth/WelcomeClient';
import WelcomeCaissier from './auth/WelcomeCaissier';
import WelcomeGerant from './auth/WelcomeGerant';
import Hello from './components/compter';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Layout from './components/layout';
import Details from './pages/Details';
import Home from './pages/Home';

function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<Homee />} />
        <Route path="/client" element={<WelcomeClient />} />
        <Route path="/caissier" element={<WelcomeCaissier/>} />
        <Route path="/gerant" element={<WelcomeGerant/>} />
  
  <Route path="/home" element={<Layout />}>  {/* This will render Layout and its nested content */}
    <Route index element={<Home />} />  {/* This is the home route inside Layout */}
    <Route path=":slug" element={<Details />} />  {/* Dynamic route */}
       </Route>

</Routes>
</BrowserRouter>
{/* <Hello/> */}
    </> 
  );
}

export default App;
