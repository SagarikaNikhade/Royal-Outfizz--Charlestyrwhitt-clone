import React from 'react';
import { Stack, Input, InputGroup, InputRightElement, Button, HStack, Box, Heading, Text, FormLabel, Image } from "@chakra-ui/react";
import {  useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  const handleLogin = () =>{
        axios.get("http://localhost:8080/register")
        .then((res) => {
          const userData = res.data;
          const matchingUserData = userData.find(user => user.email === email && user.password === password);
          
          if (matchingUserData) {
            alert("Login successful");
            window.location.href="/"
          } else {
            alert("Login failed");
          }
        })
        .catch((err) => {
          alert("Login failed");
        });
    };
    return (
    <div >
      <Heading>My account</Heading>
      <HStack justifyContent="space-evenly" marginTop="30px" marginBottom="50px">
        <Box width='80%' height="300px" marginLeft="200px">
          <Stack spacing={3} >
            <FormLabel>Email address</FormLabel>
            <Input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email' size='md' height='48px' width='400px' />
            <FormLabel>Password</FormLabel>
            <InputGroup height='48px' width='400px'>
              <Input
                onChange={(e)=>{setPassword(e.target.value)}}
                value={password}
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                placeholder='Enter password'
              />
              <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={handleClick}>
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
            <FormLabel>Forgotten your password?</FormLabel>
            <Button onClick={handleLogin} height='48px' width='400px' border='1px solid black' backgroundColor='#001f48' color="white">
              Log In
            </Button>
          </Stack>
        </Box>
        <Box width='80%' height="300px">
          <HStack fontWeight="bold"> <Text>New customers</Text></HStack>
          <br />
          <HStack>
            <Text>Set up an account with us and you will be able to:</Text>
          </HStack>
          <br />
          <HStack spacing={4}>
            <Image src='https://www.charlestyrwhitt.com/on/demandware.static/Sites-CTShirts-UK-Site/-/default/dwa6b77e9e/images/svg-icons/order_history.svg' alt='check order' />
            <Text>Check order status</Text>
          </HStack>
          <br />
          <HStack spacing={4}>
            <Image src='https://www.charlestyrwhitt.com/on/demandware.static/Sites-CTShirts-UK-Site/-/default/dw1ffd9907/images/svg-icons/address_book.svg' alt='letter icon' />
            <Text>Save multiple addresses to your address book</Text>
          </HStack>
          <br />
          <HStack spacing={4}>
            <Image src='https://www.charlestyrwhitt.com/on/demandware.static/Sites-CTShirts-UK-Site/-/default/dwb6741088/images/svg-icons/personal_details.svg' alt='set size icon' />
            <Text>Set your size and monogramming preferences</Text>
          </HStack>
          <br />
          <HStack>
            <Button height='48px' width='400px' border='1px solid black' backgroundColor='#001f48' color="white">
              <Link to='/register'>CREATE AN ACCOUNT NOW</Link>
            </Button>
          </HStack>
        </Box>
      </HStack>
    </div>
  )
}

export default Login
