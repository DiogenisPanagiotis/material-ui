import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Card,
  CardContent,
  Chip,
  colors,
  Divider,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  chip: {
    backgroundColor: colors.indigo[500],
    color: '#fff',
    display: 'flex',
    marginTop: '10px'
  },
  card: {
    padding: '40px'
  },
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  statsItem: {
    alignItems: 'center',
    display: 'flex'
  },
  statsIcon: {
    marginRight: theme.spacing(1)
  },
  title: {
    marginTop: '20px',
    marginBottom: '20px'
  }
}));

const fields = {
  genre: 'Genre',
  platform: 'Platform',
  publisher: 'Publisher',
  global_sales: 'Global Sales'
};

const SalesCard = ({
  className,
  sale,
  ...rest
}) => {
  const classes = useStyles();

  const renderList = () => {
    return (
      <List className={classes.root}>
        {Object.keys(fields).map((field) => {
          return (
            <>
              <ListItem>
                <ListItemText primary={fields[field]} secondary={sale[field]} />
              </ListItem>
              <Divider variant="middle" />
            </>
          );
        })}
      </List>
    );
  };

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent className={classes.card}>
        <Box
          display="flex"
          justifyContent="center"
          mb={3}
        >
          <Chip
            className={classes.chip}
            label={sale.rank}
            variant="outlined"
          />
        </Box>
        <Typography
          align="center"
          className={classes.title}
          color="textPrimary"
          gutterBottom
          variant="h4"
        >
          {sale.name}
        </Typography>
        {renderList()}
      </CardContent>
      <Box flexGrow={1} />
    </Card>
  );
};

SalesCard.propTypes = {
  className: PropTypes.string,
  sale: PropTypes.object
};

export default SalesCard;
