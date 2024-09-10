import React from "react";
import { Box, Text, VStack, Button } from "@chakra-ui/react";
import { useState } from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
}

const Cart: React.FC = () => {
  // Simulate cart items
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: "Plat 1", price: 10.0 },
    { id: 2, name: "Plat 2", price: 20.0 },
    // Add more items as needed
  ]);

  const handleCheckout = () => {
    // Handle checkout logic
    alert("Proceeding to checkout");
  };

  return (
    <Box position="fixed" right="0" top="0" width="250px" height="100vh" bg="gray.100" boxShadow="md" p={4} zIndex="9999">
      <Text fontSize="xl" mb={4} fontWeight="bold">
        Mon Panier
      </Text>
      <VStack spacing={4} align="stretch">
        {cartItems.length === 0 ? (
          <Text>Votre panier est vide</Text>
        ) : (
          cartItems.map((item) => (
            <Box key={item.id} p={3} bg="white" borderRadius="md" boxShadow="sm">
              <Text fontWeight="bold">{item.name}</Text>
              <Text>${item.price.toFixed(2)}</Text>
            </Box>
          ))
        )}
      </VStack>
      <Button mt={4} colorScheme="teal" onClick={handleCheckout}>
        Passer à la caisse
      </Button>
    </Box>
  );
};

export default Cart;
