import {
  Flex,
  Text,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { CitieCard } from "./CitieCard";

export function Cities() {

  return (
    <Flex
      maxW={["343px", "343px", "600px", "900px", "1160px"]}
      w="100%"
      mx="auto"
      direction="column"
      mb={["16px", "35px"]}
    >
      <Text
        mb={["5", "10"]}
        fontSize={["2xl", "4xl"]}
        lineHeight={["2.25rem", "3.375rem"]}
        fontWeight="500"
      >
        Cidades +100
      </Text>
      <Grid
        align="center"
        gap={[4, 8, 12]}
        templateColumns="repeat(12, 1fr)"
      >
        <GridItem colSpan={[12, 6, 6, 4, 3]}>
          <CitieCard />
        </GridItem>
        <GridItem colSpan={[12, 6, 6, 4, 3]}>
          <CitieCard />
        </GridItem>
        <GridItem colSpan={[12, 6, 6, 4, 3]}>
          <CitieCard />
        </GridItem>
        <GridItem colSpan={[12, 6, 6, 4, 3]}>
          <CitieCard />
        </GridItem>
        <GridItem colSpan={[12, 6, 6, 4, 3]}>
          <CitieCard />
        </GridItem>



      </Grid>
    </Flex>
  );

}