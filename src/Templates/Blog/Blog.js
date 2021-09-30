import React, {Component} from 'react'; 

import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../../Components/Header/Header';
import Display from '../../Components/Display/Display';
import Footer from '../../Components/Footer/Footer';
import PagesPagination from '../../Components/Pagination/Pagination';

import { createTheme } from '@material-ui/core';
import { ThemeProvider } from '@emotion/react';

class Blog extends Component {

  componentDidMount() {
    // console.log(classes)
  }

  render() {

    const theme = createTheme({
      typography: {
        fontFamily: 'Comfortaa, Cursive',
      },
      components: {
        MuiCssBaseline: {
          styleOverrides: `
            @font-face {
              font-family: 'Comfortaa';
              font-style: normal;
              font-display: swap;
              font-weight: 400;
              src: "local('Comfortaa'), local('Comfortaa'), url('../../../public/static/Comfortaa-Bold.ttf') format('ttf')";
              unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
            }
          `,
        },
      },
    });

    const { text, classes } = this.props;
    console.log(text)
    console.log(classes)

    return ( 
      <ThemeProvider theme={theme}>

        <React.Fragment>
          <CssBaseline />

              <Header />

              <Display />

              <PagesPagination />

              <Footer />
            
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default (Blog);