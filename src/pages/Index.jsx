import { Box, Button, Flex, Heading, Input, Stack, Text, Image, useColorModeValue } from "@chakra-ui/react";
import { FaSearch, FaShoppingCart, FaUpload } from "react-icons/fa";

const Index = () => {
  const bg = useColorModeValue("gray.50", "gray.800");
  const color = useColorModeValue("gray.800", "white");

  return (
    <Box bg={bg} color={color} minH="100vh" p={5}>
      <Flex justifyContent="space-between" alignItems="center" mb={10}>
        <Heading as="h1" size="xl">
          DocuMarket
        </Heading>
        <Button leftIcon={<FaShoppingCart />} colorScheme="teal" variant="solid">
          Cart
        </Button>
      </Flex>
      <Stack spacing={4} mb={10}>
        <Flex>
          <Input placeholder="Search documents..." />
          <Button leftIcon={<FaSearch />} colorScheme="blue" ml={2}>
            Search
          </Button>
        </Flex>
        <Button leftIcon={<FaUpload />} colorScheme="green">
          Upload Document
        </Button>
      </Stack>
      <Heading as="h2" size="lg" mb={5}>
        Featured Documents
      </Heading>
      <Flex wrap="wrap" justifyContent="space-between">
        {Array.from({ length: 4 }).map((_, index) => (
          <Box key={index} p={5} shadow="md" borderWidth="1px" flex="1 1 45%" mb={5}>
            <Heading size="md">Document Title {index + 1}</Heading>
            <Text mt={4}>This is a brief description of the document. It covers the main points and highlights.</Text>
            <Button mt={10} colorScheme="purple">
              Buy Now
            </Button>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Index;
