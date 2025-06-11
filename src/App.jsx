import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar.jsx'
import Shop from './pages/Shop.jsx'
import Product from './pages/Product.jsx';
import ShopCategory from './pages/ShopCategory.jsx'
import Cart from './pages/Cart.jsx';
import LoginSingUp from './pages/LoginSingUp.jsx';
import man_banner from './assets/banner.jpg';
import woman_banner from './assets/women_banner.avif';
import kids_banner from './assets/kids_banner.jpg';

function App() {


  return (
    <>
      
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Shop/>}></Route>
          <Route path="/mens" element={<ShopCategory banner={man_banner} category="men"/>}></Route>
          <Route path="/womens" element={<ShopCategory banner={woman_banner} category="women"/>}></Route>
          <Route path="/Kids" element={<ShopCategory banner={kids_banner} category="kid"/>} ></Route>
          <Route path="/product" element={<Product></Product>}></Route>
          <Route path="/product/:productId" element={<Product></Product>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route path="/login" element={<LoginSingUp></LoginSingUp>}></Route> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
