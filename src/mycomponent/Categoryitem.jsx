import React from 'react'
import styled from 'styled-components'
import {mobile} from '../responsive'
import { useNavigate } from 'react-router-dom'
const Container= styled.div`
    flex: 1;
    background-color: aqua;
    margin:3px;
    height: 70vh;
    position: relative;

`

const Image=styled.img`
width: 100%;
height: 100%;
object-fit: cover;
${mobile({height:"40vh"})}


`

const Info=styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left:0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


   
  
`
const Title= styled.h1`

color: white;
margin: 20px;
font-weight:2000;

`
const Button=styled.button`
border: none;
padding: 10px;
background-color: white;
color:gray;
font-weight: 600;

`

function Categoryitem({Item}) {

    const navigate= useNavigate();
  return (
   <Container>

    <Image src={Item.img}/>
    <Info>
<Title>{Item.title}</Title>
<Button onClick={()=>navigate("/shop")}>Show now</Button>
    </Info>
    
   </Container>
  )
}

export default Categoryitem