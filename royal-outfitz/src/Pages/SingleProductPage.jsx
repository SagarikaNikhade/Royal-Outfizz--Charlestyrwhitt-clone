import { useParams } from "react-router-dom";
import { useState, useEffect, useReducer } from "react";
import { Center, Box, Image, Stack, Heading, Text, Button, UnorderedList, ListItem } from '@chakra-ui/react';
import axios from "axios";

// const initialstate = {
//   cart: [],
//   isLoading: false,
//   isError: false,
// };

// const reducerFn = (state, action) => {
//   switch (action.type) {
//     case "fetch_request":
//       return {
//         ...state,
//         isLoading: true,
//         isError: false,
//       };
//     case "fetch_success":
//       return {
//         ...state,
//         cart: action.payload,
//         isLoading: false,
//         isError: false,
//       };
//     case "fetch_failure":
//       return {
//         ...state,
//         cart: [],
//         isLoading: false,
//         isError: action.payload,
//       };
//     default:
//       throw new Error();
//   }
// };

// const getData = (url) => {
//   return fetch(url)
//     .then((res) => res.json())
// }

// function SingleProduct() {
//   const [state, dispatch] = useReducer(reducerFn, initialstate);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);
//   const [single, setSingle] = useState({});
//   const { id } = useParams();

//   const fetchAndRender = () => {
//     setLoading(true);
//     getData(`http://localhost:8080/cloths/${id}`)
//       .then((res) => {
//         console.log(res.data)
//         setSingle(res)
//       })
//       .catch((err) => {
//         console.log(err)
//         setError(true)
//       })
//       .finally(() => setLoading(false));
//   };

//   const AddToCart = () => {
//     // Assuming you have a cart state in your component's state
//     const { cart } = state;
  
//     // Assuming your fetched data has a structure like { id, title, price, ... }
//     const productToAdd = {
//       id: single.id,
//       title: single.title,
//       price: single.price,
//       // Add other relevant properties here
//     };
  
//     // Check if the product is already in the cart
//     const isProductInCart = cart.some((item) => item.id === productToAdd.id);
  
//     if (isProductInCart) {
//       // If the product is already in the cart, you can update the quantity, for example
//       const updatedCart = cart.map((item) =>
//         item.id === productToAdd.id
//           ? { ...item, quantity: item.quantity + 1 }
//           : item
//       );
  
//       dispatch({ type: "fetch_success", payload: updatedCart });
//     } else {
//       // If the product is not in the cart, add it with a quantity of 1
//       const newCartItem = { ...productToAdd, quantity: 1 };
//       dispatch({ type: "fetch_success", payload: [...cart, newCartItem] });
//     }
//   };
  

//   useEffect(() => {
//     fetchAndRender();
//   }, []);

//   return (
//     <Center>
//       <Box w={['100%', '90%', '70%']} borderWidth='1px' borderRadius='lg' overflow='hidden' marginBottom={30}>
//         <Stack direction={{ base: 'column', sm: 'row' }} overflow='hidden' spacing={4}>
//           <Image
//             objectFit='cover'
//             maxW={{ base: '100%', sm: '200px', md: '300px' }}
//             src={single?.image}
//             alt={single?.title}
//           />
//           <Stack spacing={4}>
//             <Box>
//               <Heading as='h1' fontSize={['24px', '28px']} fontWeight='600'>{single?.title}</Heading>
//               <Text fontSize='sm'>{single?.price}</Text>
//               <Text fontSize='sm'>{single?.category}</Text>
//               <Text py={2}>{single?.description}</Text>
//             </Box>
//             <Button onClick={AddToCart} height='48px' width={['100%', 'auto']} backgroundColor='#116a60' color="white">
//               Add To Bag
//             </Button>
//             <Box>
//               <Heading as='h4' fontSize='lg'>PRODUCT DETAILS</Heading>
//               <Text>6 MONTH QUALITY GUARANTEE</Text>
//               <Text fontSize='sm' fontStyle='italic'>Product code: SHL0209BLK</Text>
//               <Text fontSize='sm'>
//                 Our Oxford shoes have all of the features of the much-loved traditional design, while keeping your comfort in mind. Crafted in England, the style is made from quality calf leather with a Goodyear welted construction for a breathable and long-lasting finish. Inside, we've added flexible leather insoles to put a spring in your step and EVA foam filler to mould to your feet. There's also a half-leather insock, which provides extra support with each step.
//               </Text>
//             </Box>
//             <UnorderedList marginLeft={4}>
//               <ListItem>100% leather</ListItem>
//               <ListItem>100% leather lining with a half leather in sock</ListItem>
//               <ListItem>Lasted and finished in England</ListItem>
//               <ListItem>Goodyear welted construction</ListItem>
//               <ListItem>Leather soles with scalloped embossing to add comfort and flexibility</ListItem>
//               <ListItem>EVA foam filler moulds to your foot</ListItem>
//               <ListItem>Specialist shoe care products</ListItem>
//             </UnorderedList>
//           </Stack>
//         </Stack>
//       </Box>
//     </Center>
//   );
 
// }

// export default SingleProduct;

const SingleProduct = () => {
  const [item, setItem] = useState({}); // State to store item details
  const [isAddedToCart, setIsAddedToCart] = useState(false); // State to track if the item is added to the cart
  const { id } = useParams();

  // Function to fetch item details (replace with your API call logic)
  // const fetchSingleProducts =  async() => {
  //   try {
  //     const response = await fetch(`http://localhost:8080/cloths/${id}`);
  //     if (response.ok) {
  //       const data = await response.json();
  //       setItem(data);
  //       console.log("fetching successfull!!")
  //     } else {
  //       console.error('Failed to fetch item details');
  //     }
  //   } catch (error) {
  //     console.error('Error fetching item details:', error);
  //   }
  // };

  // console.log(item)

  // // Function to handle adding the item to the cart
  // const addToCart = async () => {
  //   try {
  //     const response = await fetch('http://localhost:8080/cart', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(item),
  //     });

  //     if (response.ok) {
  //       setIsAddedToCart(true);
  //     } else {
  //       console.error('Failed to add item to cart');
  //     }
  //   } catch (error) {
  //     console.error('Error adding item to cart:', error);
  //   }
  // };

  const handleAddToCart = async () => {
    try {
      // Fetch item details
      const response = await fetch(`http://localhost:8080/cloths/${id}`);
      if (response.ok) {
        const data = await response.json();
        setItem(data);
        console.log("Fetching successful!!");
        
        // Add the item to the cart
        const cartResponse = await fetch('http://localhost:8080/cart', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
  
        if (cartResponse.ok) {
          setIsAddedToCart(true);
          console.log('Item added to cart successfully!');
        } else {
          console.error('Failed to add item to cart');
        }
      } else {
        console.error('Failed to fetch item details');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>{item.title}</h1>
      <p>Price: ${item.price}</p>
      {/* <button onClick={fetchSingleProducts}>Fetch Item Details</button>
      <button onClick={addToCart} disabled={isAddedToCart}>
        {isAddedToCart ? 'Added to Cart' : 'Add to Cart'}
      </button> */}
      <button onClick={handleAddToCart} disabled={isAddedToCart}>
  {isAddedToCart ? 'Added to Cart' : 'Add to Cart'}
</button>
    </div>
  );
};

export default SingleProduct;
