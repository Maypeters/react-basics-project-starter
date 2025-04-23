import { Box, Heading, Text, Image, Flex, Tag, Button } from "@chakra-ui/react";

// Component to display detailed information about a selected recipe
export const RecipePage = ({ recipe, onBack }) => {
  return (
    <Box bg="blue.50" minH="100vh" py={10} px={4}>
      <Flex justify="center" align="center">
        <Box
          bg="white"
          w={["100%", "90%", "80%"]}
          borderRadius="lg"
          p={8}
          boxShadow="xl"
          maxW="900px"
        >
          {/* Back Button */}
          <Button
            onClick={onBack}
            variant="link"
            colorScheme="blue"
            mb={6}
            display="block"
            fontSize="lg"
          >
            Back
          </Button>

          {/* Recipe Title and Image */}
          <Heading as="h1" size="2xl" mb={4} textAlign="center">
            {recipe.label}
          </Heading>
          <Image
            src={recipe.image}
            alt={recipe.label}
            borderRadius="lg"
            mb={8}
            w="100%"
            maxH="400px"
            objectFit="cover"
          />

          {/* Recipe Information */}
          <Flex direction="column" gap={6}>
            {/* Meal and Dish Types */}
            <Flex justify="space-between" wrap="wrap">
              <Box flex="1">
                <Text fontWeight="bold">Meal Type:</Text>
                <Text>{recipe.mealType?.join(", ") || "N/A"}</Text>
              </Box>
              <Box flex="1">
                <Text fontWeight="bold">Dish Type:</Text>
                <Text>{recipe.dishType?.join(", ") || "N/A"}</Text>
              </Box>
            </Flex>

            {/* Total Cooking Time */}
            <Box>
              <Text fontWeight="bold">Cooking Time:</Text>
              <Text>{recipe.totalTime} minutes</Text>
            </Box>

            {/* Diet Labels as Tags */}
            <Box>
              <Text fontWeight="bold" textTransform="uppercase" mb={2}>
                Diet Labels:
              </Text>
              <Flex gap={2} wrap="wrap" mb={4}>
                {recipe.dietLabels?.map((label, index) => (
                  <Tag
                    key={index}
                    colorScheme="green"
                    textTransform="uppercase"
                  >
                    {label}
                  </Tag>
                ))}
              </Flex>
            </Box>

            {/* Health Labels */}
            <Box>
              <Text fontWeight="bold">Health Labels:</Text>
              <Flex gap={2} wrap="wrap" mb={4}>
                {recipe.healthLabels?.map((label, index) => (
                  <Tag key={index} colorScheme="blue" textTransform="uppercase">
                    {label}
                  </Tag>
                ))}
              </Flex>
            </Box>

            {/* Cautions */}
            <Box>
              <Text fontWeight="bold">Cautions:</Text>
              <Flex gap={2} wrap="wrap" mb={4}>
                {recipe.cautions?.map((caution, index) => (
                  <Tag key={index} colorScheme="red" textTransform="uppercase">
                    {caution}
                  </Tag>
                ))}
              </Flex>
            </Box>

            {/* Ingredients */}
            <Box>
              <Text fontWeight="bold">Ingredients:</Text>
              <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
                {recipe.ingredientLines?.map((ing, index) => (
                  <li
                    key={index}
                    style={{ marginBottom: "8px", fontSize: "16px" }}
                  >
                    {ing}
                  </li>
                ))}
              </ul>
            </Box>

            {/* Servings */}
            <Box>
              <Text fontWeight="bold">Servings:</Text>
              <Text>{recipe.yield || "N/A"}</Text>
            </Box>

            {/* Nutritional Information */}
            <Box>
              <Text fontWeight="bold">Total Nutrients:</Text>
              <Text>
                <strong>Energy:</strong>{" "}
                {Math.round(recipe.totalNutrients?.ENERC_KCAL?.quantity)} kcal{" "}
                <br />
                <strong>Protein:</strong>{" "}
                {Math.round(recipe.totalNutrients?.PROCNT?.quantity)} g <br />
                <strong>Fat:</strong>{" "}
                {Math.round(recipe.totalNutrients?.FAT?.quantity)} g <br />
                <strong>Carbs:</strong>{" "}
                {Math.round(recipe.totalNutrients?.CHOCDF?.quantity)} g <br />
                <strong>Cholesterol:</strong>{" "}
                {Math.round(recipe.totalNutrients?.CHOLE?.quantity)} mg <br />
                <strong>Sodium:</strong>{" "}
                {Math.round(recipe.totalNutrients?.NA?.quantity)} mg
              </Text>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
