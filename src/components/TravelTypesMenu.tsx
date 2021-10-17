import { Flex, Link, Image, Text, Grid, GridItem, useBreakpointValue } from '@chakra-ui/react';

export function TravelTypesMenu() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Grid
      templateRows={["repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)", "1fr"]}
      templateColumns={["repeat(4, 1fr)", "repeat(4, 1fr)", "repeat(4, 1fr)", "repeat(5, 1fr)"]}
      gap={["6", "6", "9", "9", "24", "28"]}
      mx={["10", "10", "auto"]}
      my={["10", "10", "20"]}
    >
      <GridItem colSpan={[2, 2, 2, 1]} >
        <Link>
          <Flex direction={["row", "row", "row", "column"]} align="center" justify={["flex-start", "flex-start", "flex-start", "center"]}>
            {isWideVersion
              ? <Image src="/images/cocktail.svg" alt="cocltail" mb="6" />
              : <Image src="/images/ellipse.svg" alt="cocltail" mr="8px" />
            }
            <Text fontWeight="600" fontSize={["lg", "2xl"]} lineHeight={["1.69rem", "9"]} >vida noturna</Text>
          </Flex>
        </Link>
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <Link>
          <Flex direction={["row", "row", "row", "column"]} align="center" justify={["flex-end", "flex-end", "flex-end", "center"]}>
            {isWideVersion
              ? <Image src="/images/surf.svg" alt="surf" mb="6" />
              : <Image src="/images/ellipse.svg" alt="surf" mr="8px" />
            }
            <Text fontWeight="600" fontSize={["lg", "2xl"]} lineHeight={["1.69rem", "9"]} >praia</Text>
          </Flex>
        </Link>
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <Link>
          <Flex direction={["row", "row", "row", "column"]} align="center" justify={["flex-start", "flex-start", "flex-start", "center"]}>
            {isWideVersion
              ? <Image src="/images/building.svg" alt="building" mb="6" />
              : <Image src="/images/ellipse.svg" alt="building" mr="8px" />
            }
            <Text fontWeight="600" fontSize={["lg", "2xl"]} lineHeight={["1.69rem", "9"]}>moderno</Text>
          </Flex>
        </Link>
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <Link>
          <Flex direction={["row", "row", "row", "column"]} align="center" justify={["flex-end", "flex-end", "flex-end", "center"]}>
            {isWideVersion
              ? <Image src="/images/museum.svg" alt="museum" mb="6" />
              : <Image src="/images/ellipse.svg" alt="museum" mr="8px" />
            }
            <Text fontWeight="600" fontSize={["lg", "2xl"]} lineHeight={["1.69rem", "9"]} >clássico</Text>
          </Flex>
        </Link>
      </GridItem>
      <GridItem colSpan={[4, 4, 4, 1]}>
        <Link>
          <Flex direction={["row", "row", "row", "column"]} align="center" justify="center">
            {isWideVersion
              ? <Image src="/images/earth.svg" alt="earth" mb="6" />
              : <Image src="/images/ellipse.svg" alt="earth" mr="8px" />
            }
            <Text fontWeight="600" fontSize={["lg", "2xl"]} lineHeight={["1.69rem", "9"]} >e mais...</Text>
          </Flex>
        </Link>
      </GridItem>

    </Grid>
  );

}






