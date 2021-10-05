import React, {Component} from 'react'; 

import { Link } from 'react-router-dom';

import {   
  AppBar, 
  Container,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Grid
} from '@material-ui/core'; 
 
 
class Footer extends Component {

  componentDidMount() {
    // console.log(classes)
  }

  render() {
  
    const mystyle = {
      color: "white",  
    };
 
    return ( 
      <AppBar 
        position="static" 
        enableColorOnDark={true}
        color="primary"
        sx={{marginTop: '20px', backgroundColor: "#292727"}}
      >
        <Container> 
          

            <Grid container>
              <Grid md={6} align="center"> 

                <img 
                  src="./monkey.png" 
                  alt="logo"  
                  style={{
                    maxWidth: "50%"
                  }}
                  
                />
 
              </Grid>

              <Grid md={6} > 
 
                <List
                  sx={{ width: '100%', maxWidth: 360, bgcolor: 'inherit' }}
                  aria-label="contacts"
                >

                  <Link to="/gifs">
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemText style={mystyle} primary="Gifs" />
                      </ListItemButton>
                    </ListItem>
                  </Link>

                  <Link to="/videos">
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemText  style={mystyle}
                          primary="Vídeos" />
                      </ListItemButton>
                    </ListItem>
                  </Link>

                  <Link to="/imagens">
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemText style={mystyle} primary="Imagens" />
                      </ListItemButton>
                    </ListItem>
                  </Link>

                  <Link to="/coletaneas">
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemText style={mystyle}  primary="Coletâneas" />
                      </ListItemButton>
                    </ListItem>
                  </Link>

                </List>

              </Grid>
            </Grid> 
        </Container>
      </AppBar>
    );
  }
}

export default (Footer);