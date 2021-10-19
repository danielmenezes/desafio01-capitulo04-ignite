import { Text, Box } from "@chakra-ui/react";

export function ContinentBio() {

  return (
    <Box
      maxW={["343px", "343px", "600px", "900px", "600px"]}
      maxH={["146px", "146px", "211px", "800px", "211px"]}
      mb={["4", "4", "6", "6", "0"]}

    >
      <Text
        textAlign="justify"
        fontWeight="400"
        fontSize={["sm", "sm", "lg", "2xl"]}
        lineHeight={["1.313rem", "1.313rem", "8", "9"]}
      >
        A Europa é, por convenção, um dos seis continentes do mundo.
        Compreendendo a península ocidental da Eurásia,
        a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais,
        o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.
      </Text>
    </Box>
  );
}