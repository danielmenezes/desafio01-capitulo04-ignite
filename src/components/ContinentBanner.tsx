import {
  Box,
  Flex,
  Text,
  useBreakpointValue
} from "@chakra-ui/react";

interface ContinentBannerProps {
  background: string;
  title: string;
}

export function ContinentBanner({ background, title }: ContinentBannerProps) {
  const isWideVersion = useBreakpointValue({
    sm: false,
    md: true,
  });

  return (
    <Flex
      maxW="1440px"
      w="100%"
      mx="auto"
      align={["center", "center", "flex-end"]}
      justify={["center", "center", "flex-start"]}
      position="relative"
    >
      <Box
        w="100%"
        h={["150px", "350px", "350px", "350px", "500px"]}
        bgImage={`url(/images/continents/${background})`}
        bgSize="cover"
        filter={"brightness(65%)"}
      />
      {isWideVersion
        ? <Text
          position="absolute"
          fontWeight="600"
          fontSize="5xl"
          lineHeight="4.5rem"
          color="gray.50"
          ml="15%"
          mb="6%"
        >
          {title}
        </Text>
        : <Text
          position="absolute"
          fontWeight="600"
          fontSize="1.75rem"
          lineHeight="2.625rem"
          color="gray.50"
        >
          {title}
        </Text>
      }
    </Flex>

  );
}