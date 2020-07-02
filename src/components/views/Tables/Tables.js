import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import MomentUtils from '@date-io/moment';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

import {Link} from 'react-router-dom';

const demoContent = [
  {hour: '12:00', status: 'available', order: null},
  {hour: '12:30', status: 'booked', order: 555},
  {hour: '13:00', status: 'event', order: 123},
  {hour: '13:30', status: 'event', order: 234},
  {hour: '14:00', status: 'booked', order: 345},
  {hour: '14:30', status: 'available', order: null},
  {hour: '15:00', status: 'available', order: null},
];

const renderActions = (status, order) => {
  switch (status) {
    case 'available':
      return (
        <>
          <Button component={Link} to={'tables/booking/new'}>New booking</Button>
          <Button component={Link} to={'tables/events/new'}>New event</Button>
        </>
      );
    case 'event':
      return (
        <Button component={Link} to={`tables/event/${order}`}>Show event details</Button>
      );
    case 'booked':
      return (
        <Button component={Link} to={`tables/booking/${order}`}>Show booking details</Button>
      );
    default:
      return null;
  }
};

export default function Tables() {

  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <Grid container justify="space-around">
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Booking date"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
          <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            label="Booking time"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change time',
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Table</TableCell>
              <TableCell>Table 1</TableCell>
              <TableCell>Table 2</TableCell>
              <TableCell>Table 3</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {demoContent.map(row => (
              <TableRow key={row.hour}>
                <TableCell component="th" scope="row">
                  {row.hour}
                </TableCell>
                <TableCell>
                  {renderActions(row.status, row.order)}
                </TableCell>
                <TableCell>
                  {renderActions(row.status, row.order)}
                </TableCell>
                <TableCell>
                  {renderActions(row.status, row.order)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}
