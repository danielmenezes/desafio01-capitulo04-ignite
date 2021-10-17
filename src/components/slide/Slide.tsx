import { Pagination, Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Text, Box, Center, useBreakpointValue } from '@chakra-ui/react';

import { SlideItem } from './SlideItem';

import style from './styles.module.scss';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export function Slide() {
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
        <SwiperSlide>
          <SlideItem
            title='Europa'
            subtitle='O continente mais antigo.'
            img='/images/europa.png'
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideItem
            title='América do Sul'
            subtitle='O continente mais belo.'
            img='/images/america-do-sul.png'
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideItem
            title='América do Norte'
            subtitle='O segundo maior continente do mundo.'
            img='/images/america-do-norte.png'
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideItem
            title='Ásia'
            subtitle='O continente mais populoso.'
            img='/images/asia.png'
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideItem
            title='África'
            subtitle='O continente mais diverso.'
            img='/images/africa.png'
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideItem
            title='Oceania'
            subtitle='O continente composto por várias ilhas'
            img='/images/oceania.png'
          />
        </SwiperSlide>
      </Swiper>
    </Box >
  )
}