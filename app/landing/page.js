import Inventory from "../_sections/Inventory";
import SearchField from "../_components/SearchField";
import Body from "../_sections/Body";
import { Box, Container, Divider, Typography } from "@mui/material";
import Header from "../_sections/Header";


const StyledBody = {
    bgcolor: 'white',
    height: '10vh',
    mt: 3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
  }

export default function page() {
  return (
    <>
      <Container>
        <Box sx={StyledBody}>
          <SearchField/>
        </Box>
    </Container>
    <Inventory/>
    </>
  )
}
