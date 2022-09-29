import React from 'react';
import Nav from '../header/Nav';
import { Outlet } from 'react-router-dom';
const SharedLayout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default SharedLayout;
