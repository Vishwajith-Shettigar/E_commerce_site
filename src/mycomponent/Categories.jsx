import styled from 'styled-components'
import React from 'react'
import {categories} from '../data'
import Categoryitem from './Categoryitem'
import {mobile} from '../responsive'

const Container= styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    ${mobile({padding:"0px",flexDirection:"column"})}

`

function Categories() {

  return (
    <Container>
        {

            categories.map(item=>(

                <Categoryitem Item={item}/>
            ))
        }
    </Container>
  )
}

export default Categories