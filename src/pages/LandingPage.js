// External Import
import { Container, Box, Stack } from '@mui/system'

// Local Import
import './Page.css'
import Button from 'components/Button'
import Header from 'components/Header'
import Input from 'components/Input'
import { H1, H6, Para, Text } from 'components/Typography'
// Image import
import {} from 'utils/ImagesPath'

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
    </>
  )
}

export default LandingPage
