import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Shop  from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup'
import { Footer } from './Components/Footer/Footer';
import men_banner from './Components/Assets/mentop.jpg';
import women_banner from "./Components/Assets/womentop.jpg";
import kid_banner from "./Components/Assets/kidtop.jpg";
import './Components/Footer/Footer.css'
function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route
              path="/mens"
              element={
                <div className="shop-category-container">
                  <ShopCategory banner={men_banner} category="mens" />{" "}
                </div>
              }
            />
            <Route
              path="/womens"
              element={
                <div className="shop-category-container">
                  <ShopCategory banner={women_banner} category="womens" />
                </div>
              }
            />
            <Route
              path="/kids"
              element={
                <div className="shop-category-container">
                  <ShopCategory banner={kid_banner} category="kids" />
                </div>
              }
            />
            <Route
              path="product"
              element={
                <div>
                  <Product />
                </div>
              }
            >
              <Route
                path=":productId"
                element={
                  <div className="shop-category-container2">
                    <Product />
                  </div>
                }
              />
            </Route>

            <Route
              path="/cart"
              element={
                <div className="shop-category-container">
                  <Cart />
                </div>
              }
            />
            <Route
              path="/login"
              element={
                <div className="shop-category-container1">
                  <LoginSignup />
                </div>
              }
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
