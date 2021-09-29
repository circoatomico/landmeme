import React, {Component} from 'react'; 

import {   
  AppBar, 
  Container,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Grid, 
  Typography
} from '@material-ui/core'; 
 
 
class Footer extends Component {

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
        sx={{marginTop: '20px', backgroundColor: "#292727"}}
      >
        <Container> 
          

            <Grid container>
              <Grid sx={6} align="center"> 
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
              </Grid>

              <Grid sx={6}>
                {/* <Stack spacing={2}>
                  <span color="inherit">Contato</span> 
                </Stack> */}

                <h1> Contato </h1>
                <List
                  sx={{ width: '100%', maxWidth: 360, bgcolor: 'inherit' }}
                  aria-label="contacts"
                >

                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText primary="Chelsea Otakan" />
                    </ListItemButton>
                  </ListItem>

                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText primary="Eric Hoffman" />
                    </ListItemButton>
                  </ListItem>

                </List>

              </Grid>
            </Grid> 
        </Container>
      </AppBar>
    );
  }
}

export default (Footer);