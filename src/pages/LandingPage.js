// External Import
import { Box, Stack } from '@mui/system'

// Local Import
import './Page.css'
import Button from 'components/Button'
import Header from 'components/Header'
import Input from 'components/Input'
import { H1, H6, H7, Para, Text } from 'components/Typography'
// Seeder imports
import {
  aboutUs_Content1,
  aboutUs_Content2,
  aboutUs_Info,
  features_Info,
  services_Info1,
  services_Info2,
  services_Info3,
} from 'utils/Seeder'
// Image import
import { aboutus_Image, aboutus_oval, features_Image, features_Oval } from 'utils/ImagesPath'

const LandingPage = () => {
  return (
    <>
      <Header />

      {/* Hero section */}
      <Box className="heroBox">
        <Stack className="heroStack" spacing={4}>
          <H1>Bring more leads for your business fast.</H1>
          <Para>
            Create custom landing pages with Omega that convert more visitors than any website. With
            lots of unique blocks, you can easily build a page without coding.
          </Para>
          <Box className="heroInputBox">
            <Input />
            <Button className="heroButton">Get Started</Button>
          </Box>
        </Stack>
      </Box>

      {/* About us 1 */}
      <Stack direction="row" className="aboutUs1_Container">
        <Stack spacing={3} className="paperContainer">
          {aboutUs_Info.map((paper, index) => (
            <Box key={index} className="paper">
              <Stack direction="row" spacing={2}>
                <Box className={`${paper.class} light`}>
                  <img src={paper.img} alt="layout" />
                </Box>
                <Stack spacing={1}>
                  <H6>{paper.title}</H6>
                  <Text>{paper.description}</Text>
                </Stack>
              </Stack>
            </Box>
          ))}
        </Stack>
        <Stack className="aboutUs1_Right" spacing={3.5}>
          {aboutUs_Content1.map(item => (
            <>
              <H1 className="textPrimary">{item.title}</H1>
              <Para className="textSecondary">{item.para}</Para>
              <Button>{item.text}</Button>
            </>
          ))}
        </Stack>
      </Stack>

      {/* About us 2 */}
      <Stack className="aboutUs2_Container" direction="row">
        <Stack className="aboutUs2_Left" spacing={3.5}>
          {aboutUs_Content2.map(item => (
            <>
              <H1>{item.title}</H1>
              <Para>{item.para}</Para>
              <Button>{item.text}</Button>
            </>
          ))}
        </Stack>
        <Box className="aboutus2_Box">
          <img src={aboutus_Image} alt="about company" className="aboutus2_Image" />
          <img src={aboutus_oval} alt="oval-img" className="aboutus_Oval"></img>
        </Box>
      </Stack>

      {/* Services Section */}
      <Stack className="services" spacing={4}>
        <H1 className="services_Title">It’s everything you’ll ever need</H1>

        <Box className="flexContainer1">
          {services_Info1.map((paper, index) => (
            <Stack key={index} direction="row" spacing={2} className="services_Paper">
              <Box className={`${paper.class} lightParent`}>
                <img src={paper.img} alt="layout" />
              </Box>

              <H7>{paper.title}</H7>
            </Stack>
          ))}
        </Box>
        <Stack className="flexContainer2" direction="row" spacing={3}>
          {services_Info2.map((paper, index) => (
            <Stack
              key={index}
              direction="row"
              spacing={2}
              className={`services_Paper child${index}`}
            >
              <Box className={`${paper.class} lightParent`}>
                <img src={paper.img} alt="layout" />
              </Box>

              <H7>{paper.title}</H7>
            </Stack>
          ))}
        </Stack>
        <Box className="flexContainer1">
          {services_Info3.map((paper, index) => (
            <Stack key={index} direction="row" spacing={2} className="services_Paper">
              <Box className={`${paper.class} lightParent`}>
                <img src={paper.img} alt="layout" />
              </Box>

              <H7>{paper.title}</H7>
            </Stack>
          ))}
        </Box>
      </Stack>

      {/* features Section */}
      <Stack direction="row" className="features_Container">
        <Stack className="features_Stack" spacing={3.5}>
          {features_Info.map(item => (
            <>
              <H1>{item.title}</H1>
              <Para>{item.para}</Para>
              <Button>{item.text}</Button>
            </>
          ))}
        </Stack>
        <Box className="features_Box">
          <img src={features_Image} alt="features" className="features_Image" />
          <img src={features_Oval} alt="oval-img" className="features_Oval"></img>
        </Box>
      </Stack>
    </>
  )
}

export default LandingPage
