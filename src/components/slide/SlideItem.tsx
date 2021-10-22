import { Text, Flex, Box, Image } from '@chakra-ui/react';
import Link from 'next/link';

interface SlideItemProps {
  id: number;
  name: string;
  description: string
  background: string;
}

export function SlideItem({ id, name, description, background }: SlideItemProps) {
  return (
    <Flex
      align="center"
      justify="center"
      position="relative"
    >
      <Image
        src={background}
        filter={"brightness(65%)"}
        h={["250px", "350px", "450px"]}
      />
      <Box position="absolute">
        <Link href={`/continent/${id}`} >
          <Flex as="a" direction="column" align="center" justify="center">
            <Text fontWeight="700" fontSize={["2xl", "5xl"]} lineHeight={["2.25rem", "4.5rem"]} color="gray.50" > {name} </Text>
            <Text fontWeight="700" fontSize={["sm", "2xl"]} lineHeight={["1.313rem", "2.25rem"]} color="gray.50" > {description} </Text>
          </Flex>
        </Link>
      </Box>
    </Flex>
  );
}
