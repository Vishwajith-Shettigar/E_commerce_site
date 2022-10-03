import React, { useEffect, useLayoutEffect, useState } from 'react'
import styled from 'styled-components'
import Announcement from '../mycomponent/Announcement'
import Newsletter from '../mycomponent/Newsletter'
import Navbar from '../mycomponent/Navbar'
import Footer from '../mycomponent/Footer';
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
import { useContext } from 'react'
import { globalinfo } from '../App'
import { mobile } from '../responsive';
import Axios from 'axios'

const Container =styled.div`
`
const Wrapper =styled.div`

padding: 50px;
display: flex;
${mobile({padding:"10px",flexDirection:"column"})};

`
const ImageContainer =styled.div`

flex:1
`
const Image =styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
${mobile({height:"50vh"})};
`
const InfoContainer =styled.div`
flex:1;

padding: 0px 50px;
${mobile({padding:"10px"})};

`
const Title =styled.h1`
font-weight: 200;

`
const Desc =styled.p`
margin:20px 0px ;
`
const Price =styled.span`
font-weight: 100;
font-size: 40px;
`

const FilterContainer=styled.div`
width: 50%;
    display: flex;
    justify-content: space-between;
margin: 30px 0px;
${mobile({width:"100%"})};
`
const Filter=styled.div`
    display: flex;
    align-items: center;

`
const FilterTitle=styled.span`
    font-size: 20px;
    font-weight: 200;


`
const FilterColor=styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
margin: 0px 5px;
cursor: pointer;
`
const FilterSize=styled.select`
    margin-left: 10px;
    padding: 5px;


`
const FilterSizeOption=styled.option`
    

`


const AddContainer=styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    justify-content: space-between;
    ${mobile({width:"100%"})};


`
const AmountContainer=styled.div`
    
display: flex;
align-items: center;
font-weight: 700;

cursor: pointer;
`
const Amount=styled.div`
margin:10px;
width:30px;
border-radius: 10px;
border:1px solid teal;
display: flex;
align-items: center;
justify-content: center;
padding: 4px;


`

const Button=styled.button`
    
  padding: 10px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: bolder;

  &:hover{
    background-color: #fbf9f9;
  }
`
function Product() {
    const {productId}=useContext(globalinfo);
    const [productinfo,setProductinfo]=useState();
    console.log(productId.productid);
    useLayoutEffect(()=>{
        Axios.get(`http://localhost:5000/api/products/find/${productId.productid}`)
         .then(res=>{
            
          
            setProductinfo(res.data);
            
        
        })
    },[productId])
         
  
   /* console.log(productinfo) */
   if(productinfo){
  return (
    <Container>

        <Navbar/>
        <Announcement/>

     {
        
      

            <Wrapper>
        <ImageContainer>
            <Image src={productinfo.img}/>
        </ImageContainer>
        <InfoContainer>

            <Title>{productinfo.title}</Title>
            <Desc>{productinfo.desc}</Desc>
            <Price>${productinfo.price}</Price>

<FilterContainer>
<Filter>
<FilterTitle>Color</FilterTitle>
<FilterColor color="black"/>
<FilterColor color="blue"/>
<FilterColor color="gray"/>

</Filter>
<Filter>
<FilterTitle>Size</FilterTitle>
<FilterSize>
<FilterSizeOption>XS</FilterSizeOption>
<FilterSizeOption>S</FilterSizeOption>
<FilterSizeOption>M</FilterSizeOption>
<FilterSizeOption>XL</FilterSizeOption>

</FilterSize>
</Filter>
</FilterContainer>

<AddContainer>

<AmountContainer>
<Remove/>
<Amount>1</Amount>
<Add/>
</AmountContainer>

<Button>Add to cart</Button>
</AddContainer>
        </InfoContainer>
     </Wrapper>
       
        }


        <Newsletter/>
        <Footer/>
       
    </Container>
  )
}
}
export default Product