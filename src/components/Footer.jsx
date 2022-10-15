import { Stack } from '@mui/system'
import { H6, Text, Text1 } from './Typography'
import { AiFillTwitterCircle, AiFillGoogleCircle } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'
const Footer = () => {
  return (
    <Stack direction='row' spacing={10} className='footer_Container'>
      <Stack spacing={2}>
        <H6>Omega</H6>
        <Text className='footerText'>
          With lots of unique blocks, you can easily build a page without
          coding.
        </Text>
        <Stack direction='row' spacing={1} style={{ alignItems: 'center' }}>
          <AiFillTwitterCircle size={25} />
          <FaFacebook size={23} />
          <AiFillGoogleCircle size={25} />
        </Stack>
      </Stack>
      <Stack spacing={2} className='fontColor'>
        <Text1>About</Text1>
        <Text>Our mission</Text>
        <Text>Our story</Text>
        <Text>Team members</Text>
      </Stack>
      <Stack spacing={2}>
        <Text1>Learn</Text1>
        <Text>Tutorials</Text>
        <Text>How it works</Text>
        <Text>F.A.Q</Text>
      </Stack>
      <Stack spacing={2}>
        <Text1>Stories</Text1>
        <Text>Blog</Text>
        <Text>Tech stories</Text>
      </Stack>
      <Stack spacing={2}>
        <Text1>Contact us</Text1>
        <a href='http://www.google.com'>support@omega.net</a>
        <a href='http://www.google.com'>+133-394-3439-1435</a>
      </Stack>
    </Stack>
  )
}

export default Footer
