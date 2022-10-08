import React, { useEffect } from 'react'
import Announcement from '../mycomponent/Announcement'
import styled from 'styled-components'
import Navbar from '../mycomponent/Navbar'
import Footer from '../mycomponent/Footer'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { globalinfo } from '../App'
import  {Add, Remove } from '@material-ui/icons'
import { useState } from 'react'
import { mobile } from '../responsive';
import  Axios from 'axios'
import { Refresh } from '@mui/icons-material'

const Container=styled.div`
    

`
const Wrapper=styled.div`
    padding: 20px;
    ${mobile({padding:"10px"})};

`
const Title=styled.h1`
    font-weight: 300;
text-align:center;
`
const Top=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;

`
const TopButton=styled.button`
    padding: 10px;
    font-weight: 600;;
    cursor: pointer;
    border: ${props=>props.type==="filled"&& "none"};
    background-color: ${props=>props.type==="filled"? "black":"transparent"};
    color: ${props=>props.type==="filled"&& "white"};

`



const TopTexts=styled.div`
    ${mobile({display:"none"})};
`
const TopText=styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
   
`
const Bottom=styled.div`
    
display: flex;
justify-content: space-between;
${mobile({flexDirection:"column"})};

`

const  Info=styled.div`
flex: 3;
`


const Product=styled.div`
display: flex;
justify-content: space-between;
${mobile({flexDirection:"column"})};

`
const ProductDetail=styled.div`
flex: 2;
display: flex;


`
const Image=styled.img`
width: 200px;
object-fit: cover;

`
const Details=styled.div`
padding: 20px;
display: flex;
flex-direction: column;
/* justify-content: center; */
justify-content: space-around;


`
const ProductName=styled.span`
padding-bottom:12px;
`
const ProductId=styled.span`
padding-bottom:12px;`
const ProductColor=styled.div`
width: 20px;
height: 20px;
background-color:${props=>props.color};
border-radius: 50%;
border: 1px solid black;
margin-bottom:12px;



`
const ProductSize=styled.span``
const PriceDetail=styled.span`

flex: 1;

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

`
const ProductAmountContainer=styled.div`

display: flex;
align-items: center;
margin-bottom: 20px;
`
const ProductAmount=styled.div`
font-size: 24px;
margin: 5px;
${mobile({margin:"5px 15px"})};


`
const ProductPrice=styled.div`
font-size: 30px;
font-weight: 200;
${mobile({margin:"10px 0px"})};

`

const Hr=styled.hr`
    
    background-color: #eee;
    border: none;
    height: 2px;

`
const Summary=styled.div`
flex: 1;
border: 1px solid lightgray;
border-radius: 10px;
padding: 20px;
height: 50v;


`
const SummaryTitle=styled.h1`
font-weight: 500;

`
const SummaryItem=styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: bold;
font-weight: ${props=>props.type==="total" && "800"};


`
const SummaryItemText=styled.span`


`
const SummaryItemPrice=styled.span``
const Button=styled.button`
width: 100%;
padding: 10px;
background-color: black;
color: white;
font-weight: 600;
`

function Cart() {

    const navigate=useNavigate()

    const {jwtToken}=useContext(globalinfo);
    
        const {cart,setCart}=useContext(globalinfo)
    const [tempre,settempre]=useState("none");
    const {total,setTotal}=useContext(globalinfo)
   const {setCartcount}=useContext(globalinfo)


useEffect(()=>{
    if(!jwtToken.user)
    {
        // window.alert("Login");
        navigate("/")
        navigate("/login")
    }
},[])

function checkOut()

{
    console.log(cart)
    navigate("/payment");


}
useEffect(()=>{



       Axios.get(`https://vishecomapi.herokuapp.com/api/cart/find/${jwtToken.userId}`,{
        headers:{
            token:"Barear "+jwtToken.user
          }
       })
        .then((res)=>{
            // console.log(res.data);
          
            setCart(res.data)
            
         
            
        })
},[tempre])
     
