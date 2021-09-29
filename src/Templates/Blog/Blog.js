import React, {Component} from 'react'; 

import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../../Components/Header/Header';
import Display from '../../Components/Display/Display';
import Footer from '../../Components/Footer/Footer';

class Blog extends Component {

  componentDidMount() {
    // console.log(classes)
  }

  render() {

    const { text, classes } = this.props;
    console.log(text)
    console.log(classes)

    return ( 
      <React.Fragment>
        <CssBaseline />

            <Header />

            <Display />

            <Footer />
          
      </React.Fragment>
    );
  }
}

export default (Blog);