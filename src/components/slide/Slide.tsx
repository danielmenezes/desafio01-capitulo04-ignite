import { Pagination, Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Text, Box, Center, useBreakpointValue } from '@chakra-ui/react';

import { SlideItem } from './SlideItem';

import style from './styles.module.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

type continent = {
  id: number;
  name: string;
  description: string;
  background: string;
}

interface SlideProps {
  continents: continent[]
}

export function Slide({ continents }: SlideProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Box
      maxW="1240px"
      w="100%"
      mx="auto"
      mt={["6", "6", "14"]}
      mb={["6", "6", "10"]}
    >
      <Center mb={["5", "12"]}>
        <Text
          textAlign="center"
          fontSize={["xl", "4xl"]}
          lineHeight={["1.875rem", "3.375rem"]}
          fontWeight="500"
        >
          Vamos nessa? <br />
          Então escolha seu continente
        </Text>
      </Center>

      <Swiper
        className={isWideVersion
          ? style.sliderWrapperWideVersion
          : style.sliderWrapper
        }
        modules={[Pagination, Navigation, A11y]}
        spaceBetween={1}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {continents.map(continent => {
          return (
            <SwiperSlide key={continent.id}>
              <SlideItem
                id={continent.id}
                name={continent.name}
                description={continent.description}
                background={`/images/continents/${continent.background}`}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box >
  )
}