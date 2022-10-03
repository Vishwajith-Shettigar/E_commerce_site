import React, { useState } from 'react'
import Navbar from '../mycomponent/Navbar'
import styled from 'styled-components'
import Announcement from '../mycomponent/Announcement'
import Products from '../mycomponent/Products'
import Newsletter from '../mycomponent/Newsletter'
import Footer from '../mycomponent/Footer'
import { mobile } from '../responsive';

const Container= styled.div`
  
`
const Title= styled.h1`
  margin:20px
`
const FilterContainer= styled.div`
  display: flex;
  justify-content: space-between;
`
const Filter= styled.div`
  margin:20px
  
`

const FilterText=styled.span`
  
font-size: 20px;
font-weight: 600;
margin-right: 20px;
${mobile({marginRight:"0px"})};

`

const Select=styled.select`
padding:10px ;
margin-right: 20px;
${mobile({margin:"10px ,0px"})};
`
const Option=styled.option`

background-color: #e8f2fa;
color: #000000;

font-size: 15px;

`
function ProductList() {
  const [category,setCategory]=useState("");
  const [size,setSize]=useState("");
  const [sort,setSort]=useState("")
  function categorySelect(e)
  {
    
    setCategory(e.target.value)
  }

  function sizeSelect(e)
  {
    
    setSize(e.target.value)
  }

  function sortSelect(e)
  {
setSort(e.target.value);
  }
  return (
    <Container>
<Announcement/>
      <Navbar/>
      <Title>Dresses</Title>
      <FilterContainer>

        <Filter>
<FilterText>Filter Products </FilterText>
<Select onChange={categorySelect}>
<Option disabled selected>Category</Option>
<Option>tshirt</Option>
<Option>shirt</Option>
<Option>women</Option>
<Option>bag</Option>
<Option>cap</Option>
</Select>
<Select onChange={sizeSelect}>
<Option disabled selected>Size</Option>
<Option>XS</Option>
<Option>S</Option>
<Option>M</Option>
<Option>L</Option>
<Option>XL</Option>

</Select>
        </Filter>
        <Filter>
        <FilterText>Sort Products </FilterText>
        <Select onChange={sortSelect}>
<Option  selected>Price</Option>
<Option>High</Option>
<Option>Low</Option>


</Select>
        </Filter>
      </FilterContainer>

<Products category={category} size={size} sort={sort}/>

<Newsletter/>
<Footer/>
    </Container>

  )
}

export default ProductList