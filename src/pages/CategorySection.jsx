import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";

const CategorySection = ({ title, documentCount }) => {
  return (
    <Box>
      <Heading as="h3" size="lg" mb={5}>
        {title}
      </Heading>
      <Flex wrap="wrap" justifyContent="space-between">
        {Array.from({ length: documentCount }).map((_, index) => (
          <Box key={index} p={5} shadow="md" borderWidth="1px" flex="1 1 45%" mb={5} w="300px" h="350px">
            <Heading size="md">
              {title} Document {index + 1}
            </Heading>
            <Text mt={4}>This is a brief description of the document in the {title} category.</Text>
            <Button mt={10} colorScheme="purple">
              Buy Now
            </Button>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default CategorySection;
