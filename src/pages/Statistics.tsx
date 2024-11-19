import React, { useEffect, useState } from "react";
import { Box, Text, Flex, Spinner, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import axios from "axios";

interface Restaurant {
  id: string;
  name: string;
  city: { name: string };
}

interface Dish {
  price: number;
}

const Statistics = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [dishesByRestaurant, setDishesByRestaurant] = useState<{ name: string; count: number; avgPrice: number }[]>([]);
  const [restaurantsByCity, setRestaurantsByCity] = useState<{ city: string; count: number }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        // Fetch restaurants
        const restaurantResponse = await axios.get("http://localhost:8080/api/restaurant");
        const fetchedRestaurants = restaurantResponse.data;
        setRestaurants(fetchedRestaurants);

        // Fetch dishes count and average price for each restaurant
        const dishesData = await Promise.all(
          fetchedRestaurants.map(async (restaurant: Restaurant) => {
            const menuResponse = await axios.get(`http://localhost:8080/api/menu/${restaurant.id}`);
            const dishes: Dish[] = menuResponse.data;
            const totalPrice = dishes.reduce((sum, dish) => sum + dish.price, 0);
            const avgPrice = dishes.length > 0 ? totalPrice / dishes.length : 0;

            return {
              name: restaurant.name,
              count: dishes.length,
              avgPrice: avgPrice,
            };
          })
        );
        setDishesByRestaurant(dishesData);

        // Calculate the number of restaurants per city
        const cityCount = fetchedRestaurants.reduce((acc: Record<string, number>, restaurant) => {
          const cityName = restaurant.city.name;
          acc[cityName] = (acc[cityName] || 0) + 1;
          return acc;
        }, {});
        const sortedCities = Object.entries(cityCount)
          .map(([city, count]) => ({ city, count }))
          .sort((a, b) => b.count - a.count);
        setRestaurantsByCity(sortedCities);
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  if (loading) {
    return (
      <Flex justify="center" align="center" height="200px">
        <Spinner size="lg" />
      </Flex>
    );
  }

  return (
    <Box p={5}>
      {/* Graphique des plats par restaurant */}
      <Box mb={10}>
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          Nombre de plats par restaurant (et prix moyen)
        </Text>
        <Box border="1px solid #ccc" p={4} borderRadius="md">
          {dishesByRestaurant.map((data) => (
            <Flex key={data.name} mb={2} align="center">
              <Text width="150px">{data.name}</Text>
              <Box height="20px" width={`${data.count * 10}px`} bg="teal" borderRadius="md" transition="width 0.3s"></Box>
              <Text ml={2}>{data.count} plats</Text>
              <Text ml={4} color="gray.600">
                Prix moyen : {data.avgPrice.toFixed(2)} €
              </Text>
            </Flex>
          ))}
        </Box>
      </Box>

      {/* Liste des villes triées par nombre de restaurants */}
      <Box>
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          Villes triées par nombre de restaurants
        </Text>
        <Table variant="simple" bg="white" rounded="md" shadow="sm">
          <Thead>
            <Tr>
              <Th>Ville</Th>
              <Th>Nombre de restaurants</Th>
            </Tr>
          </Thead>
          <Tbody>
            {restaurantsByCity.map((cityData) => (
              <Tr key={cityData.city}>
                <Td>{cityData.city}</Td>
                <Td>{cityData.count}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default Statistics;
