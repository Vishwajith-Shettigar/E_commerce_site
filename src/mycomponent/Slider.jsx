import React from 'react'
import styled from 'styled-components'
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import {sliderItems} from '../data'
import { useState } from 'react';
import {mobile} from '../responsive'
import { Navigate, Redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Container= styled.div`
    width:100%;
    height: 100vh;
    display: flex;
    overflow: hidden;
    position: relative;
    ${mobile({display:"none"})}
`
const Arrow = styled.div`
width :50px;
height: 50px;
background-color: #fff7f7;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
margin: auto;
left:${props=>props.direction==="left" && "10px"};
right:${props=>props.direction==="right" && "10px"};
cursor: pointer;
opacity: 0.5;
z-index: 2;
`
const Wrapper=styled.div`
    height: 100%;
    display: flex;
  transition: all 1.5s ease-in;
    transform:translateX(${props=> props.SlideIndex*-100}vw);
`

const Slide= styled.div`
display: flex;
align-items: center;
width: 100vw;
height: 100vh;
background-color: #${props=>props.bg};


`

const ImgContainer= styled.div`
    flex:1;
    height:100%;


`
const Image=styled.img`
    height: 80%;
`
const InfoContainer = styled.div`
    flex:1;
    padding: 50px;

`
const Title=styled.h1`
font-size: 70px;

`
const Desc=styled.p`
margin: 50px 0px;
font-size: 20px;
font-weight:500;
letter-spacing: 3px;
`

const Button=styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
`
function Slider() {
    const navigate = useNavigate();

const [slideindex,setslideindex]=useState(0)



function handleclick(direction)
{
    console.log("jhio")
    if(direction==="left")
    {
        setslideindex(slideindex>0? slideindex-1 : 2)
    }else
    {
        setslideindex(slideindex<2? slideindex+1:0)
    }

}

function goShop()
{

   navigate("/shop")
}
  return (
    <Container>
        <Arrow direction="left"  onClick={()=>handleclick("left")}>
      <KeyboardArrowLeftOutlinedIcon/>
        </Arrow>
<Wrapper SlideIndex={slideindex}>
{sliderItems.map((items)=>(



 <Slide bg={items.bg}>
    <ImgContainer>
    <Image src={items.img}/>
    </ImgContainer>
    <InfoContainer>
<Title>{items.title}</Title>
<Desc>{items.desc}</Desc>
<Button onClick={goShop} >Show now</Button>
    </InfoContainer>

</Slide>
)


)}

   

</Wrapper >
        <Arrow direction="right" onClick={()=>handleclick("right")}>
      <KeyboardArrowRightOutlinedIcon/>
        </Arrow>
    </Container>   
  )
}

export default Slider