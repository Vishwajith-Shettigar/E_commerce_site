import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useState } from 'react';
import { useContext } from 'react';
import { globalinfo } from '../App';
import { useNavigate } from 'react-router-dom';
// import StripeCheckout from 'react-stripe-checkout';
import { useElements,useStripe,CardElement } from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import useRazorpay from "react-razorpay";
import { mobile } from '../responsive';
import Axios from 'axios';
import { height } from '@mui/system';
// import { Navigate } from 'react-router-dom';
const Container= styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
flex-direction:column ;
    width: 100%;
    height: 100vh;
    background-color: #5b5956;
`
const Block= styled.div`
    
    width: 60%;
    padding: 30px;
    
    background-color: #ffffff;
    ${mobile({width:"80%", height:"100%"})}

`
const Title=styled.h1`
padding-top: 10px;
color: #000000;
padding: 10px;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

`
const Input=styled.input`
padding: 10px;
width: 40%;
margin:10px;
${mobile({width:"95%"})}
`
const Button= styled.button`
width: 200px;
height: 60px;
border-radius: 3px;
font-size: 20px;
margin-top: 10px;
margin: 10px;
padding: 10px 10px 10px 10px;
background-color: green;
color: white;

`


// const cardCont=styled.div`
//     width: 30em;
//     background-color: black;
//     height: 100vh;

// `
function Payment() {
    
    const [address,setAddress]=useState();
    const [name,setName]=useState();
    const [phn,setPhn]=useState();
    const [pin,setPin]=useState();
    const [state,setState]=useState();
    const [country,setCountry]=useState();
    const {cart,setCart}=useContext(globalinfo);
    const {jwtToken}=useContext(globalinfo);
    const {total}=useContext(globalinfo);
    const [stripeToken,setStripetoken]=useState();
    const [clientSecret,setClientsecret]=useState();
 const navigate=useNavigate()
    const Razorpay = useRazorpay();
    
    function handleName(e)
    {
        console.log(e.target.value)
        setName(e.target.value)
    }
    function handleAddress(e)
    {
        setAddress(e.target.value)
    }
    function handlePhn(e)
    {
        console.log(e.target.value)
        setPhn(e.target.value)
    }
    function handlePincode(e)
    {
        console.log(e.target.value)
        setPin(e.target.value)
    }
    function handleState(e)
    {
        console.log(e.target.value)
        setState(e.target.value)
    }
    function handleCountry(e)
    {
        console.log(e.target.value)
        setCountry(e.target.value)
    }

  
//     function pay()
//     {
       

//         console.log(cart,total)
//         Axios.post("http://localhost:5000/api/orders",{

//   userid:jwtToken.userId,

// cart:cart,
// amount:total,
// name:name,

// address:address,
// phn:phn,
// pin:pin,
// state:state,
// country:country,


//         },
//         {
//             headers:{
//                 token:"Barear "+jwtToken.user
//               }
//             }
//         ).then(res=>{
//             console.log(res)
//         })

       
//     }


    // const onToken=(token)=>{
    //     setStripetoken(token)


    //             }
                
// useEffect(()=>{

//     const makeRequest=async()=>{
       
// console.log("hello", stripeToken.id,total)
//         try{
//           const res=await  Axios.post("http://localhost:5000/api/checkout/payment",{

          
//             amount:total*100
//           });
//           setClientsecret(res.data)
          
//         }
//     catch(e)
//     {
// console.log(e)
//     }
// }
// stripeToken && makeRequest()


// },[stripeToken])
const saveOrder=()=>{
        console.log(cart,total)
        Axios.post("https://vishecomapi.herokuapp.com/api/orders",{

  userid:jwtToken.userId,

cart:cart,
amount:total,
name:name,

address:address,
phn:phn,
pin:pin,
state:state,
country:country,


        },
        {
            headers:{
                token:"Barear "+jwtToken.user
              }
            }
        ).then(res=>{
            console.log(res,"hello");
            console.log("lore,mduewewkedwedwedew")
            window.alert("Your order has been placed")
            navigate("/shop")
        })


}

const initPayment=(data)=>{

    const options={
    key:"rzp_test_StrCS9iQQem4W4",
    amount:data.amount,
    currency:data.currency,
    order_id:data.id,
    handler:async (response)=>{
        try{
            const verifyUrl="https://vishecomapi.herokuapp.com/api/checkout/verify";
            const {data}=await Axios.post(verifyUrl,response);
            console.log(data)
            saveOrder()
           

        }
        catch(e)
        {
            console.log(e);
        }
    
    }


    }
const rzp1=new window.Razorpay(options);
rzp1.open();

}
const  pay=async()=>{
try{
    const orderUrl="https://vishecomapi.herokuapp.com/api/checkout/payment";
    const data= await Axios.post(orderUrl,{amount:parseInt(total,10)});
    console.log(data);
    initPayment(data.data);

}catch(e)
{
    console.log(e)
}
}


  return (
    <Container>
<Block>
        <Title>Enter your address</Title>
        <Input placeholder='Enter your  Name' onChange={(e)=>handleName(e)}></Input>
        <Input placeholder='Enter your address' onChange={(e)=>handleAddress(e)}></Input>
        <Input placeholder='Enter your Phone number' onChange={(e)=>handlePhn(e)} ></Input>
        <Input placeholder='Enter your pincode' onChange={(e)=>handlePincode(e)}></Input>
        <Input placeholder='Enter your State' onChange={(e)=>handleState(e)}></Input>
        <Input placeholder='Enter your Country' onChange={(e)=>handleCountry(e)}></Input>
      
   
      
          
       <Button  onClick={pay}>Pay</Button>
        </Block>
    </Container> 
  
  )
}

export default Payment