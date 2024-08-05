import { Box, Container, Divider, Typography } from "@mui/material";
import Header from "./_sections/Header";
import SearchField from "./_components/SearchField";
import Body from "./_sections/Body";
import Footer from "./_sections/Footer";
import Inventory from "./_sections/Inventory";

const StyledBody = {
  bgcolor: 'white',
  height: '40vh',
  mt: 3,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  textAlign: 'center',
}

export default function Home() {
  return (
    <>
    <Header/>
    <Container>
        <Box sx={StyledBody}>
          <Body/>
          <SearchField/>
        </Box>
    </Container>
    <Inventory/>
    <Divider sx={{my: '10px'}}/>
    <Footer/>
    </>
  );
}
