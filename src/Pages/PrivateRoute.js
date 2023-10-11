import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ isAuthenticated, ...props }) => {
  if (isAuthenticated) {
    return <Route {...props} />;
  } else {
    return <Navigate to="/login" />;
  }
};

const mapStateToProps = state => ({
  isAuthenticated: state.isAuthenticated // Assuming isAuthenticated is in your Redux state
});

export default connect(mapStateToProps)(PrivateRoute);
