import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Blog from './Pages/Blog';
import Realisations from './Pages/Realisations';
import Contact from './Pages/Contact';
import Mentions from './Pages/Mentions';
import Profile from './Pages/Profile';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <div className="App">

       <Header />

      <Routes>
        <Route path='/' element={<Home />}> Home</Route>
        <Route path='/Home' element={<Home />}> Home</Route> 
        <Route path='/Services' element={<Services />}> Services</Route> 
        <Route path='/Blog' element={<Blog />}> Blog</Route> 
        <Route path='/Realisations' element={<Realisations />}> Realisations</Route> 
        <Route path='/MeContacter' element={<Contact />}> Me Contacter</Route>      
        <Route path='/Mentions' element={<Mentions />}> Mentions Légales </Route>
        <Route path='/Profile' element={<Profile />}>Profil</Route>
        <Route path='*' element={<NotFound />} />
      </Routes>


       <Footer />
      
    </div>
  );
}

export default App;
