import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import BusinessIcon from '@mui/icons-material/Business';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { Email } from '@material-ui/icons';
import {mobile } from '../responsive'

const Container=styled.div`
display: flex;
${mobile({flexDirection:"column "})}


`
const Left=styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;

`

const Logo=styled.h1``
const Desc=styled.p`
margin:20px 0px

`
const SocialContainer=styled.div`
display: flex;

`
const SocialIcon=styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
margin-right: 23px;
color:White;
background-color: #${prop=>prop.color};
align-items: center;
display: flex;
justify-content: center;
`

const Center=styled.div`
flex: 1;
padding: 20px;
${mobile({display:"none"})}

`

const Title=styled.h3`
margin-bottom: 30px;
`

const List=styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;

`

const ListItem=styled.li`
width: 50%;
margin-bottom: 10px;

`
const Right=styled.div`
flex: 1;
padding: 20px;
${mobile({backgroundColor:"#ffffff "})}

`
const ContactItem=styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;



`

const Payment=styled.img`
    height: 51px;
    width:201px;
    border-radius: 50%;
   
`

function Footer() {
  return (
    <Container>
        <Left><Logo>Layers</Logo>
        <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio quidem commodi est minima suscipit, perferendis magnam odit laudantium dolorem saepe, quod, facere ullam dolorum ipsa soluta mollitia repudiandae eum explicabo?</Desc>
        <SocialContainer>
                        <SocialIcon color="3B5999">
                        <FacebookIcon/> 
                        </SocialIcon>
                        <SocialIcon color="E4405F">
                        <InstagramIcon/> 
                        </SocialIcon>
                        <SocialIcon color="55ACEE">
                        <TwitterIcon/> 
                        </SocialIcon>

        </SocialContainer>
        </Left>

<Center>
<Title>Useful Links</Title>
<List>
<ListItem>Home</ListItem>
<ListItem>Cart</ListItem>
<ListItem>Man Fashion</ListItem>
<ListItem>Woman Fashion</ListItem>
<ListItem>Accessories</ListItem>
<ListItem>My Account</ListItem>
<ListItem> Order Tracking</ListItem>
<ListItem>Wishlist</ListItem>

</List>
</Center>
<Right>

<Title>
Contact
</Title>

<ContactItem>
<BusinessIcon style={{marginRight:"10px"}}/>
622 Dixie path , South Tobonchester 19029
</ContactItem>
<ContactItem>
<PhoneIcon style={{marginRight:"10px"}}/>
  +1 7837682
</ContactItem>
<ContactItem>
<EmailIcon style={{marginRight:"10px"}}/>
layerslol@shop
</ContactItem>
<Payment src="https://www.nicepng.com/png/detail/87-870209_credit-card-logos-fastasticdeals-we-accept-credit-cards.png"/>
</Right>




    </Container>
  )
}

export default Footer