import React from 'react'
import styled from 'styled-components'
const Container =styled.div`
display: flex;
height: 30px;
background-color: teal;
font-size: 14px;
color: white;
align-items: center;
justify-content: center;

    
`
function Announcement() {
  return (
    <Container>
        Super deal grab it now hurrayyyyyyyy!!
    </Container>
  )
}

export default Announcement