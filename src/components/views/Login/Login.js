import React from 'react';
import styles from './Login.module.scss';
import {Link} from 'react-router-dom';
import { Input, Button, Grid} from '@material-ui/core';



const Login = () => (
  <div className={styles.component}>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          <Grid item>
            <Input placeholder="username..."></Input>
          </Grid>
          <Grid item>
            <Input placeholder="password..."></Input>
          </Grid>
          <Grid item>
            <Link to={`${process.env.PUBLIC_URL}/`}>
              <Button variant="contained" color="primary">Sign in</Button>
            </Link>          
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </div>
);



export default Login;