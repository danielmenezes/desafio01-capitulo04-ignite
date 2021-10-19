import {
  Flex,
  Text,
  useBreakpointValue
} from "@chakra-ui/react";

export function ContinentBanner() {
  const isWideVersion = useBreakpointValue({
    sm: false,
    md: true,
  });

  return (

    <Flex
      maxW="1440px"
      w="100%"
      mx="auto"
      h={["150px", "350px", "350px", "350px", "500px"]}
      align={["center", "center", "flex-end"]}
      justify={["center", "center", "flex-start"]}
      bgImage="url('/images/bannereuropa.png')"
      bgSize="cover"
    >
      {isWideVersion
        ? <Text
          fontWeight="600"
          fontSize="5xl"
          lineHeight="4.5rem"
          color="gray.50"
          ml="36"
          mb="16"
        >
          Europa
        </Text>
        : <Text
          fontWeight="600"
          fontSize="1.75rem"
          lineHeight="2.625rem"
          color="gray.50">
          Europa
        </Text>
      }
    </Flex>

  );
}