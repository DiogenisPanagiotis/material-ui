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
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

const useStyles = makeStyles((theme) => ({
  chip: {
    borderColor: colors.indigo[500],
    color: colors.indigo[500],
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

const SalesCard = ({ className, sale, ...rest }) => {
  const classes = useStyles();

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
          <Chip className={classes.chip} label={sale.rank} variant="outlined" />
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
        <Chip className={classes.chip} label={`Platform: ${sale.platform}`} variant="outlined" />
        <Chip className={classes.chip} label={`Year: ${sale.year}`} variant="outlined" />
        <Chip className={classes.chip} label={`Publisher: ${sale.publisher}`} variant="outlined" />
        <Chip className={classes.chip} label={`Global Sales: ${sale.global_sales}`} variant="outlined" />
      </CardContent>
      <Box flexGrow={1} />
      <Divider />
      <Box p={2}>
        <Grid
          container
          justify="space-between"
          spacing={2}
        >
          <Grid
            className={classes.statsItem}
            item
          >
            <AccessTimeIcon
              className={classes.statsIcon}
              color="action"
            />
            <Typography
              color="textSecondary"
              display="inline"
              variant="body2"
            >
              Updated 2hr ago
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

SalesCard.propTypes = {
  className: PropTypes.string,
  sale: PropTypes.object
};

export default SalesCard;
