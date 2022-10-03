import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';
import { useContext } from 'react';
import { globalinfo } from '../App';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
const Container=styled.div`
width: 100vw;
height: 100vh;
background-color: gray;
display: flex;
align-items: center;
justify-content: center;

`
const Wrapper=styled.div`

padding:20px;
width: 40%;
background-color: white;
${mobile({width:"75%"})};
`
const Title=styled.h1`
font-size: 24px;
font-weight: 300;
`
const Form=styled.form`
display: flex;
flex-wrap: wrap;

`

const Input=styled.input`

flex:1;
min-width: 40%;

margin: 20px 10px 0px 0px;
padding: 10px;

`
const Agreement=styled.span`
font-size: 13px;
margin:20px 0px

`
const Button=styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
`

function Register() {
  const {jwtToken,username,userid}=useContext(globalinfo);
  const {setJwtToken,setUserid,setUsername}=useContext(globalinfo);
  const [password,setPassword]=useState();
  const [email,setEmail]=useState()
  const [cpas,setCpass]=useState()
  const navigate=useNavigate();

  function handleUsername(e)
  {
    setUsername(e.target.value)

  }

  
  function handleEmail(e)
  {
    setEmail(e.target.value)
  }
  
  function handlePassword(e)
  {
    setPassword(e.target.value)
  }
  
  function handleCpassword(e)
  {
    setCpass(e.target.value);
  }

  function register(e)
  {

    e.preventDefault();
    if(cpas!=password)
    {
      window.alert("Please match your password")
    }else{
      console.log("isndie")

      
      Axios.post("http://localhost:5000/api/auth/Register",
      {
        username:username,
        email:email,
        password:password


      }).then(res=>{
        setUserid(res.data._id);
setUsername(res.data.username);
        navigate("/login")

      }).catch((e)=>{

        window.alert("username already exists")
      })
      
    }
  }
  return (
    <Container>

        <Wrapper>
            <Title>

                CREATE AN ACCOUNT
            </Title>
            <Form>

                <Input placeholder="First name" />
                <Input placeholder="Last name"/>
                <Input placeholder="username" onChange={(e)=>handleUsername(e)}/>
                <Input placeholder="email" onChange={(e)=>handleEmail(e)}/>
                <Input placeholder="Password" onChange={(e)=>handlePassword(e)}/>
                <Input placeholder="confirm password" onChange={(e)=>handleCpassword(e)}/> 
                
                <Agreement>
                    By creating account your are agreed to our 
                    Privacy policy and you allowd us to store cookies that help us to improve our service 
                </Agreement>
                <Button onClick={register}>Sign up</Button>
           </Form>
          
        </Wrapper> 
    </Container>
  )
}

export default Register