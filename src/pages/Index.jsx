import { Box, Button, Flex, Heading, Input, Stack, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { FaSearch, FaShoppingCart, FaUpload } from "react-icons/fa";
import CategorySection from "./CategorySection";

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
      <VStack spacing={8}>
        <CategorySection title="Business" documentCount={4} />
        <CategorySection title="Education" documentCount={3} />
        <CategorySection title="Technology" documentCount={2} />
        <CategorySection title="Health" documentCount={3} />
      </VStack>
    </Box>
  );
};

export default Index;
