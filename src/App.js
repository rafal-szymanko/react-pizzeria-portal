import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { StylesProvider} from '@material-ui/core/styles';

import MainLayout from '../src/components/layout/MainLayout/MainLayout';
import Dashboard from '../src/components/views/Dashboard/Dashboard';
import Kitchen from '../src/components/views/Kitchen/Kitchen';
import Login from '../src/components/views/Login/Login';
import Tables from '../src/components/views/Tables/Tables';
// import TablesBooking from './components/views/TablesBoking/TablesBooking';
// import TablesEvent from './components/views/TablesEvent/TablesEvent';
import Waiter from '../src/components/views/Waiter/Waiter';
// import WaiterOrder from '../src/components/views/Waiter/WaiterOrder';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2B4C6F',
    },
    // secondary: {
    //   main: '#11cb5f',
    // },
  },
});

const routes = [
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/',
    component: Dashboard,
  },
  {
    path: '/kitchen',
    component: Kitchen,
  },
  {
    path: '/tables',
    component: Tables,
  },
  {
    path: '/waiter',
    component: Waiter,
  },
];


function App() {


  return (
    <BrowserRouter>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <MainLayout>
            <Switch>
              {routes.map(route => (
                <Route key={route.path} exact path={`${process.env.PUBLIC_URL}${route.path}`} component={route.component} />
              ))}
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  );
}

export default App;
