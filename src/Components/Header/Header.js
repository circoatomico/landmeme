import React, {Component} from 'react'; 
 

import {
  AppBar, 
  Container,
  Box,
  Button,
  Toolbar,
  Typography
} from '@material-ui/core'; 
import LongMenu from '../HeaderButton/HeaderButton';

 

class Header extends Component {

  componentDidMount() {
    // console.log(classes)
  }

  render() {

    const { text, classes } = this.props;
    console.log(text)
    console.log(classes)

    return ( 
      <AppBar 
        position="static" 
        enableColorOnDark={true}
        color="primary"
      >
        <Container>
        <Toolbar 
          sx={{padding: 2}}
        >

          <img 
            src="./monkey.png" 
            alt="logo"  
            style={{
              maxWidth: "22%"
            }}
            
          />
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
          <Box 
            display={{xs: '12', sm: '12', md: 'none', lg: 'none'}}>
            <LongMenu />
          </Box>
          <Box 
            sx={{fontFamily: 'Comfortaa'}}
            display={{
              xs: 'none', 
              sm: 'none', 
              md: 'block', 
              lg: 'block'
            }}
          >
            <Button color="inherit">Gifs</Button>
            <Button color="inherit">Vídeos</Button>
            <Button color="inherit">Imagens</Button>
            <Button color="inherit">Coletâneas</Button>
          </Box>
        </Toolbar>
        </Container>
      </AppBar>
    );
  }
}

export default (Header);