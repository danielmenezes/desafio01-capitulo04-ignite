import { Flex, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      justify="center"
      align="center"
      maxW="1440px"
      w="100%"
      h={["50px", "75px", "75px", "100px"]}
      mx="auto"
    >
      <Image
        src="/images/logo.svg"
        alt="logo"
        w={["81px", "104px", "120px", "184px"]}
        h={["20px", "26px", "30px", "46px"]}
      />
    </Flex>
  );
}