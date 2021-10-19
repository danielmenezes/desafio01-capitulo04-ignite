import { Box, Flex } from '@chakra-ui/react';
import { Header } from '../../components/Header';
import { ContinentBanner } from '../../components/ContinentBanner';
import { ContinentBio } from '../../components/ContinentBio';
import { ContinentInfo } from '../../components/ContinentInfo';
import { Cities } from '../../components/Cities';

export default function ContinentPage() {
  return (
    <Flex
      direction="column"
      w="100vw"
    >
      <Header />
      <ContinentBanner />

      <Flex
        maxW="1160px"
        w="100%"
        mx="auto"
        mt={["6", "6", "8", "8", "5.813rem"]}
        mb={["8", "8", "10", "10", "5rem"]}
        align="center"
        justify="space-between"
        direction={["column", "column", "column", "column", "row"]}
      >
        <ContinentBio />
        <ContinentInfo />
      </Flex>


      <Cities />

    </Flex>
  );
}