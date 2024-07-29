import { Link, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Blog from './Pages/Blog';
import Realisations from './Pages/Realisations';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">

       <Header />

       <nav>
          <Link to='/'>Accueil</Link>
          <Link to='/Services'>Services</Link>
          <Link to='/Blog'>Blog</Link>
          <Link to='/Realisations'>Realisations</Link>
          <Link to='/Contact'>Me Contacter</Link>
       </nav>
       <Routes>
        <Route path='/' element={<Home />}>Home</Route> 
        <Route path='/Services' element={<Services />}>Services</Route> 
        <Route path='/Blog' element={<Blog />}>Blog</Route> 
        <Route path='/Realisations' element={<Realisations />}>Realisations</Route> 
        <Route path='/Contact' element={<Contact />}>Contact</Route>      
      </Routes>


       <Footer />
      
    </div>
  );
}

export default App;
