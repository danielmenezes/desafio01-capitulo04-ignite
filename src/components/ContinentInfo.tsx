import { Text, Flex, Tooltip } from "@chakra-ui/react";
import { InfoOutlineIcon } from '@chakra-ui/icons';

interface ContinentInfoProps {
  num_country: number;
  num_languages: number,
  most_visited_countries: number,
}

export function ContinentInfo({ num_country, num_languages, most_visited_countries }: ContinentInfoProps) {

  return (
    <Flex
      maxW={["343px", "490px"]}
      w="100%"
      maxH={["59px", "99px"]}
      align="center"
      justify="space-between"
    >
      <Flex direction="column" align="center">
        <Text fontWeight="600" color="orange.600" fontSize={["2xl", "5xl"]} lineHeight={["9", "4.5rem"]}>
          {num_country}
        </Text>
        <Text fontWeight="600" fontSize={["lg", "2xl"]} lineHeight={["1.688rem", "9"]}>
          países
        </Text>
      </Flex>
      <Flex direction="column" align="center">
        <Text fontWeight="600" color="orange.600" fontSize={["2xl", "5xl"]} lineHeight={["9", "4.5rem"]}>
          {num_languages}
        </Text>
        <Text fontWeight="600" fontSize={["lg", "2xl"]} lineHeight={["1.688rem", "9"]}>
          línguas
        </Text>
      </Flex>
      <Flex direction="column" align="center">
        <Text fontWeight="600" color="orange.600" fontSize={["2xl", "5xl"]} lineHeight={["9", "4.5rem"]}>
          {most_visited_countries}
        </Text>
        <Flex align="center">
          <Text fontWeight="600" mr="5px" fontSize={["lg", "2xl"]} lineHeight={["1.688rem", "9"]}>
            cidades +100
          </Text>
          <Tooltip color="gray.300" bg="transparent" label="Cidades mais visitadas">
            <InfoOutlineIcon color="gray.300" />
          </Tooltip>
        </Flex>
      </Flex>
    </Flex>
  );
}