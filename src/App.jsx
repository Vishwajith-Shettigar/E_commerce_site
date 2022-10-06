import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import ProductList from './pages/ProductList'
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import { useCookies } from 'react-cookie';
import { createContext } from 'react';
import Payment from './pages/Payment';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';


import {
  BrowserRouter as Router,
  
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import { useState } from 'react';
import { Axios } from 'axios';
import { useEffect } from 'react';
export const globalinfo=createContext()

const promise=loadStripe(

  'pk_test_51LmWiySBWVK6YpyS7ID8yNBjXi89GAqoCpXyQ1VGEPXleoLyIhVc7GIo8LGwEmGv84OazQlgqzFMMP7lzHoJFH2O00DUVP2uLB'
)
function App() {

  // const [jwtToken,setJwtToken]=useState("none");
  const [username,setUsername]=useState();
  const [userId,setUserid]=useState();
  const [jwtToken, setJwtToken, removeCookie] = useCookies(["user","userId"]);
  const [lol,setlol,removellol]=useState("mome");
  const [productId,setProductId]=useCookies("");
  const [cartCount,setCartcount]=useState();
  const [cart,setCart]=useState()
  const [total,setTotal]=useState()
console.log(cartCount)





  return (
    <Router basename={process.env.PUBLIC_URL}>
      <globalinfo.Provider value={{total:total,setTotal:setTotal, cart:cart,setCart:setCart,cartCount:cartCount,setCartcount:setCartcount,productId:productId,setProductId:setProductId, jwtToken:jwtToken,username:username,userId:userId ,lol:lol,setJwtToken:setJwtToken,setUsername:setUsername,setUserid:setUserid}}>
   <Routes>
<Route path="/" element={  
<><Home/></>}></Route>
<Route path="/shop" element={<><ProductList/></>}></Route>
<Route path="/login" element={<><Login/></>}></Route>  
<Route path="/register" element={<><Register/></>}></Route>  
<Route path="/cart" element={<><Cart/></>}></Route>
<Route path="/product" element={<><Product/></>}></Route>
<Route path="/payment" element={<Elements stripe={promise}><Payment/></Elements>}></Route>
   </Routes>
   </globalinfo.Provider>
    
    </Router>
  );
}

export default App;
