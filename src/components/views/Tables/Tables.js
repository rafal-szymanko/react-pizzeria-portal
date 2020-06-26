import React from 'react';
import styles from './Tables.module.scss';
import {Link} from 'react-router-dom';

const id = 'abc123';

const Tables = () => (
  <div className={styles.component}>
    <h2>Tables View</h2>
    <p>{id}</p>
    <div>
      <Link to={`tables/booking/new`}>New booking</Link>
      <Link to={`tables/booking/${id}`}>Currently Bookings</Link>
      <Link to={`tables/events/new`}>New events</Link>
      <Link to={`tables/events/${id}`}>Currently events</Link>
    </div>

  </div>
);

export default Tables;