import { Component } from "react";

import { Link, MemoryRouter, Route } from 'react-router-dom';

import {
  Box,
  Container,
  Grid,
  Pagination,
  PaginationItem
} from '@material-ui/core';  


class PagesPagination extends Component {

  render() {

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
          <MemoryRouter initialEntries={['/page']} initialIndex={0}>
            <Route>
              {({ location }) => {
                const query = new URLSearchParams(location.search);
                const page = parseInt(query.get('page') || '1', 10);
                return (
                  <Pagination
                    page={page}
                    count={10}
                    renderItem={(item) => (
                      <PaginationItem
                        component={Link}
                        to={`/${item.page === 1 ? '' : `?page=${item.page}`}`}
                        {...item}
                      />
                    )}
                  />
                );
              }}
            </Route>
          </MemoryRouter>
          </Box>
      </Grid>
    </Grid>
    </Container>
    ) 
  }
} 

export default (PagesPagination);