// External Import
import { Box, Stack } from '@mui/system'

// Local Import
import './Page.css'
import Button from 'components/Button'
import Header from 'components/Header'
import Input from 'components/Input'
import { H1, H6, Para, Text } from 'components/Typography'
// Image import
import { aboutUs_Content1, aboutUs_Info } from 'utils/Seeder'

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
      <Stack direction="row" className="aboutUs1_Left">
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
    </>
  )
}

export default LandingPage
