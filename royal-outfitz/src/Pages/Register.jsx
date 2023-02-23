import React, { useState } from 'react';
import { Stack, Input, InputGroup, Button, HStack, Box, Heading, FormLabel, } from '@chakra-ui/react';

function Register() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "firstName") {
            setFirstName(value);
            // console.log(firstName)
        }
        if (id === "lastName") {
            setLastName(value);
        }
        if (id === "email") {
            setEmail(value);
        }
        if (id === "password") {
            setPassword(value);
        }
        if (id === "confirmPassword") {
            setConfirmPassword(value);
        }

    }

    const handleSubmit = () => {
        console.log(firstName, lastName, email, password, confirmPassword);
    }

    return (
        <div >
            <Heading>Create account</Heading>
            <HStack justifyContent="space-evenly" marginTop="30px" marginBottom="50px">
                <Box width='80%' height="auto" marginLeft="200px">
                    <Stack spacing={3} >
                        <FormLabel >First Name </FormLabel>
                        <Input type="text" onChange={(e) => handleInputChange(e)} id="firstName" value={firstName} placeholder="First Name" size='md' height='48px' width='400px' />

                        <FormLabel >Last Name </FormLabel>
                        <Input type="text" name="" id="lastName" value={lastName} onChange={(e) => handleInputChange(e)} placeholder="LastName" size='md' height='48px' width='400px' />
                        <FormLabel >Email </FormLabel>
                        <Input type="email" id="email" value={email} onChange={(e) => handleInputChange(e)} placeholder="Email" size='md' height='48px' width='400px' />
                        <FormLabel>Password</FormLabel>
                        <InputGroup height='48px' width='400px'>
                            <Input type="password" id="password" value={password} onChange={(e) => handleInputChange(e)} placeholder="Password" />
                        </InputGroup>
                        <FormLabel >Confirm Password </FormLabel>
                        <Input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => handleInputChange(e)} placeholder="Confirm Password" />
                        <Button onClick={() => handleSubmit()} type="submit" height='48px' width='400px' border='1px solid black' backgroundColor='#001f48' color="white">
                            CREATE AN ACCOUNT
                        </Button>
                    </Stack>
                </Box>
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