import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import About from './components/About';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
import Cart from './components/Cart';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/restaurantmenu/:resid' element={<RestaurantMenu/>}/>
        <Route path='/cart' element={<Cart/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
