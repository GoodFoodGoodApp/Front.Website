import React from "react";
import { Box, Button, IconButton, Input, Table, Thead, Tbody, Tr, Th, Td, Flex, Text } from "@chakra-ui/react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

const Establishments = () => {
  const establishments = [
    {
      name: "Restaurant La Belle Époque",
      city: "Paris",
      phone: "01 23 45 67 89",
      status: "Ouvert",
    },
    {
      name: "Café du Centre",
      city: "Lyon",
      phone: "04 56 78 90 12",
      status: "Fermé",
    },
    {
      name: "Boulangerie Plaisir",
      city: "Marseille",
      phone: "03 67 89 01 23",
      status: "Ouvert",
    },
    {
      name: "Brasserie Le Sud",
      city: "Nice",
      phone: "06 12 34 56 78",
      status: "Ouvert",
    },
    // Add more establishments as needed
  ];

  return (
    <Box py={5}>
      <Flex justify="space-between" align="center" mb={4} px={5}>
        <Text fontSize="xl" fontWeight="bold">
          Liste des établissements
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
            <Th>Ville</Th>
            <Th>Téléphone</Th>
            <Th>Statut</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {establishments.map((establishment, index) => (
            <Tr key={index}>
              <Td>{establishment.name}</Td>
              <Td>{establishment.city}</Td>
              <Td>{establishment.phone}</Td>
              <Td>{establishment.status}</Td>
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

export default Establishments;
