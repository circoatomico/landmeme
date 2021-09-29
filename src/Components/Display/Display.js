// eslint-disable-next-line
import React, {Component} from 'react'; 

import { 
  Grid,
  Container
} from '@material-ui/core'; 

import CardMeme from '../CardMeme/CardMeme';
import HeaderSearch from '../HeaderSearch/HeaderSearch';

const memes = [
  {
    title: "Eai mano kkkkkk",
    categories: ["dog", "raiva", "Morra Seiya"],
    url: ""
  },
  {
    title: "Eai mano kkkkkk",
    categories: ["cat", "raiva"],
    url: ""
  },
  {
    title: "Eai mano kkkkkk",
    categories: ["ahah", "raiva"],
    url: ""
  },
  {
    title: "Eai mano kkkkkk",
    categories: [],
    url: ""
  }
]

class Display extends Component {

  componentDidMount() {
    // console.log(classes)
  }

  render() {

    const { text, classes } = this.props;
    console.log(text)
    console.log(classes)

    return ( 
      <Container sx={{paddingTop: 5}}>
        <Grid container spacing={2}>

          <Grid item xs={12} sm={12} md={8} lg={8} spacing={5}>
            
              <CardMeme 
                memes={memes} 
              > 
              </CardMeme>
            
          </Grid>

          <Grid 
            item 
            xs={12}
            sm={12}
            md={4}
            lg={4}
            spacing={5}
          >
          < HeaderSearch />
          </Grid>
 
        </Grid>
      </Container>
    );
  }
}

export default (Display);