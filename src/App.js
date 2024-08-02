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

function App() {
  return (
    <div className="App">

       <Header />

      <Routes>
        <Route path='/Home' element={<Home />}> Home</Route> 
        <Route path='/Services' element={<Services />}> Services</Route> 
        <Route path='/Blog' element={<Blog />}> Blog</Route> 
        <Route path='/Realisations' element={<Realisations />}> Realisations</Route> 
        <Route path='/MeContacter' element={<Contact />}> Me Contacter</Route>      
        <Route path='/Mentions' element={<Mentions />}> Mentions Légales </Route>
      </Routes>


       <Footer />
      
    </div>
  );
}

export default App;
