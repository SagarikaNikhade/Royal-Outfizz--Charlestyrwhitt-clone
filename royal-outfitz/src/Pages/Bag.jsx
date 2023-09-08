import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Text,
  Button,
  VStack,
  HStack,
  Image,
  Spacer,
  useMediaQuery,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@chakra-ui/react';
import axios from 'axios';

const Bag = () => {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  const [cartItems, setCartItems] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure(); 

  const handleCheckout = () => {
    setTimeout(() => {
      onOpen();
    }, 1000);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/cart`)
      .then((res) => {
        setCartItems(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const incrementQuantity = (itemId) => {
    // First, update the local state
    const updatedCartItems = cartItems.map((item) =>
      item.id === itemId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCartItems(updatedCartItems);
  
    // Then, make an API request to update the backend
    const apiUrl = `http://localhost:8080/cart/${itemId}`;
  
    axios
      .patch(apiUrl)
      .then((response) => {
        const updatedItem = response.data;
        // You can choose to update the local state again with the response if needed.
        // setCartItems(updatedCartItems);
        console.log('Item quantity incremented successfully:', updatedItem);
      })
      .catch((error) => {
        console.error('Error incrementing item quantity:', error);
      });
  };

  const decrementQuantity = (itemId) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === itemId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updatedCartItems);
  };

  const calculateTotal = () => {
    const total = cartItems.reduce((acc, item) => {
      if (item.price && item.quantity) {
        return acc + item.price * item.quantity;
      }
      return acc;
    }, 0);
    return total.toFixed(2);
  };

  const removeItem = (itemId) => {
    axios.delete(`http://localhost:8080/cart/${itemId}`)
    .then((response) => {
      console.log('Item deleted successfully:', response.data);
      setCartItems(response.data)
    })
    .catch((error) => {
      console.error('Error deleting item:', error);
    });
  };

  return (
    <Container maxW="container.xl">
      <Box py={10}>
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          Your Cart
        </Text>

        <VStack spacing={4} align={isLargerThan768 ? 'flex-start' : 'center'}>
          {cartItems.map((item) => (
            <Box
              key={item.id}
              borderWidth="1px"
              borderRadius="lg"
              p={4}
              display="flex"
              flexDirection={isLargerThan768 ? 'row' : 'column'}
              alignItems={isLargerThan768 ? 'center' : 'flex-start'}
            >
              <Image
                src={item.image}
                alt={item.title}
                maxW="100px"
                maxH="100px"
                mb={isLargerThan768 ? 0 : 4}
              />
              <Spacer />
              <VStack spacing={2}>
                <Text fontSize="lg">{item.title}</Text>
                <Text fontSize="sm" color="gray.500">
                  Price: £{item.price}
                </Text>
                <HStack spacing={2}>
                  <Button
                    colorScheme="blue"
                    onClick={() => decrementQuantity(item.id)}
                  >
                    -
                  </Button>
                  <Text fontSize="lg">{item.quantity}</Text>
                  <Button
                    colorScheme="blue"
                    onClick={() => incrementQuantity(item.id)}
                  >
                    +
                  </Button>
                </HStack>
              </VStack>
              <Spacer />
              <Text fontSize="lg">
              £{(item.price * item.quantity).toFixed(2)}
              </Text>
              <Spacer />
              <Button
                colorScheme="red"
                onClick={() => removeItem(item.id)}
              >
                Remove
              </Button>
            </Box>
          ))}
        </VStack>

        <HStack mt={8} spacing={4} justifyContent="flex-end">
          <Text fontSize="lg">
            Total: <strong>£{calculateTotal()}</strong>
          </Text>
          <Button colorScheme="green" onClick={handleCheckout}>
            Checkout
          </Button>
        </HStack>

        {/* Modal */}
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Payment Successful</ModalHeader>
            <ModalBody>
              Thank you for your purchase! Your payment was successful.
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="green" onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Container>
  );
};

export default Bag;
