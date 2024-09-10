import React from "react";
import { Box, Flex, Button, Stack, Image, Heading } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";
import Cart from "./../Cart/Cart"; // Import Cart component

const NavBar = (props: any) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isCartOpen, setIsCartOpen] = React.useState(false); // New state for Cart

  const toggle = () => setIsOpen(!isOpen);
  const toggleCart = () => setIsCartOpen(!isCartOpen); // Toggle Cart visibility

  return (
    <>
      <NavBarContainer {...props}>
        <Flex alignItems="center" gap="0.868vw" flex="1 0 0" alignSelf="stretch">
          <Image src="src/assets/logo-gf.svg" alt="logo" width={50} height={50} />
          <Heading as="h1" size="lg">
            Good Food
          </Heading>
        </Flex>
        <MenuToggle toggle={toggle} isOpen={isOpen} />
        <MenuLinks isOpen={isOpen} onCartClick={toggleCart} />
      </NavBarContainer>
      {isCartOpen && <Cart onClose={toggleCart} />} {/* Render Cart if open */}
    </>
  );
};

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg width="24px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="white">
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const MenuToggle = ({ toggle, isOpen }: { toggle: any; isOpen: Boolean }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

const MenuItem = ({ children, to = "/", onClick }: { children: React.ReactNode; to?: string; onClick?: () => void }) => {
  return (
    <ChakraLink as={ReactRouterLink} to={to} onClick={onClick}>
      {children}
    </ChakraLink>
  );
};

const MenuLinks = ({ isOpen, onCartClick }: { isOpen: Boolean; onCartClick: () => void }) => {
  return (
    <Box display={{ base: isOpen ? "block" : "none", md: "block" }} flexBasis={{ base: "100%", md: "auto" }}>
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="/products">Les plats</MenuItem>
        <MenuItem to="/dashboard"> Tableau de bord </MenuItem>
        <MenuItem to="#" onClick={onCartClick}>
          Panier
        </MenuItem>{" "}
        {/* Updated MenuItem for Cart */}
        <MenuItem to="/login" isLast>
          <Button
            size="sm"
            rounded="md"
            color={"white.100"}
            bg={"green.100"}
            _hover={{
              bg: "green.light",
            }}
          >
            Connexion
          </Button>
        </MenuItem>
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      p={"1.832vw 8.391vw"}
      bg={"black.100"}
      color={["white", "white", "primary.700", "primary.700"]}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBar;
