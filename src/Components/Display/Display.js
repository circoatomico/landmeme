// eslint-disable-next-line
import React, {Component} from 'react'; 

import axios from 'axios';

import { 
  Grid,
  Container
} from '@material-ui/core'; 

import CardMeme from '../CardMeme/CardMeme';
import HeaderSearch from '../HeaderSearch/HeaderSearch';

const memes = []

class Display extends Component {
 

  state = {
    memes: [],
    keyCardMeme: 1,
  }

  updateMemes(posts) {

    this.setState({memes: posts})

  }
 
  async getPosts() {
    // this.setState({memes: []}) 
    var self = this
    await axios.get('http://localhost:3001/posts')
    .then(function (response) {
      self.setState({memes: response.data})
      self.setState({keyCardMeme: 2})
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });


  }

  componentDidMount() {
    
    this.getPosts()

  }

  render() {

    const { themeColor } = this.props;

    return ( 
      <Container sx={{paddingTop: 5}}>
        <Grid container spacing={2}>

          <Grid item xs={12} sm={12} md={8} lg={8}  >
            
              <CardMeme 
                key={this.state.keyCardMeme}
                memes={memes} 
                themeColor={themeColor}
              > 
              </CardMeme>
            
          </Grid>

          <Grid 
            item 
            xs={12}
            sm={12}
            md={4}
            lg={4} 
            sx={{paddingTop: '25px'}}
          >
          < HeaderSearch />
          </Grid>
 
        </Grid>
      </Container>
    );
  }
}

export default (Display);