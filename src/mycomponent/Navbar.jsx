import React from 'react'
import styled from 'styled-components'
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { grey } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { globalinfo } from '../App';
 
 import { mobile } from '../responsive';
 const Container =styled.div`

    height: 60px;
 
   ${mobile({height:"50px",paddingBottom:"10px"})};

    `

const Wrapper =styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    ${mobile({padding:"10px 0px"})};
`
const Left=styled.div`
   flex: 1;
   display: flex;
   align-items: center;
`
const Right=styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({flex:2,justifyContent:"center"})};
`
const Center=styled.div`
    flex: 2;
    text-align:center;
   
`

const Language=styled.span`
    font: 14px;
    cursor: pointer;
    ${mobile({display:"none"})};
`
const SearchConttainer=styled.div`
    border:0.5px solid lightgrey;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`

const Input=styled.input`
border:none;
${mobile({width:"50px"})};
`
const Logo=styled.h2`
font-weight:bolder;
cursor: pointer;

${mobile({fontSize:"20px"})};

`

const MenuItem = styled.div`
font-size:14px;
cursor: pointer;
margin-left: 25px;
${mobile({fontSize:"11px"})};
${mobile({marginLeft:"6px"})};
`

function Navbar() {
   const navigate=useNavigate()
   const {cartCount}=useContext(globalinfo)

  return (
    <Container>
        <Wrapper>
<Left>
  <Language>EN</Language>
  <SearchConttainer>
    <Input placeholder='Search'/>
 <SearchIcon style={{color:"gray",fontSize:16}} />
  </SearchConttainer>

    </Left>
    
    <Center>
    <Logo onClick={()=>{navigate("/")}}>Layers</Logo>
    </Center>
    <Right>
        <MenuItem onClick={()=>navigate("/Register")}>Register</MenuItem>
        <MenuItem onClick={ ()=>navigate("/Login")}>Login</MenuItem>
        <MenuItem>
        <Badge badgeContent={cartCount} color="primary" onClick={()=>navigate("/cart")}>
       <ShoppingCartOutlinedIcon />
    </Badge>
        </MenuItem>
    </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar