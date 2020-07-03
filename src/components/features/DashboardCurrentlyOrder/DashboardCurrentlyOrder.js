import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import TableContainer from '@material-ui/core/TableContainer';

import PropTypes from 'prop-types';


const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function createData(bookingID,contactName, table, hour) {
  return {
    bookingID,
    contactName,
    table,
    hour,
    details: [
      { people: 3, duration: 2, starters: 'bread', contact: '555 555 555'},
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.bookingID}
        </TableCell>
        <TableCell align="right">{row.contactName}</TableCell>
        <TableCell align="right">{row.table}</TableCell>
        <TableCell align="right">{row.hour}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>People</TableCell>
                    <TableCell>Duration</TableCell>
                    <TableCell align="right">Starters</TableCell>
                    <TableCell align="right">Phone number</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.details.map((detailsRow) => (
                    <TableRow key={detailsRow.contact}>
                      <TableCell component="th" scope="row">
                        {detailsRow.people}
                      </TableCell>
                      <TableCell>{detailsRow.duration}</TableCell>
                      <TableCell align="right">{detailsRow.starters}</TableCell>
                      <TableCell align="right">{detailsRow.contact}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    bookingID: PropTypes.number.isRequired,
    table: PropTypes.number.isRequired,
    hour: PropTypes.string.isRequired,
    contactName: PropTypes.string.isRequired,
    details: PropTypes.arrayOf(
      PropTypes.shape({
        people: PropTypes.number.isRequired,
        duration: PropTypes.number.isRequired,
        starters: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

const rows = [
  createData(1,'Paul', 2, '12:30'),
  createData(2,'Amanda', 1, '12:30'),
  createData(3, 'Roy', 1, '12:30'),
  createData(4, 'Chris', 2, '12:30'),
  createData(5, 'Ann', 3, '12:30'),
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    textAlign: 'center',
  },
}));

export default function DashboardCurrentlyOrder() {

  const classes = useStyles();
  const currentlyDate = new Date().toDateString();


  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Card className={classes.root}>
            <CardHeader
              title="Bookings"
              subheader={currentlyDate}
            />
          </Card>
          <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
              <TableHead>
                <TableRow>
                  <TableCell />
                  <TableCell>Booking ID</TableCell>
                  <TableCell align="right">Reserved by</TableCell>
                  <TableCell align="right">Table</TableCell>
                  <TableCell align="right">Hour</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <Row key={row.name} row={row} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card className={classes.root}>
            <CardHeader
              title="Events"
              subheader={currentlyDate}
            />
          </Card>
          <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
              <TableHead>
                <TableRow>
                  <TableCell />
                  <TableCell>Event ID</TableCell>
                  <TableCell align="right">Reserved by</TableCell>
                  <TableCell align="right">Table</TableCell>
                  <TableCell align="right">Hour</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <Row key={row.name} row={row} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
}
