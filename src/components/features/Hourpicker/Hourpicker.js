import 'date-fns';
import React from 'react';
import {
  KeyboardTimePicker,
} from '@material-ui/pickers';


export default function Tables() {

  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
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
  );
}
