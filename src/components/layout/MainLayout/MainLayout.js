import React from 'react';
import PropTypes from 'prop-types';
import PageNav from '../PageNav/PageNav';


const MainLayout = (props) => (
  <div>
    {props.children}
    <PageNav/>
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;