import React from 'react';

const CardGrid = ({ children }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
    {children}
  </div>
);

export default CardGrid;

