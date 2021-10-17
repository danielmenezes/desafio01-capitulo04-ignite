import { Text, Flex, Box, Center, Image } from '@chakra-ui/react';

interface SlideItemProps {
  title: string;
  subtitle: string;
  img: string;
}

export function SlideItem({ title, subtitle, img }: SlideItemProps) {
  return (
    <Box>
      <Image
        position="relative"
        src={img}
        filter={"brightness(65%)"}
        h={["250px", "350px", "450px"]}
      />
      <Center position="absolute" left="0" top="0" right="0" bottom="0">
        <Flex direction="column" align="center" justify="center">
          <Text fontWeight="700" fontSize={["2xl", "5xl"]} lineHeight={["2.25rem", "4.5rem"]} color="gray.50" > {title} </Text>
          <Text fontWeight="700" fontSize={["sm", "2xl"]} lineHeight={["1.313rem", "2.25rem"]} color="gray.50" > {subtitle} </Text>
        </Flex>
      </Center>
    </Box>
  );
}