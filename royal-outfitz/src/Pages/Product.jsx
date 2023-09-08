import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";
import { Stack,HStack, Box, Heading, Container, Button,Grid, GridItem, Select, Image, Flex, Center, Text, Square,} from '@chakra-ui/react';
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";

const initialstate = {
  product: [],
  isLoading: false,
  isError: false,
};

const reducerFn = (state, action) => {
  switch (action.type) {
    case "fetch_request":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "fetch_success":
      return {
        ...state,
        product: action.payload,
        isLoading: false,
        isError: false,
      };
    case "fetch_failure":
      return {
        ...state,
        product: [],
        isLoading: false,
        isError: action.payload,
      };
    default:
      throw new Error();
  }
};

function Product() {
  const [state, dispatch] = useReducer(reducerFn, initialstate);
  const [order,setOrder] = useState("asc");
  const [color,setColor] = useState(null);
  const [category,setCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  const {product} = state;

  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = product.slice(indexOfFirstProduct, indexOfLastProduct);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getData = (order="asc") =>{
    dispatch({type :"fetch_request"});
    axios(`http://localhost:8080/cloths?_sort=price&_order=${order}`)
    .then((res)=>{ 
      dispatch({type: "fetch_success" , payload:res.data})
      console.log(res.data)
    })
    .catch((err)=>{
      dispatch({type: "fetch_failure" , payload:err.message})
    })
  };
  
  useEffect(()=>{
    dispatch({type :"fetch_request"});
    if(color){
      axios(`http://localhost:8080/cloths?color=${color}`)
      .then((res)=>{ 
        dispatch({type: "fetch_success" , payload:res.data})
        console.log(res.data)
      })
      .catch((err)=>{
        dispatch({type: "fetch_failure" , payload:err.message})
      })
    }else{
      getData(order)
    }
  },[color,order])

  useEffect(()=>{
    dispatch({type :"fetch_request"});
    if(category){
      axios(`http://localhost:8080/cloths?category=${category}`)
      .then((res)=>{ 
        dispatch({type: "fetch_success" , payload:res.data})
        console.log(res.data)
      })
      .catch((err)=>{
        dispatch({type: "fetch_failure" , payload:err.message})
      })
    }else{
      getData(order)
    }
  },[category,order])

  return (
    <>
      <Flex flexDirection={['column', 'column', 'row']} alignItems="center">
        <Box flex={['1', '1', '1', '0.6']} backgroundColor="#eeeeef" padding="4">
          <Center>
            <Heading as="h1" fontSize={['24px', '28px']} fontWeight="600" mb="4">
              MEN'S COATS & JACKETS
            </Heading>
          </Center>
          <Center>
            <Text fontSize={['14px', '16px']} fontFamily="Futura, Arial">
              From field jackets to Epsom overcoats, Tyrwhitt's outerwear collection offers coats and jackets for any style: raincoats you'll want to wear even when it's sunny, to blazers for work and weekend.
            </Text>
          </Center>
        </Box>
        <Center w={['100%', '100%', '100%', '40%']}>
          <Image
            src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw9be3ba51/merchAssets/SS23/TIBs/tib-ss23-jackets-coats.jpg"
            alt="Coats and Jackets"
            maxW="100%"
          />
        </Center>
      </Flex>

      <Flex justifyContent="flex-end">
        <Box w={['100%', '100%', '100%', '20%']} borderBottom="1px solid black" mb="4">
          <HStack spacing="2">
            <Button backgroundColor="#eeeeef" onClick={() => setOrder('desc')}>
              PRICE HIGH TO LOW
            </Button>
            <Button backgroundColor="#eeeeef" onClick={() => setOrder('asc')}>
              PRICE LOW TO HIGH
            </Button>
          </HStack>
        </Box>
      </Flex>

      <Container maxW="100%">
        <Flex flexDirection={['column', 'column', 'column', 'row']} alignItems={['center', 'center', 'center', 'flex-start']}>
          <Box flex={['1', '1', '1', '0.4']} mb={['4', '4', '4', '0']} p="4">
            <Stack spacing="4">
              <Select placeholder="STYLE" w="100%" onChange={(e) => setCategory(e.target.value)}>
                <option value="shirts">SHIRTS</option>
                <option value="suits">SUITS</option>
                <option value="trousers">TROUSERS</option>
                <option value="knitwear">KNITWEAR</option>
                <option value="coats">COATS & JACKETS</option>
                <option value="shoes">SHOES</option>
                <option value="accessories">ACCESSORIES</option>
              </Select>

              <Select placeholder="FIT" w="100%">
                <option value="classic">CLASSIC FIT</option>
                <option value="slim">SLIM FIT</option>
              </Select>

              <Select placeholder="CHEST SIZE" w="100%">
                <option value="36">36"</option>
                <option value="38">38"</option>
                <option value="40">40"</option>
                <option value="42">42"</option>
                <option value="44">44"</option>
                <option value="46">46"</option>
                <option value="48">48"</option>
              </Select>

              <Select placeholder="COLOR" w="100%" onChange={(e) => setColor(e.target.value)}>
                <option value="black">BLACK</option>
                <option value="blue">BLUE</option>
                <option value="brown">BROWN</option>
                <option value="cream">CREAM</option>
                <option value="green">GREEN</option>
                <option value="grey">GREY</option>
              </Select>

              <Select placeholder="FABRIC" w="100%">
                <option value="shirts">COTTON MIX</option>
                <option value="suits">WOOL MIX</option>
                <option value="trousers">SYNTHETIC</option>
              </Select>
            </Stack>
          </Box>

          <Center w={['100%', '100%', '100%', '60%']}>
            <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)']} gap={['4', '6']}>
              {product.length &&
                product.map((el) => (
                  <GridItem key={el.id}>
                    <ProductCard
                      id={el.id}
                      title={el.title}
                      image={el.image}
                      price={el.price}
                    />
                  </GridItem>
                ))}
            </Grid>
          </Center>
        </Flex>
      </Container>
      <br/>
      {/* <Center>
        <Pagination
          currentPage={currentPage}
          itemsPerPage={productsPerPage}
          totalItems={product.length}
          onPageChange={handlePageChange}
        />
      </Center> */}
    </>
  );
};

export default Product;