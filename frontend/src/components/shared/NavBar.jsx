import { Button, Container, HStack, Flex, Heading } from "@chakra-ui/react"; // Import Heading from Chakra UI
import React from "react";
import { Link } from "react-router-dom";
import { CiSquarePlus } from "react-icons/ci";
import { useColorMode } from "../ui/color-mode";

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{ base: "column", sm: "row" }}
      >
        {/* Gradient Text for Title */}
        <Heading
          as="h1" // Using Chakra's Heading component for the title
          fontSize={{ base: "22", sm: "28" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          color="blue.500"
        >
          <Link to={"/"}>Product Store 🛒</Link>
        </Heading>

        <HStack spacing={3} alignItems={"center"}>
          <Link to={"/create"}>
            <Button aria-label="Create new product">
              <CiSquarePlus fontSize={20} />
            </Button>
          </Link>

          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? "🌙" : "☀️"}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default NavBar;
