// Dashboard.tsx
import { Box, VStack, Text, IconButton, Button, Flex, Spacer } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";
import { FaHome, FaSchool, FaUtensils, FaUsers, FaChartBar, FaCog, FaSignOutAlt } from "react-icons/fa";
import { useState } from "react";
import EmployeesList from "./EmployeesList";
import ProductsList from "./ProductsList";
import SitesList from "./SitesList";
import HomeDashboard from "./HomeDashboard";

const Dashboard = () => {
  const [itemActive, setItemActive] = useState("home"); // Initialiser l'état
  return (
    <Flex h="100vh">
      {/* Sidebar */}
      <Box w="250px" bg="gray.900" color="white" p={4}>
        <VStack spacing={6} align="stretch">
          <Box>
            <Text fontSize="lg" fontWeight="bold">
              BIENVENUE, THOMAS
            </Text>
          </Box>

          <VStack align="stretch" spacing={4}>
            <Button
              colorScheme={itemActive == "home" ? "green" : "white"}
              leftIcon={<FaHome />}
              justifyContent="start"
              onClick={() => {
                setItemActive("home");
              }}
            >
              Accueil
            </Button>
            <Button
              colorScheme={itemActive == "sites" ? "green" : "white"}
              leftIcon={<FaSchool />}
              justifyContent="start"
              onClick={() => {
                setItemActive("sites");
              }}
            >
              Etablissements
            </Button>
            <Button
              colorScheme={itemActive == "products" ? "green" : "white"}
              leftIcon={<FaUtensils />}
              justifyContent="start"
              onClick={() => {
                setItemActive("products");
              }}
            >
              Plats
            </Button>
            <Button
              colorScheme={itemActive == "employees" ? "green" : "white"}
              leftIcon={<FaUsers />}
              justifyContent="start"
              onClick={() => {
                setItemActive("employees");
              }}
            >
              Employés
            </Button>
            <Button
              colorScheme={itemActive == "stats" ? "green" : "white"}
              leftIcon={<FaChartBar />}
              justifyContent="start"
              onClick={() => {
                setItemActive("stats");
              }}
            >
              Statistiques
            </Button>
            <Button
              colorScheme={itemActive == "settings" ? "green" : "white"}
              leftIcon={<FaCog />}
              justifyContent="start"
              onClick={() => {
                setItemActive("settings");
              }}
            >
              Paramètres
            </Button>
          </VStack>

          <Spacer />

          <Button variant="ghost" leftIcon={<FaSignOutAlt />} justifyContent="start" colorScheme="red">
            <ChakraLink as={ReactRouterLink} to={"/"}>
              Déconnexion
            </ChakraLink>
          </Button>
        </VStack>
      </Box>

      {/* Main content */}
      <Box flex="1" bg="white">
        {
          {
            home: <HomeDashboard />,
            sites: <SitesList />,
            products: <ProductsList />,
            employees: <EmployeesList />,
            // stats: <Stats />,
            // settings: <Settings />,
          }[itemActive]
        }
      </Box>
    </Flex>
  );
};

export default Dashboard;
