import { Flex, Image, ListItem, List, Heading, chakra } from "@chakra-ui/react";

export default function Footer() {
  return (
    <footer>
      <Flex width="100vw" p="8.391vw" justify="space-between" align="flex-start" bgColor="black.100" color="white.100">
        <Flex alignItems="center" gap="0.868vw" flex="1 0 0" alignSelf="stretch">
          <Image src="src/assets/logo-gf.svg" alt="logo" width={110} height={110} />
          <Heading as="h3" size="lg">
            Good <chakra.span color="green.100">Food</chakra.span>
            <br></br> is a<br></br> good <chakra.span color="green.100">mood</chakra.span>
          </Heading>
        </Flex>
        <Flex justify="flex-end" align="flex-start" gap="6vw">
          <nav>
            <List display="flex" flexDirection="column" justifyContent="space-between" alignItems="flex-start" gap={3}>
              <ListItem>Les plats</ListItem>
              <ListItem>Back Office</ListItem>
              <ListItem>Panier</ListItem>
              <ListItem>Connexion</ListItem>
            </List>
          </nav>
          <nav>
            <List display="flex" flexDirection="column" justifyContent="space-between" alignItems="flex-start" gap={3}>
              <ListItem>Les plats</ListItem>
              <ListItem>Back Office</ListItem>
              <ListItem>Panier</ListItem>
              <ListItem>Connexion</ListItem>
            </List>
          </nav>
        </Flex>
      </Flex>
    </footer>
  );
}
