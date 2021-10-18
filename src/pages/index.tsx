import { Flex, Text, Center, Divider, Box } from '@chakra-ui/react'
import Head from 'next/head'
import { Header } from '../components/Header'
import { HomeBanner } from '../components/HomeBanner'
import { TravelTypesMenu } from '../components/TravelTypesMenu';
import { Slide } from '../components/slide/Slide';

export default function Home() {
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

      <Slide />

    </Flex>
  )
}


