import { Box, Flex, Text, Image, Grid, Select, Spinner } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";

interface Restaurant {
  id: string;
  name: string;
  city: {
    name: string;
  };
}

interface Dish {
  id: string;
  name: string;
  description: string;
  price: number;
}

const ProductPage = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState<string>("");
  const [dishes, setDishes] = useState<Dish[]>([]);
  const [loadingRestaurants, setLoadingRestaurants] = useState(true);
  const [loadingDishes, setLoadingDishes] = useState(false);

  // Charger les restaurants depuis l'API
  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/restaurant");
        const restaurantData = response.data.map((item: Restaurant) => ({
          id: item.id,
          name: item.name,
          city: item.city,
        }));
        setRestaurants(restaurantData);
        setSelectedRestaurant(restaurantData[0]?.id || ""); // Par défaut, sélectionner le premier restaurant
      } catch (error) {
        console.error("Erreur lors de la récupération des restaurants :", error);
      } finally {
        setLoadingRestaurants(false);
      }
    };

    fetchRestaurants();
  }, []);

  // Charger les plats après la sélection d'un restaurant
  useEffect(() => {
    const fetchDishes = async () => {
      if (!selectedRestaurant) return;
      setLoadingDishes(true);
      try {
        const response = await axios.get(`http://localhost:8080/api/menu/${selectedRestaurant}`);
        setDishes(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des plats :", error);
      } finally {
        setLoadingDishes(false);
      }
    };

    fetchDishes();
  }, [selectedRestaurant]);

  return (
    <Box p={5}>
      {/* Votre Restaurant Section */}
      <Box mb={10}>
        <Text fontSize="3xl" fontWeight="bold" mb={4}>
          VOTRE RESTAURANT
        </Text>
        {loadingRestaurants ? (
          <Spinner size="lg" />
        ) : (
          <Flex alignItems="center">
            <Select
              placeholder="Sélectionnez un restaurant"
              width="300px"
              value={selectedRestaurant}
              onChange={(e) => setSelectedRestaurant(e.target.value)}
              mb={4}
            >
              {restaurants.map((restaurant: Restaurant) => (
                <option key={restaurant.id} value={restaurant.id}>
                  {restaurant.name} - {restaurant.city.name}
                </option>
              ))}
            </Select>
          </Flex>
        )}
        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
          {loadingRestaurants ? (
            <Spinner size="lg" />
          ) : (
            restaurants.map((restaurant) => <RestaurantCard key={restaurant.id} name={restaurant.name} city={restaurant.city.name} />)
          )}
        </Grid>
      </Box>

      {/* Plats Section */}
      <Box>
        <Text fontSize="3xl" fontWeight="bold" mb={4}>
          PLATS DISPONIBLES
        </Text>
        {loadingDishes ? (
          <Spinner size="lg" />
        ) : dishes.length > 0 ? (
          <Grid templateColumns="repeat(2, 1fr)" gap={4}>
            {dishes.map((dish) => (
              <DishCard key={dish.id} name={dish.name} description={dish.description} price={dish.price} />
            ))}
          </Grid>
        ) : (
          <Text>Aucun plat disponible pour ce restaurant.</Text>
        )}
      </Box>
    </Box>
  );
};

// Restaurant Card Component
const RestaurantCard = ({ name, city }: { name: string; city: string }) => (
  <Box borderRadius="md" overflow="hidden" boxShadow="lg" transition="transform 0.2s" _hover={{ transform: "scale(1.05)" }} p={4} bg="gray.100">
    <Text fontWeight="bold">{name}</Text>
    <Text fontSize="sm">{city}</Text>
  </Box>
);

// Dish Card Component
const DishCard = ({ name, description, price }: { name: string; description: string; price: number }) => (
  <Box borderRadius="md" overflow="hidden" boxShadow="lg" p={4}>
    <Text fontWeight="bold" mb={2}>
      {name}
    </Text>
    <Text fontSize="sm" mb={2}>
      {description}
    </Text>
    <Text fontWeight="bold">{price.toFixed(2)} €</Text>
  </Box>
);

export default ProductPage;
