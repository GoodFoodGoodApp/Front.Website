import React, { useEffect, useState } from "react";
import { Box, Button, IconButton, Input, Table, Thead, Tbody, Tr, Th, Td, Flex, Text, Spinner } from "@chakra-ui/react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import axios from "axios";

const Establishments = () => {
  const [establishments, setEstablishments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch establishments from the API
  useEffect(() => {
    const fetchEstablishments = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/restaurant");
        setEstablishments(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des établissements :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEstablishments();
  }, []);

  // Filter establishments based on the search query
  const filteredEstablishments = establishments.filter((establishment) => establishment.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <Box py={5}>
      <Flex justify="space-between" align="center" mb={4} px={5}>
        <Text fontSize="xl" fontWeight="bold">
          Liste des établissements
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
              <Th>Ville</Th>
              <Th>Téléphone</Th>
              <Th>Région</Th>
              <Th>Statut</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredEstablishments.map((establishment) => (
              <Tr key={establishment.id}>
                <Td>{establishment.name}</Td>
                <Td>{establishment.city.name}</Td>
                <Td>{establishment.phone}</Td>
                <Td>{establishment.city.region.name}</Td>
                <Td>{establishment.status || "N/A"}</Td>
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

export default Establishments;
