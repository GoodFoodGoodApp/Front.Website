import React from "react";
import { Box, Button, Flex, FormControl, FormLabel, Input, Heading, Text, Stack } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";

const Login = () => {
  return (
    <Flex height="100vh" width={"100vw"} alignItems="center" justifyContent="center" backgroundColor={"#1c1c1c"}>
      <Box bg="white" p={6} rounded="md" boxShadow="lg" maxW="md" width="100%">
        <Heading as="h2" size="lg" textAlign="center" mb={6}>
          GOOD FOOD
        </Heading>
        <Text textAlign="center" mb={6}>
          Entrez vos identifiants pour vous connecter
        </Text>
        <Stack spacing={4}>
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Entrez votre email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Mot de passe</FormLabel>
            <Input type="password" placeholder="Entrez votre mot de passe" />
          </FormControl>
          <ChakraLink as={ReactRouterLink} to={"/"} colorScheme="blackAlpha" bg="#1c1c1c" color="white" size="lg" mt={4} p={2} textAlign={"center"}>
            SE CONNECTER
          </ChakraLink>
        </Stack>
      </Box>
    </Flex>
  );
};

export default Login;
