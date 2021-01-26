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

const salesURL = 'https://codingtestfe.dev-illumix.com/videogamesales';
const genresURL = 'https://codingtestfe.dev-illumix.com/lists/genre';

const ProductList = () => {
  const classes = useStyles();
  const [sales, setSales] = useState([]);
  const [genre, setGenre] = useState('');
  const [genreList, setGenreList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const fetchAPI = (url, callback) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => callback(data));
  };

  const handleChangePage = (pageNum) => {
    setPageNumber(pageNum);
  };

  useEffect(() => {
    const videoGameSalesURL = `${salesURL}?page=${pageNumber}&genre=${genre}`;
    if (!genreList.length) fetchAPI(genresURL, setGenreList);
    fetchAPI(videoGameSalesURL, setSales);
  }, [genre, pageNumber]);

  return (
    <Page
      className={classes.root}
      title="Products"
    >
      <Container maxWidth={false}>
        <Toolbar
          genreList={genreList}
          setGenre={setGenre}
        />
        <Box mt={3}>
          <Grid
            container
            spacing={3}
          >
            {sales.map((sale) => (
              <Grid
                item
                key={sale.rank}
                lg={3}
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
          <Pagination
            color="primary"
            count={5}
            size="small"
            onChange={(e, pageNum) => handleChangePage(pageNum)}
          />
        </Box>
      </Container>
    </Page>
  );
};

export default ProductList;
