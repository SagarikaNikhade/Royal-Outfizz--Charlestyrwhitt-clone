import { Link as RouterLink } from "react-router-dom";
import { Flex, Heading, Text, Input, Image, } from '@chakra-ui/react';

function Navbar() {

  return (
    <>
      <Flex alignItems="center" justifyContent="space-between" fontSize="20px" paddingY="10px">
        <RouterLink to="/">
          <Image w="50%" h="60px" src="https://tse2.mm.bing.net/th/id/OIP.ie5djyEIiwZBc-vFVNqYuAHaHa?pid=ImgDet&rs=1" alt="location" />
        </RouterLink>
        <RouterLink to="/login">
          <Image w="50%" h="60px" src="https://th.bing.com/th/id/R.825ed0f45a0622ccf56cf95eb9e4ba96?rik=16%2baIpTG1A2LAw&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_415642.png&ehk=r9IPFEo5vVcyITyD8O6iH1IOLw39pviQ4tkMYJjebks%3d&risl=&pid=ImgRaw&r=0" alt="user" />
        </RouterLink>
        <RouterLink to="/">
          <Text
            fontSize="3xl"
            fontWeight="italic"
            letterSpacing="2px"
            fontFamily="system-ui"
            mb={4}
          >
           <span style={{ color: 'blue',textTransform:"uppercase" }}>R</span>oyal 
           <span style={{ color: 'red',textTransform:"uppercase" }}>O</span>utfizz
          </Text>

        </RouterLink>
        <Input w="30%" placeholder="Search" backgroundColor="#eeeeef" />
        <RouterLink to="/bag">
          <Image w="60%" h="60px" src="https://static.vecteezy.com/system/resources/previews/000/653/780/original/vector-shopping-bag-icon.jpg" alt="bag" />
        </RouterLink>
      </Flex>

      <Flex alignItems="center" justifyContent="space-around" h="40px" fontSize="20px" backgroundColor="#eeeeef" marginTop="10px">
        <RouterLink to="/product">
          <Text>SHIRTS</Text>
        </RouterLink>
        <RouterLink to="/product">
          <Text>SUITS</Text>
        </RouterLink>
        <RouterLink to="/product">
          <Text>TROUSERS</Text>
        </RouterLink>
        <RouterLink to="/product">
          <Text>COAT AND JACKETS</Text>
        </RouterLink>
        <RouterLink to="/product">
          <Text>SHOES</Text>
        </RouterLink>
        <RouterLink to="/product">
          <Text>ACCESSORIES</Text>
        </RouterLink>
      </Flex>
    </>
  );
}

export default Navbar;