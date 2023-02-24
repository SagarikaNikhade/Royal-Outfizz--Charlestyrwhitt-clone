import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";
import { Stack, Box, Heading, Container, Button,ButtonGroup, Spacer, Grid, GridItem, Select, Image, Flex, Center, Text, Square,} from '@chakra-ui/react';
import ProductCard from "./ProductCard";
import { useSearchParams } from "react-router-dom";

const initialstate = {
  products: [],
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
        products: action.payload,
        isLoading: false,
        isError: false,
      };
    case "fetch_failure":
      return {
        ...state,
        products: [],
        isLoading: false,
        isError: action.payload,
      };
    default:
      throw new Error();
  }
};

function Product() {
  const [state, dispatch] = useReducer(reducerFn, initialstate);
  const { products, isLoading, isError } = state;
  const [searchParam , setSearchParam] = useSearchParams();
  const [page, setPage] = useState(1);
  const [sortby , setSortBy]=useState("");
  const [filterby , setFilterBy]=useState("");
  const sort="price";
  const limit=12;

useEffect(()=>{
  let apiUrl;
        if(sortby){
            apiUrl = `http://localhost:8080/cloths?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${sortby}`;
        }else if(filterby){
            apiUrl = `http://localhost:8080/cloths?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${sortby}&category=${filterby}`;
        }
        else{
            apiUrl = `http://localhost:8080/cloths?_page=${page}&_limit=${limit}`;
        }
  // const getData = (apiUrl) => {
    dispatch({ type: "fetch_request" });
     axios.get(apiUrl)
    // axios.get(`  http://localhost:8080/cloths?_sort=${sort}&_order={sortby}`)
      .then((res) => {
        dispatch({ type: "fetch_success", payload: res.data });
        // console.log(res.data);
      })
      .catch((err) =>
        dispatch({ type: "fetch_failure", payload: err.message })
      )
  // };
},[page , sortby , filterby])
  // useEffect(() => {
  //   getData()
  // }, [page]);

  // useEffect(()=>{
  //   if(sortby === "asc"){
  //     const arr = products.sort((a,b)=> a.price - b.price)
  //     setpost(...arr)
  //   }else if(sortby === "desc"){
  //     const arr = products.sort((a,b)=> b.price - a.price)
  //     setpost(...arr)
  //   }
  // },[sortby])
  useEffect(()=>{
    let paramObj={page,sortby};
    if(sortby){
     paramObj.sortby = sortby;
    }
    if(filterby){
     paramObj.filterby = filterby;
    }
    setSearchParam(paramObj)
 },[page , sortby , filterby])
  //  console.log(products);

  return (
    <>
      <Flex marginBottom={2}>
        <Box flex='1' backgroundColor="#eeeeef">
        <Center>
          <Heading marginTop={20} fontFamily='commuter sans, Verdana' fontSize='28px' fontWeight='600'>MEN'S COATS & JACKETS</Heading>
          </Center>
          <br/>
          <Center>
            <Text fontFamily='Futura,Arial' fontSize='14px'>From field jackets to Epsom overcoats, Tyrwhitt's outerwear collection offers coats and jackets for any style: raincoats you'll want to wear even when it's sunny, to blazers for work and weekend.</Text>
          </Center>
        </Box>
        <Center w='200px' >
          <Image src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw9be3ba51/merchAssets/SS23/TIBs/tib-ss23-jackets-coats.jpg" alt="error"/>
        </Center>
        <Center w='200px'>
        <Image src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw24834b42/merchAssets/SS23/TIBs/tib-ss23-jackets-jackets.jpg" alt="error"/>
        </Center>
        <Center w='200px'>
        <Image src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw41e1f28b/merchAssets/AW22/TIBs/tib-aw22-066.jpg" alt="error"/>
        </Center>
      </Flex>
      <Flex>
        <Spacer />
        <Box w="20%" borderBottom="1px solid black" marginBottom="10px">
          <Select placeholder='SORT BY' backgroundColor="#eeeeef">
            <option value='recommended'>RECOMMENDED</option>
            <option value='toprated'>TOP RATED</option>
            <option value='HTL' onClick={()=>setSortBy("desc")}>PRICE HIGH TO LOW</option>
            <option value='LTH' onClick={()=>setSortBy("asc")}>PRICE LOW TO HIGH</option>
          </Select>
        </Box>
      </Flex>
      <Container maxW='100%'>
        <Flex >
          <Square w='20%' >
            <Stack w='80%' >
              <Box  marginTop='-600px'>
                <Select placeholder='STYLE' w='100%' >
                  <option value='shirts'>SHIRTS</option>
                  <option value='suits'>SUITS</option>
                  <option value='trousers'>TROUSERS</option>
                  <option value='knitwear'>KNITWEAR</option>
                  <option value='coats'>COATS & JACKETS</option>
                  <option value='shoes'>SHOES</option>
                  <option value='accessories'>ACCESSORIES</option>
                </Select>
                <br />
                <Select placeholder='FIT' w='100%'>
                  <option value='classic'>CLASSIC FIT</option>
                  <option value='slim'>SLIM FIT</option>
                </Select>
                <br />
                <Select placeholder='CHEST SIZE' w='100%'>
                  <option value='36'>36"</option>
                  <option value='38'>38"</option>
                  <option value='40'>40"</option>
                  <option value='42'>42"</option>
                  <option value='44'>44"</option>
                  <option value='46'>46"</option>
                  <option value='48'>48"</option>
                </Select>
                <br />
                <Select placeholder='COLOR' w='100%'>
                  <option value='black'>BLACK</option>
                  <option value='blue'>BLUE</option>
                  <option value='brown'>BROWN</option>
                  <option value='cream'>CREAM</option>
                  <option value='green'>GREEN</option>
                  <option value='grey'>GREY</option>
                </Select>
                <br />
                <Select placeholder='FABRIC' w='100%'>
                  <option value='shirts'>COTTON MIX</option>
                  <option value='suits'>WOOL MIX</option>
                  <option value='trousers'>SYNTHETIC</option>
                </Select>
              </Box>
            </Stack>
          </Square>
          <Center w='80%' >
            <Grid templateColumns="repeat(4,1fr)" gap={6}>
              {products?.length &&
                products.map((el) => (
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
      <Box>
      <ButtonGroup variant='outline' spacing='6' marginBottom={4}>
            <Button isDisabled={page === 1} onClick={()=>setPage(page - 1)}>PREV</Button>
            <Button>{page}</Button>
            <Button onClick={()=>setPage(page + 1)}>NEXT</Button>
            {/* <Button onClick={()=>setPage(1)}>RESET</Button> */}
      </ButtonGroup>
      </Box>
    </>
  )
};

export default Product;