// eslint-disable-next-line
import React, {Component} from 'react'; 

import { styled } from '@material-ui/core/styles';  
 
import { 
  Grid,
  Container,
  Paper,
  Card,
  CardHeader,
  CardMedia,
  CardContent, 
  Typography,
  Button, 
  CardActionArea, 
  CardActions
} from '@material-ui/core'; 

import MenuIcon from '@material-ui/icons/Menu';
import CardMeme from '../CardMeme/CardMeme';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  marginTop: '10px',
  color: theme.palette.text.secondary,
}));

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

          <Grid item xs={8} spacing={5}>
            
              <CardMeme 
                memes={memes} 
              > 
              </CardMeme>
            
          </Grid>

          <Grid item xs={1} spacing={5}>
          </Grid>
 
        </Grid>
      </Container>
    );
  }
}

export default (Display);