import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {},
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Toolbar = ({
  className,
  genre,
  genreList,
  setGenre,
  ...rest
}) => {
  const classes = useStyles();

  const renderMenuItems = () => {
    return genreList && genreList.map((field) => {
      return <MenuItem key={field} value={field}>{field}</MenuItem>;
    });
  };

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Box mt={3}>
        <Card>
          <CardContent>
            <Box maxWidth={500}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Genre</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={genre}
                  onChange={({ target }) => setGenre(target.value)}
                  label="Genre"
                >
                  <MenuItem value="">None</MenuItem>
                  {renderMenuItems()}
                </Select>
              </FormControl>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

Toolbar.propTypes = {
  className: PropTypes.string,
  genre: PropTypes.string,
  genreList: PropTypes.array,
  setGenre: PropTypes.func,
};

export default Toolbar;
