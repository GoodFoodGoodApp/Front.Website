import React, { useEffect, useState } from "react";
import { Box, Button, IconButton, Input, Table, Thead, Tbody, Tr, Th, Td, Flex, Text, Spinner } from "@chakra-ui/react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import axios from "axios";

interface Dish {
  id: string;
  name: string;
  category: string;
  price: number;
  status: string;
}

const Dishes = () => {
  const [dishes, setDishes] = useState<Dish[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch dishes from the API
  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/menu");
        setDishes(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des plats :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDishes();
  }, []);

  // Filter dishes based on the search query
  const filteredDishes = dishes.filter((dish) => dish.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <Box py={5}>
      <Flex justify="space-between" align="center" mb={4} px={5}>
        <Text fontSize="xl" fontWeight="bold">
          Liste des plats
        </Text>
        <Flex align="center">
          <Input placeholder="Rechercher..." maxW="300px" mr={4} size="md" bg="white" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
          <Button leftIcon={<FaPlus />} colorScheme="green" size="md">
            Ajouter
          </Button>
        </Flex>
      </Flex>

      {loading ? (
        <Flex justify="center" align="center" height="200px">
          <Spinner size="lg" />
        </Flex>
      ) : (
        <Table variant="simple" bg="white" rounded="md" shadow="sm">
          <Thead>
            <Tr>
              <Th>Nom</Th>
              <Th>Catégorie</Th>
              <Th>Prix</Th>
              <Th>Statut</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredDishes.map((dish) => (
              <Tr key={dish.id}>
                <Td>{dish.name}</Td>
                <Td>{dish.category || "Non spécifiée"}</Td>
                <Td>{dish.price.toFixed(2)} €</Td>
                <Td>{dish.status || "Indisponible"}</Td>
                <Td>
                  <IconButton aria-label="Edit" icon={<FaEdit />} mr={2} colorScheme="green" />
                  <IconButton aria-label="Delete" icon={<FaTrash />} colorScheme="red" />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}
    </Box>
  );
};

export default Dishes;
