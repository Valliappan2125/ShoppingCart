/* eslint-disable react-refresh/only-export-components */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import { useState,createContext } from "react";

export const cartContext = createContext();

const App = () => {
  const [cart, setCart] = useState([]);
  return (
    <>
    <cartContext.Provider value={{cart,setCart}}>
    <BrowserRouter>
      <Navbar cart={cart}/>
      <div className="p-5">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    </cartContext.Provider>
    </>
  )
}

export default App