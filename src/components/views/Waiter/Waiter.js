import React from 'react';
import styles from './Waiter.module.scss';
import {Link} from 'react-router-dom';

const id = 'abc123';


const Waiter = () => (
  <div className={styles.component}>
    <h2>Waiter View</h2>
    <p>{id}</p>
    <div>
      <Link to={`waiter/order/new`}>New order</Link>
      <Link to={`waiter/order/${id}`}>Currently orders</Link>
    </div>
  </div>
);

export default Waiter;