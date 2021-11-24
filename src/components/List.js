/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import FlightCard from './ListItem';
// import ListItem from './ListItem';

const List = function ({ items }) {
  const listItems = items.map((item) => {
    return <FlightCard data={item} />;
  });

  return (
    <div className="list-group list-group-flush border-bottom scrollarea">
      {listItems}
    </div>
  );
};

export default List;
