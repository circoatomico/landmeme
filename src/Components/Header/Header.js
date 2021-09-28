// eslint-disable-next-line
import React, {Component} from 'react'; 

import { styled } from '@material-ui/core/styles';  
 
import { 
  Grid,
  Paper,
  AppBar, 
  Container,
  Box,
  Button,
  Toolbar,
  Typography,
  IconButton } from '@material-ui/core'; 

import MenuIcon from '@material-ui/icons/Menu';
 
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
              maxWidth: "10%"
            }}
            
          />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            To de Boa
          </Typography>
          <Button color="inherit">Gifs</Button>
          <Button color="inherit">Vídeos</Button>
          <Button color="inherit">Imagens</Button>
          <Button color="inherit">Coletâneas</Button>
        </Toolbar>
        </Container>
      </AppBar>
    );
  }
}

export default (Header);