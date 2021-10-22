import { Flex } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { api } from '../../services/api';

import { Header } from '../../components/Header';
import { ContinentBanner } from '../../components/ContinentBanner';
import { ContinentBio } from '../../components/ContinentBio';
import { ContinentInfo } from '../../components/ContinentInfo';
import { Cities } from '../../components/Cities';

type Continent = {
  id: number;
  name: string;
  about: string;
  background: string;
  num_country: number;
  num_languages: number,
  most_visited_countries: number,
}

type Citie = {
  id: number;
  name: string;
  bg: string;
  country: {
    flag: string;
    name: string;
  };
}

interface ContinentPageProps {
  continent: Continent
  cities: Citie[]
}

export default function ContinentPage({ continent, cities }: ContinentPageProps) {

  return (
    <Flex
      direction="column"
    >
      <Header />
      <ContinentBanner
        background={continent?.background}
        title={continent?.name}
      />

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
        <ContinentBio about={continent.about} />
        <ContinentInfo
          num_country={continent.num_country}
          num_languages={continent.num_languages}
          most_visited_countries={continent.most_visited_countries}
        />
      </Flex>


      <Cities cities={cities} />

    </Flex>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params;
  const responseContinent = await api.get(`/continents/${id}`);
  const responseCities = await api.get(`/cities?continentId=${id}`);

  return {
    props: {
      continent: responseContinent.data,
      cities: responseCities.data,
    },
    revalidate: 1
  }
}