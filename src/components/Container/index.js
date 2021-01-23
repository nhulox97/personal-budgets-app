import React from 'react';

const Container = ({children}) => (
  <div className="container mx-auto">
    <div className="flex content-center justify-around">{children}</div>
  </div>
);

export default Container;
