import {
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";

type Citie = {
  id: number;
  name: string;
  bg: string;
  country: {
    flag: string;
    name: string;
  };
}

interface CitieCardProps {
  citie: Citie;
}

export function CitieCard({ citie }: CitieCardProps) {

  return (
    <Flex
      maxW="256px"
      maxH="279px"
      direction="column"
      border="1px solid rgba(255, 186, 8, 0.5)"
    >
      <Image
        src={`/images/cities/${citie.bg}`}
        w="256px"
        h="173px"
        mb="18px"
      />
      <Flex align="center" justify="space-between" mx="24px">
        <Flex direction="column" align="flex-start">
          <Text
            fontFamily="Barlow"
            fontSize="xl"
            lineHeight="1.56rem"
            fontWeight="600"
            mb="12px"
          >
            {citie.name}
          </Text>
          <Text fontFamily="Barlow" color="gray.300" mb="25px">
            {citie.country.name}
          </Text>
        </Flex>
        <Image
          w="30px"
          h="30px"
          borderRadius="50%"
          src={`/images/countries/${citie.country.flag}`}
          mb="25px"
        />
      </Flex>
    </Flex>
  );

}