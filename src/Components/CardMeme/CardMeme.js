import React, {Component} from 'react'; 

import { styled } from '@material-ui/core/styles';  
 
import { 
  Grid,
  Divider,
  Paper, 
  Typography, 
  Chip,
  Button
} from '@material-ui/core';  

// import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  marginTop: '10px',
}));

class CardMeme extends Component {

  disqus() { 
    var d = document, s = d.createElement('script');
    s.src = 'https://https-infallible-rosalind-2bf822-netlify-app.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
  }

  componentDidMount() {
    // console.log(this.memes)
    this.disqus()
  }

  render() {

    const { memes, classes } = this.props;
    console.log(memes)
    console.log(classes)

    return ( 
   
      <div>
        {
          memes.map((meme) => (
            <Grid container>

              <Grid 
                item 
                xs={12} 
                sm={12} 
                md={12} 
                spacing={2}
              >
                <Item>
                  <Grid container>
                    <Grid 
                      item 
                      xs={10} 
                      sm={10} 
                      md={10}
                      spacing={1}
                    >
                      
                      <Typography 
                        variant="h5" 
                        paragraph={false} 
                        gutterBottom 
                        component="p"
                      >
                        {meme.title} 
                      </Typography>

                      <Typography 
                        sx={{color: 'gray'}} 
                        spacing="0" 
                        paragraph={false}
                        align="left" 
                        variant="caption" 
                        gutterBottom 
                        component="p"
                      >
                        8 horas atrás
                      </Typography>
                    </Grid>

                    <Grid 
                      item 
                      xs={2} 
                      sm={2} 
                      md={2} 
                      spacing={1}
                    >
                      
                      {meme.categories.map( (categorie) => (
                        <Chip 
                          sx={{margin: '2px'}} 
                          label={categorie} 
                          size="small" 
                          variant="outlined" 
                        />
                      ))}
                      
                    </Grid>

                  </Grid>
                   
                  <Divider sx={{margin: '10px'}}/>

                  <div style={{position:'relative', paddingBottom: '100vh'}}>
                    {/* eslint-disable-next-line */}
                    <iframe src='https://gfycat.com/ifr/ScholarlyGaseousBeetle' frameborder='0' scrolling='no' width='100%' height='100%' style={{position: 'absolute',top: '0', left:'0'}} allowfullscreen></iframe>
                  </div>

                  <Divider sx={{margin: '10px'}}/>
                  
                  <Typography 
                    variant="body1" 
                    gutterBottom
                    align='center'
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,<br/>
                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                    quasi quidem quibusdam.
                  </Typography>

                  {/* <div id="disqus_thread"></div> */}

                  <Button 
                    size="small" 
                    color="primary" 
                    variant="contained"
                    startIcon={<ChatBubbleOutlineIcon />}
                  >
                    
                    Comentários
                  </Button>

                </Item>
            
              </Grid>
            </Grid>
          ))
        } 
      </div>   
      
    );
  }
}

export default (CardMeme);