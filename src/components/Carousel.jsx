// external import
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// MUI import
import { Stack } from '@mui/system'
import { slider_Info } from 'utils/Seeder'
import { H7, Para, Text } from './Typography'
import { Box } from '@mui/material'

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <Box>
      <Slider {...settings}>
        {slider_Info.map((slide, index) => (
          <Stack className='slider' spacing={3}>
            <Para>{slide.para}</Para>
            <Stack direction='row' spacing={2}>
              <img src={slide.img} alt='slide-img' className='slider_Image' />
              <Box>
                <H7>{slide.name}</H7>
                <Text>{slide.designation}</Text>
              </Box>
            </Stack>
          </Stack>
        ))}
      </Slider>
    </Box>
  )
}

export default Carousel
