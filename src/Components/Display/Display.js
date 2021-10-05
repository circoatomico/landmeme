// eslint-disable-next-line
import React, {Component} from 'react'; 

import axios from 'axios';

import { 
  Grid,
  Container
} from '@material-ui/core'; 

import CardMeme from '../CardMeme/CardMeme';
import HeaderSearch from '../HeaderSearch/HeaderSearch';
 
class Display extends Component {
 
  constructor(props) {
    super(props);

    this.state = {
      memes: [],
      keyCardMeme: 1
    }
  }


  updateMemes(posts) {

    this.setState({memes: posts})

  }
 
  async getPosts() {
    // this.setState({memes: []}) 
    var self = this
    await axios.get('http://localhost:3001/posts')
    .then(function (response) {
      console.log(response.data)
      self.setState({memes: response.data })
      // self.setState({keyCardMeme: 2})
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
                memes={this.state.memes} 
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