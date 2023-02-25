import React, { useState , useEffect} from 'react';
import { Stack, Input, InputGroup, Button, HStack, Box, Heading, FormLabel, } from '@chakra-ui/react';
import axios from "axios";

function Register() {

    const [formdata , setformData] = useState({
        firstName: "",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:"",
      });
    
      const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post(`http://localhost:8080/register`,{
          ...formdata,
        }).then((res)=>console.log(res))
      }


    return (
        <div >
            <Heading>Create account</Heading>
            <HStack justifyContent="space-evenly" marginTop="30px" marginBottom="50px">
                <Box width='80%' height="auto" marginLeft="200px">
                    <Stack spacing={3} >
                        <FormLabel >First Name </FormLabel>
                        <Input className="name" placeholder="FirstName" type="text" value={formdata.firstName} onChange={(e)=>setformData({...formdata, firstName:e.target.value})}/>

                        <FormLabel >Last Name </FormLabel>
                        <Input className="lastName" placeholder="LastName" type="text" value={formdata.lastName} onChange={(e)=>setformData({...formdata, lastName:e.target.value})}/>
                        <FormLabel >Email </FormLabel>
                        <Input className="email" placeholder="Email" type="text" value={formdata.email} onChange={(e)=>setformData({...formdata, email:e.target.value})}/>
                        <FormLabel>Password</FormLabel>
                        <InputGroup height='48px' width='400px'>
                        <Input className="password" placeholder="password" type="text" value={formdata.password} onChange={(e)=>setformData({...formdata, password:e.target.value})}/>
                        </InputGroup>
                        <FormLabel >Confirm Password </FormLabel>
                        <Input className="confirmPassword" placeholder="confirmPassword" type="text" value={formdata.confirmPassword} onChange={(e)=>setformData({...formdata, confirmPassword:e.target.value})}/>
                        <Button onClick={handleSubmit} type="submit" height='48px' width='400px' border='1px solid black' backgroundColor='#001f48' color="white">
                            CREATE AN ACCOUNT
                        </Button>
                    </Stack>
                </Box>
                <br/>
                <Box width='80%' height="300px">
                    <HStack spacing={4}>
                        <Heading fontSize="18px">HAVE AN ACCOUNT?</Heading>
                    </HStack>
                    <br />
                    <HStack>
                        <Button  height='48px' width='400px' border='1px solid black' backgroundColor='#001f48' color="white">
                            <a href="./login">CLICK HERE TO LOG IN</a>
                        </Button>
                    </HStack>
                </Box>
            </HStack>
        </div>
    )
}

export default Register;