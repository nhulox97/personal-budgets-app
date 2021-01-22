import React from 'react';

const Container = ({children}) => (
  <div className="container content-center mx-auto">
   <div className="flex justify-around">{children}</div>
  </div>
);

export default Container;
