import { Link as RouterLink, Navigate } from "react-router-dom";
import { Flex ,Heading ,Tabs, TabList, TabPanels, Tab, TabPanel} from '@chakra-ui/react';

function Navbar(){
    const links = [
        {path:"/" , title:"Home"},
        {path:"/login" , title:"Login"},
        {path:"/search" , title:"Search"}, 
        {path:"/bag" , title:"Bag"},
        {path:"/register", title:"Register"}
        ]
        
    return (
        <>
        <img src="Images\Logo.png" alt="logo" />
        <Flex align={"center"} justifyContent={"space-around"} fontSize="20px">
            {links.map((el)=>{
                return(
                    <RouterLink key={el.path} to={el.path}>
                        <Heading>{el.title}</Heading>
                    </RouterLink>
                )
            })}
        </Flex>
        <Tabs variant='enclosed'>
  <TabList>
    <Tab>SHIRTS</Tab>
    <Tab>SUITS</Tab>
    <Tab>TROUSERS</Tab>
    <Tab>KNITWEAR</Tab>
    <Tab>COATS & JACKETS</Tab>
    <Tab>SHOES</Tab>
    <Tab>ACCESSORIES</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
    {/* <Navigate to="/bag"/> */}
    one
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
        </>
    )
}

export default Navbar;