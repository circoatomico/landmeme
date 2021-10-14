// eslint-disable-next-line
import React, {Component} from 'react'; 

import { withRouter } from "react-router-dom";


import axios from 'axios';
// import Cookies from 'js-cookie'

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
      loadedMemes: false,
      currentPage: 0,
      memes: [],
      keyCardMeme: 1,
      totalPages: 1
    }
  }
 
  async getPosts(newPage = 1) {
 
    var self = this

    if (self.state.currentPage !== newPage ) { 
      // self.setState({memes: []})
      await axios.get('http://localhost:3001/posts/?_page=' + newPage + '&_limit=4')
      .then(function (response) {

        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });

        self.setState({loadedMemes: false})

        self.setState({memes: response.data, currentPage: newPage})

        self.props.updateTotalPages( Math.ceil(response.headers["x-total-count"] / 4 ) )

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
    }

  }

  componentDidMount() {
    
    console.log('did mount')
    this.getPosts()

  }

  render() {
    
    let actualPage = this.props.location.state
    this.getPosts(actualPage)

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

          
            
            {/* <img             
            src="./loading.gif" 
            alt="logo"  
            style={{
              maxWidth: "22%"
            }} /> */}
        
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