import React, {Component} from 'react'; 

import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../../Components/Header/Header';
import Display from '../../Components/Display/Display';
import Footer from '../../Components/Footer/Footer';
import PagesPagination from '../../Components/Pagination/Pagination';

import { createTheme } from '@material-ui/core';
import { ThemeProvider } from '@emotion/react';

import Cookies from 'js-cookie'

class Blog extends Component {

  state = {
    themeColor: "#1976d2",
    totalPages: 0,
  }

  dateCookie() {
    const date = new Date()
    date.setMonth(date.getMonth() + 1)
    return date
  }

  handleUpdate = (color) => {
    Cookies.set('themeColor', color, { expires: this.dateCookie() })
    this.setState({themeColor: color})
    this.setBodyColor(color)
  }

  setTotalPages = (total = 1) => {
    console.log('total')
    console.log(total)
    this.setState({totalPages: total})
  }

  setBodyColor(theme) {
    if (theme === '#1976d2') {
      document.body.style = 'background: #f8f8f8 !important';
    } else {
      document.body.style = 'background: #808080 !important';
    }
  }

  componentDidMount() { 
    
    let theme = Cookies.get('themeColor') 

    if (theme === undefined) {
      theme = '#1976d2'
      Cookies.set('themeColor', theme, { expires: this.dateCookie() })
      this.setState({themeColor: theme})
    } else {
      this.setState({themeColor: theme})
      this.setBodyColor(theme)
    }
  }

  render() {

    console.log('rendering')

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
 
    return ( 
      <ThemeProvider theme={theme}>

        <React.Fragment >
          <CssBaseline  />

              <Header 
                updateState={this.handleUpdate}
                themeColor={this.state.themeColor} 
              />

              <Display
                themeColor={this.state.themeColor}
                updateTotalPages={this.setTotalPages} 
              />
              
              <PagesPagination 
                totalPages={this.state.totalPages}
              />

              <Footer />
            
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default (Blog);


// background-color: #f8f8f8 !important;