import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import { mobile } from '../responsive';
import { globalinfo } from '../App';
import { useState } from 'react';
import Axios from 'axios'
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
width: 25%;
background-color: white;
${mobile({width:"75%"})};
`
const Title=styled.h1`
font-size: 24px;
font-weight: 300;
`
const Form=styled.form`
display: flex;
flex-direction: column;

`

const Input=styled.input`

flex:1;
min-width: 40%;

margin: 10px 0px;
padding: 10px;

`

const Button=styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
margin-top: 10px;
cursor: pointer;

`
const Link=styled.a`
    margin: 5px;
    cursor: pointer;
    font-size: 12px;
    text-decoration: underline;

`


function Login() {

  const {jwtToken,username,userid}=useContext(globalinfo);
  const {setJwtToken,setUserid,setUsername}=useContext(globalinfo);
  const [password,setPassword]=useState();
  const navigate=useNavigate();
function handleUsername(e)
{
  
  setUsername(e.target.value)
  console.log(username)
}

function handlePassword(e)
{
  setPassword(e.target.value)
  console.log(password)
}
  function login()
{


 
  Axios.post("https://vishecomapi.herokuapp.com/api/auth/login",{

    username:username,
   
    password:password
  }
  ).then(res=>{


setUserid(  res.data._id.toString());
setUsername(res.data.username);
console.log("acces token "+res.data.accessToken)
setJwtToken("user",res.data.accessToken,{maxAge: 172800});
console.log("cookie :", jwtToken.user)
setJwtToken("userId",res.data._id.toString(),{maxAge: 172800});

navigate("/")

  }).catch(e=>{
    window.alert("Invalid username or password");
    setUsername("");
    setUserid("");
    setJwtToken("");
  })
  
}


  return (
    <Container>

    <Wrapper>
        <Title>

         Sign in
        </Title>
        <Form>

           
            <Input placeholder="username" onChange={(e)=>handleUsername(e)}/>
           
            <Input placeholder="Password"onChange={(e)=>handlePassword(e)} />
            <Link>Do not remember the password ?</Link>
            <Link href="/Register">Create a new account</Link>
          
            
           
           
       </Form>
       <Button onClick={login}>Login</Button>
    </Wrapper> 
</Container>
  )
}

export default Login