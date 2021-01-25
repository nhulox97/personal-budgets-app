import React from 'react';

const Container = ({children}) => (
  <div className="flex flex-col content-center justify-around container mx-auto p-6">
    {children}
  </div>
);

export default Container;
