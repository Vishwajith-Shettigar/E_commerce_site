import React from 'react'
import styled from 'styled-components'
import { useContext } from 'react';
import { globalinfo } from '../App';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';


import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Info= styled.div`
opacity: 0;
width: 100%;
height: 100%;
position:absolute;
top: 0;
left: 0;
background-color: rgba(0,0,0,0.2);

z-index: 3;
display: flex;
align-items: center;
justify-content: center;
transition:all 0.3s ease-in ;
cursor: pointer;

`
const Container= styled.div`
flex:1;
margin: 5px;
min-width: 280px;
height: 350px;
display: flex;
align-items: center;
justify-content: center;
position: relative;

&:hover ${Info}{
opacity: 1;
}

     
    `
const Circle= styled.div`
width: 250px;
height: 250px;
background-color: #7d37ff;
position: absolute;
border-radius:50% ;

`

const Image= styled.img`
height:75%;
z-index: 2;
`

const Icon= styled.div`
width:40px;
height:40px;
border-radius: 50%;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
margin: 10px;
transition: all 0.5s ease-in-out;
&:hover{
  background-color: #902222;
  transform: scale(1.2);
}

`



function Product({Item}) {
  const navigate= useNavigate();
  const {jwtToken,username,userId,lol,productId,setProductId}=useContext(globalinfo);

function productClicked(id)
{
  
  setProductId("productid",id);
  
  navigate("/product")
  
}

    function addtocart(id,color,size,price,img,title)
    {
    
    
           if(jwtToken.user===undefined)
           {
            window.alert("Login to proceed")
            navigate("/login")
           }else{
            // console.log(userId)
            Axios.post("http://localhost:5000/api/cart",{
              userid:jwtToken.userId.toString(),
              products:[{
                  productid:id,
                  title:title,
                  quantity:1,
                  color:color,
                  size:size,
                  price:price,
                  img:img

              }],

            },{
              headers:{
                token:"Barear "+jwtToken.user
              }
            }
            ).then(res=>console.log(res)
            )
           }
    }
  return (
   
        <Container onClick={()=>productClicked(Item._id)}>
<Circle/>
<Image src={Item.img}/>
<Info>
  <Icon onClick={()=>addtocart(Item._id,Item.color[0],Item.size[0],Item.price,Item.img,Item.title)}>
<ShoppingCartOutlinedIcon/>
  </Icon>
  <Icon>
<SearchOutlinedIcon/>
    
  </Icon>
  <Icon>
<FavoriteBorderOutlinedIcon/>
    
  </Icon>
</Info>
        </Container>

  )
}

export default Product