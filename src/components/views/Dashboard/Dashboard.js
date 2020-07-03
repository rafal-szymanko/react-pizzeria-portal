import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import DashboardOrderSummary from '../../features/DashboardOrderSummary/DashboardOrderSummary';
import DashboardCurrentlyOrder from '../../features/DashboardCurrentlyOrder/DashboardCurrentlyOrder';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    textAlign: 'center',
  },
}));

export default function Dashboard() {

  const classes = useStyles();


  return (
    <div className={classes.root}>
      <DashboardOrderSummary/>
      <DashboardCurrentlyOrder/>
    </div>
  );
}
