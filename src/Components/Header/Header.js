import React, {Component} from 'react'; 

import {
  AppBar, 
  Container,
  Box,
  Button,
  ButtonGroup,
  Toolbar,
  Typography
} from '@material-ui/core'; 

import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';

import LongMenu from '../HeaderButton/HeaderButton';

class Header extends Component {

  componentDidMount() {
  }

  render() {

    const { themeColor } = this.props;

    return ( 
      <AppBar 
        position="static" 
        sx={{backgroundColor: themeColor, transition: 'all 0.2s ease-in'}}
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
            <LongMenu
              themeColor={this.props.themeColor}
              updateState={this.props.updateState}
            />
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
            <Button color="inherit" sx={{fontWeight: 'bold'}}>Gifs</Button>
            <Button color="inherit" sx={{fontWeight: 'bold'}}>Vídeos</Button>
            <Button color="inherit" sx={{fontWeight: 'bold'}}>Imagens</Button>
            <Button color="inherit" sx={{fontWeight: 'bold'}}>Coletâneas</Button>

            <Button 
            sx={{marginLeft: '20px'}}
              variant="contained"
              color="secondary"
              onClick={ () => {
                if ( this.props.themeColor === '#1976d2' ) {
                  this.props.updateState('#242526')
                } else {
                  this.props.updateState('#1976d2')
                }
              } }
            >
              {(this.props.themeColor === '#1976d2') ? 'Apagar' : 'Acender'}
              <WbIncandescentIcon />
            </Button> 
            
          </Box>
        </Toolbar>
        </Container>
      </AppBar>
    );
  }
}

export default (Header);