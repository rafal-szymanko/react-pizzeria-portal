
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    textAlign: 'center',
  },
}));

export default function FullWidthGrid() {

  const classes = useStyles();
  const currentlyDate = new Date().toDateString();


  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Card className={classes.root}>
            <CardHeader
              title="Total orders"
              subheader={currentlyDate}
            />
            <CardContent>
              <Box fontWeight="fontWeightBold" fontSize={24} m={1}>
                63
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card className={classes.root}>
            <CardHeader
              title="Local orders"
              subheader={currentlyDate}
            />
            <CardContent>
              <Box fontWeight="fontWeightBold" fontSize={24} m={1}>
                48
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card className={classes.root}>
            <CardHeader
              title="Delivery orders"
              subheader={currentlyDate}
            />
            <CardContent>
              <Box fontWeight="fontWeightBold" fontSize={24} m={1}>
                15
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}