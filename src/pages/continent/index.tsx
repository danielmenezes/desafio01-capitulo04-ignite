import { Flex } from '@chakra-ui/react';
import { Header } from '../../components/Header';
import { ContinentBanner } from '../../components/ContinentBanner';

export default function ContinentPage() {
  return (
    <Flex
      direction="column"
      w="100vw"
    >
      <Header />

      <ContinentBanner />
    </Flex>
  );
}