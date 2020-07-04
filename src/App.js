import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { StylesProvider} from '@material-ui/core/styles';

import MainLayout from '../src/components/layout/MainLayout/MainLayout';
import Dashboard from '../src/components/views/Dashboard/Dashboard';
import Kitchen from '../src/components/views/Kitchen/Kitchen';
import Login from '../src/components/views/Login/Login';
import Tables from '../src/components/views/Tables/Tables';
import TablesNewBooking from './components/views/Tables/TablesNewBooking/TablesNewBooking';
import TablesCurrentlyBooking from './components/views/Tables/TablesCurrentlyBooking/TablesCurrentlyBooking';
import TablesNewEvent from './components/views/Tables/TablesNewEvent/TablesNewEvent';
import TablesCurrentlyEvent from './components/views/Tables/TablesCurrentlyEvent/TablesCurrentlyEvent';
import WaiterContainer from '../src/components/views/Waiter/WaiterContainer';
import WaiterNewOrder from './components/views/Waiter/WaiterNewOrder/WaiterNewOrder';
import WaiterCurrentlyOrder from './components/views/Waiter/WaiterCurrentlyOrder/WaiterCurrentlyOrder';
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

const id = 'abc123';

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
    path: '/tables/booking/new',
    component: TablesNewBooking,
  },
  {
    path: `/tables/booking/${id}`,
    component: TablesCurrentlyBooking,
  },
  {
    path: '/tables/events/new',
    component: TablesNewEvent,
  },
  {
    path: `/tables/events/${id}`,
    component: TablesCurrentlyEvent,
  },
  {
    path: '/waiter',
    component: WaiterContainer,
  },
  {
    path: '/waiter/order/new',
    component: WaiterNewOrder,
  },
  {
    path: `/waiter/order/${id}`,
    component: WaiterCurrentlyOrder,
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
