import React from "react";
import { Box, Button, IconButton, Input, Table, Thead, Tbody, Tr, Th, Td, Flex, Text } from "@chakra-ui/react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

const Dishes = () => {
  const dishes = [
    {
      name: "Pizza Margherita",
      category: "Italien",
      price: "12€",
      status: "Disponible",
    },
    {
      name: "Burger Classique",
      category: "Américain",
      price: "9€",
      status: "Indisponible",
    },
    {
      name: "Sushi Mix",
      category: "Japonais",
      price: "15€",
      status: "Disponible",
    },
    {
      name: "Pâtes Carbonara",
      category: "Italien",
      price: "13€",
      status: "Disponible",
    },
    // Add more dishes as needed
  ];

  return (
    <Box py={5}>
      <Flex justify="space-between" align="center" mb={4} px={5}>
        <Text fontSize="xl" fontWeight="bold">
          Liste des plats
        </Text>
        <Flex align="center">
          <Input placeholder="Rechercher..." maxW="300px" mr={4} size="md" bg="white" />
          <Button leftIcon={<FaPlus />} colorScheme="green" size="md">
            Ajouter
          </Button>
        </Flex>
      </Flex>

      <Table variant="simple" bg="white" rounded="md" shadow="sm">
        <Thead>
          <Tr>
            <Th>Nom</Th>
            <Th>Catégorie</Th>
            <Th>Prix</Th>
            <Th>Statut</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {dishes.map((dish, index) => (
            <Tr key={index}>
              <Td>{dish.name}</Td>
              <Td>{dish.category}</Td>
              <Td>{dish.price}</Td>
              <Td>{dish.status}</Td>
              <Td>
                <IconButton aria-label="Edit" icon={<FaEdit />} mr={2} colorScheme="green" />
                <IconButton aria-label="Delete" icon={<FaTrash />} colorScheme="red" />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default Dishes;
