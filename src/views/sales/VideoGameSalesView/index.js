import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import Page from 'src/components/Page';
import Toolbar from './Toolbar';
import VideoGameSales from './VideoGameSales';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  salesCard: {
    height: '100%'
  }
}));

const videoGameSalesURL = 'https://codingtestfe.dev-illumix.com/videogamesales';

const ProductList = () => {
  const classes = useStyles();
  const [sales, setSales] = useState([]);
  const [genre, setGenre] = useState('');
  const maxItems = 6;
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!sales.length) {
      fetch(videoGameSalesURL)
        .then((res) => res.json())
        .then((json) => setSales(json));
    }
  }, []);

  const filterSales = (data) => {
    const filtered = data.filter((sale) => sale.genre.toLowerCase().includes(genre));
    return genre.length ? filtered : filtered.slice(((page - 1) * (maxItems)), (page * maxItems));
  };

  return (
    <Page
      className={classes.root}
      title="Products"
    >
      <Container maxWidth={false}>
        <Toolbar setGenre={setGenre} />
        <Box mt={3}>
          <Grid
            container
            spacing={3}
          >
            {filterSales(sales).map((sale) => (
              <Grid
                item
                key={sale.rank}
                lg={4}
                md={6}
                xs={12}
              >
                <VideoGameSales
                  className={classes.salesCard}
                  sale={sale}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          mt={3}
          display="flex"
          justifyContent="center"
        >
          {!genre.length ? (
            <Pagination
              color="primary"
              count={4}
              size="small"
              onChange={(e, val) => setPage(val)}
            />
          ) : ''}
        </Box>
      </Container>
    </Page>
  );
};

export default ProductList;
