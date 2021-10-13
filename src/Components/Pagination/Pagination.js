import { Component } from "react";
 
import { Link, withRouter } from "react-router-dom"


import {
  Box,
  Container,
  Grid,
  Pagination, 
  Stack
} from '@material-ui/core';

class PagesPagination extends Component {



  routingFunction = (param, page) => {
    this.props.history.push({
      pathname: '/page/' + page,
      state: page
    });
  }

  render() {

    const { totalPages } = this.props;

    return (  
    <Container sx={{paddingTop: 5, textAlign: 'center'}}>
      <Grid 
        container
        alignItems="center"
        justify="center" 
        spacing={0}
        direction="column"
        sx={{marginBottom: '20px', textAlign: 'center' }}>
        <Grid 
          item 
          xs={12} 
          sm={12} 
          md={12}  
          sx={{textAlign: 'center', }}
        >
          <Box sx={{textAlign: 'center'}}>
            <Stack spacing={2}>
              <Pagination 
                count={totalPages} 
                shape="rounded"
                onChange={ (obg, page) => {
                  this.routingFunction(obg, page)
                }}
              />
            </Stack>
          </Box>

          <Link to="/page/3" > Teste </Link>
      </Grid>
    </Grid>
    </Container>
    ) 
  }
} 

export default withRouter(PagesPagination);