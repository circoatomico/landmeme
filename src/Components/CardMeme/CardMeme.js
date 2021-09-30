import React, {Component} from 'react'; 

import { styled } from '@material-ui/core/styles';  
import 'moment/locale/pt-br';


import moment from 'moment';

import parse from 'html-react-parser';

import { Link, MemoryRouter, Route } from 'react-router-dom';

import { 
  Grid,
  Divider,
  Paper, 
  Typography, 
  Chip,
  Pagination,
  PaginationItem,
  Stack
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
      opened: []
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
    this.disqus()
  }

  
  render() {
    const { memes } = this.props;
    
    // memes.map( (meme) => ( ))

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
                      spacing={1}
                      sx={{overflow: 'hidden'}}
                    >
                      
                      {meme.categories.map( (categorie) => (
                        <Chip 
                          sx={{margin: '2px', overflow: 'hidden'}} 
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

        <MemoryRouter initialEntries={['/inbox']} initialIndex={0}>
          <Route>
            {({ location }) => {
              const query = new URLSearchParams(location.search);
              const page = parseInt(query.get('page') || '1', 10);
              return (
                <Pagination
                  page={page}
                  count={10}
                  renderItem={(item) => (
                    <PaginationItem
                      component={Link}
                      to={`/inbox${item.page === 1 ? '' : `?page=${item.page}`}`}
                      {...item}
                    />
                  )}
                />
              );
            }}
          </Route>
        </MemoryRouter>
      </div>   
      
    );
  }
}

export default (CardMeme);