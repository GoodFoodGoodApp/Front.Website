import { Box, Flex, Text, Image, Button, Grid, Input, Select } from "@chakra-ui/react";

import leHavreImage from "./../assets/le-havre.png";
import bruxellesImage from "./../assets/bruxelles.png";
import luxembourgVilleImage from "./../assets/luxembourg-ville.png";
import toulouseImage from "./../assets/toulouse.png";
import seaProductsImage from "./../assets/sea-products.png";
import meatImage from "./../assets/meats.png";
import veganImage from "./../assets/vegan.png";
import vegetarianImage from "./../assets/vegetarian.png";
import plateExampleImage from "./../assets/plate-example.png";

const ProductPage = () => {
  return (
    <Box p={5}>
      {/* Your City (Votre Ville) Section */}
      <Box mb={10}>
        <Text fontSize="3xl" fontWeight="bold" mb={4}>
          VOTRE VILLE
        </Text>
        <Flex alignItems="center">
          <Select placeholder="Le Havre" width="300px" mb={4} />
        </Flex>
        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
          <CityCard name="Le Havre" imageUrl={leHavreImage} />
          <CityCard name="Bruxelles" imageUrl={bruxellesImage} />
          <CityCard name="Luxembourg-ville" imageUrl={luxembourgVilleImage} />
          <CityCard name="Toulouse" imageUrl={toulouseImage} />
        </Grid>
      </Box>

      {/* Categories Section */}
      <Box mb={10}>
        <Text fontSize="3xl" fontWeight="bold" mb={4}>
          CATÉGORIES
        </Text>
        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
          <CategoryCard name="Végétarien" count={44} imageUrl={vegetarianImage} />
          <CategoryCard name="Produits de la mer" count={56} imageUrl={seaProductsImage} />
          <CategoryCard name="Viandes" count={25} imageUrl={meatImage} />
          <CategoryCard name="Vegan" count={75} imageUrl={veganImage} />
        </Grid>
      </Box>

      {/* Plats Section */}
      <Box mb={10}>
        <Text fontSize="3xl" fontWeight="bold" mb={4}>
          PLATS
        </Text>
        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
          {Array(6)
            .fill("")
            .map((_, idx) => (
              <DishCard
                key={idx}
                name="Burger végétarien"
                description="Tomate, veggie, oignons rouges, salade, sauce picante, servi avec frites."
                calories={177}
                price={44.0}
                imageUrl="/burger.png"
              />
            ))}
        </Grid>
      </Box>
    </Box>
  );
};

// City Card Component
const CityCard = ({ name, imageUrl }: { name: string; imageUrl: string }) => (
  <Box borderRadius="md" overflow="hidden" boxShadow="lg" transition="transform 0.2s" _hover={{ transform: "scale(1.05)" }}>
    <Image src={imageUrl} alt={name} height="150px" width="100%" objectFit="cover" />
    <Box p={3}>
      <Text fontWeight="bold" textAlign="center">
        {name}
      </Text>
    </Box>
  </Box>
);

// Category Card Component
const CategoryCard = ({ name, count, imageUrl }: { name: string; count: number; imageUrl: string }) => (
  <Box borderRadius="md" overflow="hidden" boxShadow="lg" transition="transform 0.2s" _hover={{ transform: "scale(1.05)" }}>
    <Image src={imageUrl} alt={name} height="150px" width="100%" objectFit="cover" />
    <Box p={3}>
      <Flex justifyContent="space-between">
        <Text fontWeight="bold">{name}</Text>
        <Text>{count}</Text>
      </Flex>
    </Box>
  </Box>
);

// Dish Card Component
const DishCard = ({
  name,
  description,
  calories,
  price,
  imageUrl,
}: {
  name: string;
  description: string;
  calories: number;
  price: number;
  imageUrl: string;
}) => (
  <Box borderRadius="md" overflow="hidden" bg="gray.100" boxShadow="lg" p={4} transition="transform 0.2s" _hover={{ transform: "scale(1.05)" }}>
    <Flex>
      <Image src={plateExampleImage} alt={name} boxSize="100px" objectFit="cover" mr={4} />
      <Box>
        <Text fontWeight="bold" fontSize="lg">
          {name}
        </Text>
        <Text fontSize="sm" color="gray.600" mb={2}>
          {description}
        </Text>
        <Text fontSize="sm" color="gray.600">
          Calories: {calories}
        </Text>
      </Box>
    </Flex>
    <Flex justifyContent="space-between" mt={4}>
      <Text fontWeight="bold">{price.toFixed(2)} €</Text>
      <Button colorScheme="green" size="sm">
        Commander
      </Button>
    </Flex>
  </Box>
);

export default ProductPage;
