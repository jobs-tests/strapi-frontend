import React from 'react';
import styled from 'styled-components';

const Flight = function ({ flight, className }) {
  return <div className={className}>A for Apple </div>;
};

const FlightCard = styled(Flight)`
  width: 400px;
  height: 200px;
  border-radius: 2px;
  background: #ffffff;
`;

export default Flight;
