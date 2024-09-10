import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header/Header.tsx";
import { ChakraProvider, extendTheme, Stack } from "@chakra-ui/react";
import Home from "./pages/Home.tsx"; // Import Home component
import Footer from "./components/Footer/Footer.tsx";
import Products from "./pages/Products.tsx"; // Import Products component
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom"; // Import Routes
import Login from "./pages/Login.tsx"; // Import Login component
import Dashboard from "./pages/Dashboard.tsx"; // Import Dashboard component

const colors = {
  white: {
    50: "#eeeeeed0",
    100: "#eeeeee",
  },
  black: {
    100: "#1c1c1c",
  },
  green: {
    100: "#68a159",
    light: "#76b565",
  },
  red: {
    100: "#b12f2f",
  },
  gray: {
    100: "#afafaf",
  },
};

const theme = extendTheme({ colors });

import { Box } from "@chakra-ui/react"; // Import Box from Chakra UI

// Component that checks the route and conditionally renders the Header and Footer
const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const hideHeaderAndFooter = ["/login", "/dashboard"].includes(location.pathname); // Hide Header and Footer on login and dashboard pages

  return (
    <Box width="100%">
      {!hideHeaderAndFooter && <Header />}
      {children}
      {!hideHeaderAndFooter && <Footer />}
    </Box>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            {/* Add other routes as needed */}
          </Routes>
        </Layout>
      </Router>
    </React.StrictMode>
  </ChakraProvider>
);
