/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';

const CardContent = function ({ data, className }) {
  const { title, description, day } = data;
  return (
    <div className={className}>
      <div className="d-flex w-100 align-items-center justify-content-between">
        <strong className="mb-1">{title}</strong>
        <small className="text-muted">{day}</small>
      </div>
      <div className="col-10 mb-1 small">{description}</div>
    </div>
  );
};

const CardFooter = function ({ className }) {
  return (
    <button type="button" className={className}>
      SEE ALL FLIGHTS
    </button>
  );
};

const FlightCardFooter = styled(CardFooter)`
  height: 48px;
  width: 100%;
  background: #333333;
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #fafafb;
`;

const FlightCardContentWrapper = styled(CardContent)`
  height: 152px;
  width: 100%;
`;

const FlightCardContent = function ({ data }) {
  return <FlightCardContentWrapper data={data} />;
};

const ListItem = function ({ data, className }) {
  return (
    <div
      href="#"
      className={`list-group-item list-group-item-action lh-tight ${className}`}
    >
      <FlightCardContent data={data} />
      <FlightCardFooter />
    </div>
  );
};

const FlightCard = styled(ListItem)`
  width: 400px;
  height: 200px;
  border-radius: 2px;
  background: #ffffff;
  margin: 32px 40px 32px 40px;
  padding: 0px;
`;

export default FlightCard;
