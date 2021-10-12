import { Container, Grid, Typography } from '@mui/material';
import './App.css';
import codashLogo from './assets/codashlogo.svg'
import codashLogoText from './assets/codashLogoText.svg'
import OptionList from './components/OptionList';

function App() {
  return (

    // <Container maxWidth='md'>
      <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          style={{backgroundColor: "#f5f5f5", height: "100vh"}}
        >
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            style={{ marginTop: "30px", marginBottom:"30px"}}
            >
              <Typography variant='h3'>codash</Typography>
              <img src={codashLogo} alt="logo" />
          </Grid>

          <OptionList />
          
        </Grid>
    // </Container>
        
  );
}

export default App;
