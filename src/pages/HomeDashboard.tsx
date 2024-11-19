import { Box, SimpleGrid, Stat, StatLabel, StatNumber, useColorModeValue, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";

const HomeDashboard = () => {
  // Set background color for the cards
  const cardBgColor = useColorModeValue("green.200", "green.800");

  const [stats, setStats] = useState({
    establishments: 0,
    dishes: 0,
    employees: 258, // Par défaut, valeur statique
    users: 101, // Par défaut, valeur statique
  });
  const [loading, setLoading] = useState(true);

  // Fetch data for establishments and dishes
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [restaurantsResponse, menuResponse] = await Promise.all([
          axios.get("http://localhost:8080/api/restaurant"),
          axios.get("http://localhost:8080/api/menu"),
        ]);

        setStats((prevStats) => ({
          ...prevStats,
          establishments: restaurantsResponse.data.length,
          dishes: menuResponse.data.length,
        }));
      } catch (error) {
        console.error("Erreur lors de la récupération des statistiques :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Spinner size="xl" />
      </Box>
    );
  }

  return (
    <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10} p={5}>
      <StatCard label="Etablissements" value={stats.establishments} bgColor={cardBgColor} />
      <StatCard label="Plats" value={stats.dishes} bgColor={cardBgColor} />
      <StatCard label="Employés" value={stats.employees} bgColor={cardBgColor} />
      <StatCard label="Utilisateurs" value={stats.users} bgColor={cardBgColor} />
    </SimpleGrid>
  );
};

interface StatCardProps {
  label: string;
  value: number;
  bgColor: string;
}

const StatCard = ({ label, value, bgColor }: StatCardProps) => {
  return (
    <Box bg={bgColor} borderRadius="md" p={6} textAlign="center" shadow="md">
      <Stat>
        <StatLabel>{label}</StatLabel>
        <StatNumber>{value}</StatNumber>
      </Stat>
    </Box>
  );
};

export default HomeDashboard;
