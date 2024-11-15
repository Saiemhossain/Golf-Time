
import { Route, Routes } from 'react-router';
import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Service from './pages/Service';
import Blog from './pages/Blog';
import NotFound from './pages/NotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


function App() {


  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/service' element={<Service/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/*' element={<NotFound/>} />
      </Routes>
      <Footer />
</>
  );
}

export default App
