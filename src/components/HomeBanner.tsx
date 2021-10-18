import {
  Flex,
  Box,
  Text,
  Image,
  useBreakpointValue
} from "@chakra-ui/react";

export function HomeBanner() {
  const isWideVersion = useBreakpointValue({
    lg: false,
    xl: true,
  });

  return (
    <Box
      maxW="1440px"
      w="100%"
      h={["163px", "240px", "240px", "368.21px"]}
      mx="auto"
      position="relative"
    >
      <Flex
        h={["163px", "218px", "218px", "335px"]}
        align="center"
        bgImage="url('/images/background.svg')"
        bgSize="cover"
      >
        <Flex direction="column" ml={["4", "15", "15", "36"]}>
          <Text
            fontSize={["md", "lg", "4xl"]}
            lineHeight={["1.875rem", "2rem", "3.375rem"]}
            color="gray.50"
            fontWeight="500"
          >
            5 Continentes, <br />
            infinitas possibilidades.
          </Text>
          <Text
            fontSize={["sm", "md", "xl"]}
            lineHeight={["1.313rem", "1.438rem", "1.875rem"]}
            color="gray.50"
          >
            Chegou a hora de tirar do papel a viagem que você <br />
            sempre sonhou.
          </Text>
        </Flex>

        {isWideVersion && (
          <Box
            pos="absolute"
            right={["15", "36"]}
            bottom="0"
          >
            <Image src="/images/airplane.svg" alt="airplane" />
          </Box>)}

      </Flex>

    </Box>
  );
}