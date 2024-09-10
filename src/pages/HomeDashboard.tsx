import { Box, SimpleGrid, Stat, StatLabel, StatNumber, useColorModeValue } from "@chakra-ui/react";

const HomeDashboard = () => {
  // Set background color for the cards
  const cardBgColor = useColorModeValue("green.200", "green.800");

  return (
    <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10} p={5}>
      <StatCard label="Etablissements" value={22} bgColor={cardBgColor} />
      <StatCard label="Plats" value={200} bgColor={cardBgColor} />
      <StatCard label="Employés" value={258} bgColor={cardBgColor} />
      <StatCard label="Utilisateurs" value={101} bgColor={cardBgColor} />
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
