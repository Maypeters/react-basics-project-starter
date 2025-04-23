import { useState } from "react";
import { Center, Heading, Input, Flex, Box } from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipeListCard } from "../components/RecipeListCard";

// Component to display a searchable list of recipes
export const RecipeListPage = ({ onSelectRecipe }) => {
  // State to hold the current search input from the user
  const [searchTerm, setSearchTerm] = useState("");

  // Filter the recipes based on the user's search input (case-insensitive)
  const filteredRecipes = data.hits.filter((hit) =>
    hit.recipe.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box px={4} py={8}>
      <Center flexDir="column" mb={8}>
        <Heading mb={4}>Your Recipe App</Heading>
        <Input
          placeholder="Search for a recipe..."
          maxW="400px"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          bg="white"
        />
      </Center>

      <Flex wrap="wrap" justify="center" gap={6}>
        {filteredRecipes.map((item, index) => (
          <RecipeListCard
            key={index}
            item={item.recipe}
            clickFn={() => onSelectRecipe(item.recipe)}
          />
        ))}
      </Flex>
    </Box>
  );
};
