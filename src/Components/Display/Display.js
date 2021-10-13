// eslint-disable-next-line
import React, {Component} from 'react'; 

import { withRouter } from "react-router-dom";


import axios from 'axios';
import Cookies from 'js-cookie'

import { 
  Grid,
  Container
} from '@material-ui/core'; 
 

import CardMeme from '../CardMeme/CardMeme';
import HeaderSearch from '../HeaderSearch/HeaderSearch';
 
class Display extends Component {
 
  constructor(props) {
    super(props);

    this.updateTotalPages = props.updateTotalPages;

    this.state = {
      memes: [],
      keyCardMeme: 1,
      totalPages: 1
    }
  }


  updateMemes(posts) {

    this.setState({memes: posts})

  }
 
  async getPosts() {
    // this.setState({memes: []}) 
    var self = this
    await axios.get('http://localhost:3001/posts/?_page=1&_limit=2')
    .then(function (response) {
      self.setState({memes: response.data})
      self.props.updateTotalPages( response.headers["x-total-count"] / 2 )
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

    let { page } = this.props.match.params;    

    console.log(this.props.match)
    console.log(this.props.location)
    console.log(this.props.history) 
    console.log(page)
    console.log('aquie')

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

export default withRouter(Display);