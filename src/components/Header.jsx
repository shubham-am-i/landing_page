import { Stack } from '@mui/material'
import { H6, Text } from './Typography'

const Header = () => {
  return (
    <Stack direction="row" spacing={4} className="header">
      <H6>Omega</H6>
      <Text>Demos</Text>
      <Text>Pages</Text>
      <Text>support</Text>
    </Stack>
  )
}

export default Header
