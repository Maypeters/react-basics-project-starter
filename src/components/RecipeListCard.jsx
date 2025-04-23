import {
  Card,
  Image,
  CardBody,
  Stack,
  Heading,
  Text,
  Flex,
  Tag,
} from "@chakra-ui/react";

export const RecipeListCard = ({ item, clickFn }) => {
  const healthTags = ["Vegan", "Vegetarian"];
  const shownHealthLabels = item.healthLabels?.filter((label) =>
    healthTags.includes(label)
  );

  return (
    <Card
      borderRadius="xl"
      w="sm"
      h="30rem"
      onClick={() => clickFn(item)}
      cursor="pointer"
      _hover={{ transform: "scale(1.01)" }}
      transition="transform 0.2s ease"
      overflow="hidden"
      display="flex"
      flexDirection="column"
      textAlign="center"
    >
      {/* Afbeelding bovenaan, buiten CardBody, strak tegen de randen */}
      <Image src={item.image} objectFit="cover" w="100%" h="200px" />

      <CardBody display="flex" flexDirection="column" alignItems="center">
        <Stack mt="4" spacing="3" align="center">
          {item.mealType?.length > 0 && (
            <Text color="gray.600" fontSize="sm" textTransform="uppercase">
              {item.mealType.join(", ")}
            </Text>
          )}

          <Heading size="md">{item.label}</Heading>

          {/* Diet Labels */}
          <Flex gap={2} wrap="wrap" justify="center">
            {item.dietLabels?.map((label, index) => (
              <Tag key={index} colorScheme="green" textTransform="uppercase">
                {label}
              </Tag>
            ))}
          </Flex>

          <Flex gap={2} wrap="wrap" justify="center">
            {shownHealthLabels.map((label, index) => (
              <Tag key={index} colorScheme="blue" textTransform="uppercase">
                {label}
              </Tag>
            ))}
          </Flex>

          {item.dishType?.length > 0 && (
            <Text fontSize="sm">Dish: {item.dishType.join(", ")}</Text>
          )}

          {item.cautions?.length > 0 && (
            <Text fontSize="sm" textTransform="uppercase" fontWeight="bold">
              Cautions:
              <Flex gap={2} wrap="wrap" justify="center">
                {item.cautions.map((caution, index) => (
                  <Tag key={index} colorScheme="red" textTransform="uppercase">
                    {caution}
                  </Tag>
                ))}
              </Flex>
            </Text>
          )}
        </Stack>
      </CardBody>
    </Card>
  );
};
