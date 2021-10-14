import React, {Component} from 'react'; 

import { styled } from '@material-ui/core/styles';  

import 'moment/locale/pt-br';
import moment from 'moment';

import parse from 'html-react-parser';

// import { Link, MemoryRouter, Route } from 'react-router-dom';

import { 
  Grid,
  Divider,
  Paper, 
  Typography, 
  Chip
  // Button,
  // Accordion,
  // AccordionSummary,
  // AccordionDetails,
    
} from '@material-ui/core';  

// import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
// import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  marginTop: '10px',
}));

class CardMeme extends Component {

  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
      opened: [],
      memes: this.props.memes,
    };
  }

  disqus() { 
    var d = document, s = d.createElement('script');
    s.src = 'https://https-infallible-rosalind-2bf822-netlify-app.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
  }

  componentDidMount() {
    // console.log(this.memes)
    // this.disqus()
  }

  
  render() {
    const { memes } = this.props;

    return ( 
   
      <div> 
        {
          memes.map((meme) => (
            <Grid container key={meme.id} sx={{marginBottom: '20px'}}>

              <Grid 
                item 
                xs={12} 
                sm={12} 
                md={12}
                
              >
                <Item
                  sx={{
                    backgroundColor: this.props.themeColor === '#1976d2' ? '#fff' : '#242526',
                    color: this.props.themeColor === '#1976d2' ? 'black' : 'white',
                    transition: 'all 0.2s ease-in'
                  }}
                >
                  <Grid container>
                    <Grid 
                      item 
                      xs={10} 
                      sm={10} 
                      md={10} 
                      
                    >
                      
                      <Typography 
                        variant="h5" 
                        paragraph={false} 
                        gutterBottom 
                        component="p"
                        sx={{}}
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
                        {moment(meme.created_at).locale('pt-br').fromNow()}
                      </Typography>
                    </Grid>

                    <Grid 
                      item 
                      xs={2} 
                      sm={2} 
                      md={2}  
                      sx={{overflow: 'hidden'}}
                    >
                      
                      {meme.categories.map( (categorie) => (
                        <Chip 
                          key={categorie + meme.id}
                          sx={{
                            margin: '2px', 
                            overflow: 'hidden',
                            color: this.props.themeColor === '#1976d2' ? 'black' : 'white'
                          }} 
                          label={categorie} 
                          size="small" 
                          variant="outlined" 
                        />
                      ))}
                      
                    </Grid>

                  </Grid>
                   
                  <Divider sx={{margin: '10px'}}/>

                  <div style={{position:'relative'}}>
                    {/* eslint-disable-next-line */}
                    {
                      parse(meme.url)

                    }

                  </div>

                  <Divider sx={{margin: '10px'}}/>
                  
                  <Typography 
                    variant="body1" 
                    gutterBottom
                    align='center'
                    sx={{
                      paddingTop: '15px',
                      paddingBottom: '15px'
                    }}
                  >
                    {meme.description}
                  </Typography>

                  {/* <div id="disqus_thread"></div> */}

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