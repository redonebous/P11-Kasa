import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Logement from './pages/Logement/Logement';
import Error from './pages/Error/Error';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/kasa/:id' element={<Logement />} />
        <Route path='/*' element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