useEffect(()=>{
    if(cart){
    let t=0;
    cart.map((item)=>(
        t+=(item.products[0].price*item.products[0].quantity)
      ))
    
      setTotal(t);
    }
},[cart],[])

function changeQty(aorm,doc_id,qty,productid,title,color,size,price,img)
{
    if(aorm==="add"){
        qty+=1;
    }
    else{
        qty-=1;
    }
    
    
    console.log(productid,title,color,size,price,img)
    Axios.put(`https://vishecomapi.herokuapp.com/api/cart/${jwtToken.userId}`,{

        _id:doc_id,
        userid:jwtToken.userId,

        products:[
       { 
        
      
        productid:productid,
         title:title,
         quantity:qty,
       
        color:color,
        size:size,
        price:price,
        img:img
}
        ]

    },{
        headers:{
            token:"Barear "+jwtToken.user
          }
       })
        .then((res)=>{
            console.log(res);
            
            
            settempre(Math.random())
         
            
        })

}

function minusQty(productId)
{
    console.log(productId);
}

if(cart ){
 
setCartcount(cart.length)
    
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
<Title>Cart</Title>
<Top>

    <TopButton onClick={()=>{
        navigate("/shop")
    }}>Continue Shopping</TopButton>
    <TopTexts>
        <TopText>
            Shopping Bag(2)
        </TopText>
        <TopText>
           Your Wishlist(0)
        </TopText>
    </TopTexts>
    <TopButton type="filled"> Checkout Now</TopButton>
</Top>
<Bottom>
<Info>


{
cart.map((Item)=>(
      <Product>

    <ProductDetail>
        <Image src={Item.products[0].img}/>
        <Details>
            <ProductName><b>Product:</b> {Item.products[0].title}</ProductName>
            <ProductId><b>ID:</b> {Item.products[0].productid}  </ProductId>
            <ProductColor color={Item.products[0].color}/>
            <ProductSize><b>Size:</b> {Item.products[0].size}</ProductSize>
        </Details>
    </ProductDetail>
    <PriceDetail>
       <ProductAmountContainer>
        <Add onClick={()=>changeQty("add",Item._id,Item.products[0].quantity,Item.products[0].productid,Item.products[0].title,Item.products[0].color,Item.products[0].size,Item.products[0].price,Item.products[0].img)}/>
        <ProductAmount>{Item.products[0].quantity}</ProductAmount>
        <Remove onClick={()=>changeQty("minus",Item._id,Item.products[0].quantity,Item.products[0].productid,Item.products[0].title,Item.products[0].color,Item.products[0].size,Item.products[0].price,Item.products[0].img)}/>
       </ProductAmountContainer>

       <ProductPrice>${Item.products[0].price}</ProductPrice>

    </PriceDetail>
</Product>
))
      
   
    
}
<Hr/>


</Info>
<Summary>
<SummaryTitle>
    Order Summary
</SummaryTitle>
<SummaryItem>

    <SummaryItemText>Subtotal</SummaryItemText>
    <SummaryItemPrice>${total}</SummaryItemPrice>

</SummaryItem>
<SummaryItem>

    <SummaryItemText>Estimated Shipping</SummaryItemText>
    <SummaryItemPrice>$0</SummaryItemPrice>

</SummaryItem>
<SummaryItem>

    <SummaryItemText>Discount</SummaryItemText>
    <SummaryItemPrice>${0}</SummaryItemPrice>

</SummaryItem>
<SummaryItem type="total">

    <SummaryItemText >Total</SummaryItemText>
    <SummaryItemPrice>${total}</SummaryItemPrice>

</SummaryItem>
<Button onClick={checkOut}>Checkout Now</Button>
</Summary>

</Bottom>
        </Wrapper>
        
        <Footer/>

    </Container>
  )
}}

export default Cart