import React from 'react'
import Announcement from '../mycomponent/Announcement'
import styled from 'styled-components'
import Navbar from '../mycomponent/Navbar'
import Footer from '../mycomponent/Footer'
import  {Add, Remove } from '@material-ui/icons'

import { mobile } from '../responsive';

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
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
<Title>Cart</Title>
<Top>

    <TopButton>Continue Shopping</TopButton>
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

<Product>

    <ProductDetail>
        <Image src="https://media.istockphoto.com/photos/sport-shoes-on-isolated-white-background-picture-id956501428?k=20&m=956501428&s=612x612&w=0&h=UC4qdZa2iA0PJvv0RIBlJDyF80wxFyLPq4YWvZa30Sc="/>
        <Details>
            <ProductName><b>Product:</b> JESSIE THUNDER SHOES</ProductName>
            <ProductId><b>ID:</b> 9381398239393  </ProductId>
            <ProductColor color="white"/>
            <ProductSize><b>Size:</b> 37.5</ProductSize>
        </Details>
    </ProductDetail>
    <PriceDetail>
       <ProductAmountContainer>
        <Add/>
        <ProductAmount>2</ProductAmount>
        <Remove/>
       </ProductAmountContainer>

       <ProductPrice>$30</ProductPrice>

    </PriceDetail>
</Product>
<Hr/>
<Product>

    <ProductDetail>
        <Image src="data:image/jpeg;base64,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"/>
        <Details>
            <ProductName><b>Product:</b> Hakura T Shirt</ProductName>
            <ProductId><b>ID:</b> 9561398239393  </ProductId>
            <ProductColor color="red"/>
            <ProductSize><b>Size:</b> XL</ProductSize>
        </Details>
    </ProductDetail>
    <PriceDetail>
       <ProductAmountContainer>
        <Add/>
        <ProductAmount>1</ProductAmount>
        <Remove/>
       </ProductAmountContainer>

       <ProductPrice>$10</ProductPrice>

    </PriceDetail>
</Product>

</Info>
<Summary>
<SummaryTitle>
    Order Summary
</SummaryTitle>
<SummaryItem>

    <SummaryItemText>Subtotal</SummaryItemText>
    <SummaryItemPrice>$40</SummaryItemPrice>

</SummaryItem>
<SummaryItem>

    <SummaryItemText>Estimated Shipping</SummaryItemText>
    <SummaryItemPrice>$20</SummaryItemPrice>

</SummaryItem>
<SummaryItem>

    <SummaryItemText>Discount</SummaryItemText>
    <SummaryItemPrice>$-20</SummaryItemPrice>

</SummaryItem>
<SummaryItem type="total">

    <SummaryItemText >Total</SummaryItemText>
    <SummaryItemPrice>$40</SummaryItemPrice>

</SummaryItem>
<Button>Checkout Now</Button>
</Summary>

</Bottom>
        </Wrapper>
        
        <Footer/>

    </Container>
  )
}

export default Cart