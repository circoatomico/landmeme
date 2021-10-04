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
    id: 1,
    title: "Eai mano kkkkkk",
    categories: ["dog", "raiva", "Morra Seiya"],
    created_at: "2021-09-5 00:00:00",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur.",
    url: `<div style='position:relative; padding-bottom:calc(60.50% + 44px)'><iframe src='https://gfycat.com/ifr/QueasyForcefulFlea' frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe></div>`
  },
  {
    id: 2,
    title: "Eai mano kkkkkk",
    categories: ["cat", "raiva"],
    created_at: "2021-09-5 00:00:00",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur.",
    url: `<div style='position:relative; padding-bottom:calc(60.50% + 44px)'><iframe src='https://gfycat.com/ifr/QueasyForcefulFlea' frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe></div>`
  },
  {
    id: 3,
    title: "Eai mano kkkkkk",
    categories: ["ahah", "raiva"],
    created_at: "2021-09-5 00:00:00",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur.",
    url: `<div style='position:relative; padding-bottom:calc(60.50% + 44px)'><iframe src='https://gfycat.com/ifr/QueasyForcefulFlea' frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe></div>`
  },
  {
    id: 4,
    title: "Eai mano kkkkkk",
    categories: [],
    created_at: "2021-09-5 00:00:00",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur.",
    url: `<div style='position:relative; padding-bottom:calc(60.50% + 44px)'><iframe src='https://gfycat.com/ifr/QueasyForcefulFlea' frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe></div>`
  }
]

class Display extends Component {

  componentDidMount() {
    // console.log(classes)
  }

  render() {

    const { text, classes, themeColor } = this.props;
    console.log(text)
    console.log(classes)

    return ( 
      <Container sx={{paddingTop: 5}}>
        <Grid container spacing={2}>

          <Grid item xs={12} sm={12} md={8} lg={8}  >
            
              <CardMeme 
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