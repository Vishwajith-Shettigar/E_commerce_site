import React, { useEffect, useLayoutEffect, useState } from 'react'
// import {popularProducts} from '../data'
import Axios from 'axios'
import styled from 'styled-components'
import Product from './Product'
const Container= styled.div`
         display: flex;
    padding: 20px;
    justify-content: space-between;
    flex-wrap: wrap;

    
    `


function Products({category,size,sort}) {

  const [popularproducts,setPopularProducts]=useState([]);

console.log(category,size,sort)
  useEffect(()=>{
Axios.get(`http://localhost:5000/api/products?category=${category}&size=${size}&sort=${sort}`)
  .then(res=>{
    
    console.log(res.data);
  setPopularProducts(res.data);

});

  },[category,sort,size])
  
  
  return (
    <Container >
{popularproducts.map(item=>(
<Product Item={item}/>

))}
    </Container>
  )
}

export default Products