import React from "react";
import { Box, Button, IconButton, Input, Table, Thead, Tbody, Tr, Th, Td, Flex, Text } from "@chakra-ui/react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

const Employees = () => {
  const employees = [
    {
      name: "Ethan Parker",
      email: "ethan.parker@gmail.com",
      phone: "7305477760",
      role: "Livreur",
      location: "Rouen",
    },
    {
      name: "Sophia Carter",
      email: "sophia.carter@gmail.com",
      phone: "7305477760",
      role: "Gérant",
      location: "Rouen",
    },
    {
      name: "Liam Johnson",
      email: "liam.johnson@gmail.com",
      phone: "7305477760",
      role: "Gérant",
      location: "Toulouse",
    },
    {
      name: "Olivia Williams",
      email: "olivia.williams@gmail.com",
      phone: "7305477760",
      role: "Livreur",
      location: "Toulouse",
    },
  ];

  return (
    <Box py={5}>
      <Flex justify="space-between" align="center" mb={4} px={5}>
        <Text fontSize="xl" fontWeight="bold">
          Liste des employés
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
            <Th>Email</Th>
            <Th>Téléphone</Th>
            <Th>Fonction</Th>
            <Th>Établissement</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {employees.map((employee, index) => (
            <Tr key={index}>
              <Td>{employee.name}</Td>
              <Td>{employee.email}</Td>
              <Td>{employee.phone}</Td>
              <Td>{employee.role}</Td>
              <Td>{employee.location}</Td>
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

export default Employees;
