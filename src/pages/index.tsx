import { Flex, Divider } from '@chakra-ui/react'
import { GetStaticProps } from 'next';
import { Header } from '../components/Header'
import { HomeBanner } from '../components/HomeBanner'
import { TravelTypesMenu } from '../components/TravelTypesMenu';
import { Slide } from '../components/slide/Slide';
import { api } from '../services/api';

type Continent = {
  id: number;
  name: string;
  description: string;
  background: string;
}

interface HomeProps {
  continents: Continent[]
}

export default function Home({ continents }: HomeProps) {

  return (
    <Flex
      direction="column"
      w="100vw"
    >
      <Header />
      <HomeBanner />
      <TravelTypesMenu />

      <Divider
        mx="auto"
        w={["3.75rem", "5.625rem"]}
        border="2px"
        borderColor="gray.600"
      />

      <Slide continents={continents} />

    </Flex>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get("/continents");

  return {
    props: {
      continents: response.data,
    },
    revalidate: 60 * 30 // 30 minutes
  }
}