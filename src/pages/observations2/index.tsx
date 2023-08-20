import Counter from "@/components/Counter/Counter";
import { Box, Text, VStack } from "@chakra-ui/react";

const observations = [
  {
    title: "Number of Adults",
    type: "adults",
  },
  {
    title: "Number of Nestlings",
    type: "nestlings",
  },
  {
    title: "Number of Fledglings",
    type: "fledglings",
  },
];

const Observations2 = () => {
  return (
    <VStack>
      {observations.map((e, index) => {
        return (
          <Box key={index}>
            <Text as="b">{e.title}</Text>
            <Counter type={e.type} />
          </Box>
        );
      })}
    </VStack>
  );
};

export default Observations2;
