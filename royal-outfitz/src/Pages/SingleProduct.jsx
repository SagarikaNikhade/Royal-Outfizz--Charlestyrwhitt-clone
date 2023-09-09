import { useParams } from "react-router-dom";
import { useState, useEffect} from "react";
import { Center, Box, Image, Stack, Heading, Text, Button, UnorderedList, ListItem } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';

function SingleProduct() {
  const [item, setItem] = useState({});
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const toast = useToast();
  const { id } = useParams();

  useEffect( ()=>{
    async function fetchData() {
    try {
          const response = await fetch(`https://wide-eyed-colt-capris.cyclic.cloud/cloths/${id}`);
          if (response.ok) {
            const data = await response.json();
            setItem(data);
            console.log("fetching successfull!!")
          } else {
            console.error('Failed to fetch item details');
          }
        } catch (error) {
          console.error('Error fetching item details:', error);
        }
      }
      fetchData()
  },[])

  // Function to handle adding the item to the cart
  const addToCart = async () => {

    try {
      const response = await fetch('https://wide-eyed-colt-capris.cyclic.cloud/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({...item,quantity: 1}),
      });
  
      if (response.ok) {
        setIsAddedToCart(true);
        toast({
          title: 'Item added to cart successfully',
          status: 'success',
          position: 'bottom-right',
          duration: 3000,
          isClosable: true,
        });
      } else {
        console.error('Failed to add item to cart');
        toast({
          title: 'Failed to add item to cart',
          status: 'error',
          position: 'bottom-right',
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error('Error adding item to cart:', error);
      toast({
        title: 'Error adding item to cart',
        status: 'error',
        position: 'bottom-right',
        duration: 3000,
        isClosable: true,
      });
    }
  };


  return (
    <Center>
    <Box
      w={['100%', '90%', '70%']}
      borderWidth='1px'
      borderRadius='lg'
      overflow='hidden'
      marginBottom={30}
    >
      <Stack
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        spacing={4}
      >
        <Image
          objectFit='cover'
          maxW={{ base: '100%', sm: '200px', md: '300px' }}
          src={item.image}
          alt={item.title}
        />
        <Stack spacing={4}>
          <Box>
            <Heading as='h1' fontSize={['24px', '28px']} fontWeight='600'>
              {item.title}
            </Heading>
            <Text fontSize='sm'>£{item.price}</Text>
            <Text fontSize='sm'>{item.category}</Text>
            <Text py={2}>{item.description}</Text>
          </Box>
          <Button
            onClick={addToCart}
            isDisabled={isAddedToCart}
            height='48px'
            width={['100%', 'auto']}
            backgroundColor='#116a60'
            color='white'
          >
            {isAddedToCart ? 'Added to Cart' : 'Add to Cart'}
          </Button>
          <Box>
            <Heading as='h4' fontSize='lg'>
              PRODUCT DETAILS
            </Heading>
            <Text>6 MONTH QUALITY GUARANTEE</Text>
            <Text fontSize='sm' fontStyle='italic'>
              Product code: SHL0209BLK
            </Text>
            <Text fontSize='sm'>
              Our Oxford shoes have all of the features of the much-loved
              traditional design, while keeping your comfort in mind. Crafted in
              England, the style is made from quality calf leather with a Goodyear
              welted construction for a breathable and long-lasting finish.
              Inside, we've added flexible leather insoles to put a spring in your
              step and EVA foam filler to mould to your feet. There's also a
              half-leather insock, which provides extra support with each step.
            </Text>
          </Box>
          <UnorderedList marginLeft={4}>
            <ListItem>100% leather</ListItem>
            <ListItem>
              100% leather lining with a half leather in sock
            </ListItem>
            <ListItem>Lasted and finished in England</ListItem>
            <ListItem>Goodyear welted construction</ListItem>
            <ListItem>
              Leather soles with scalloped embossing to add comfort and
              flexibility
            </ListItem>
            <ListItem>EVA foam filler moulds to your foot</ListItem>
            <ListItem>Specialist shoe care products</ListItem>
          </UnorderedList>
        </Stack>
      </Stack>
    </Box>
  </Center>
  
  );
}

export default SingleProduct;