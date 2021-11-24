/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import List from '../List';

const SideBar = function () {
  const items = [
    {
      title: 'Nyasia Space Center',
      description:
        'Some placeholder content in a paragraph below the heading and date.',
      day: 'Mon',
    },
    {
      title: 'Nyasia Space Center',
      description:
        'Some placeholder content in a paragraph below the heading and date.',
      day: 'Tue',
    },
    {
      title: 'Nyasia Space Center',
      description:
        'Some placeholder content in a paragraph below the heading and date.',
      day: 'Wed',
    },
    {
      title: 'Nyasia Space Center',
      description:
        'Some placeholder content in a paragraph below the heading and date.',
      day: 'Thurs',
    },
    {
      title: 'Nyasia Space Center',
      description:
        'Some placeholder content in a paragraph below the heading and date.',
      day: 'Fri',
    },
    {
      title: 'Nyasia Space Center',
      description:
        'Some placeholder content in a paragraph below the heading and date.',
      day: 'Sat',
    },
    {
      title: 'Nyasia Space Center',
      description:
        'Some placeholder content in a paragraph below the heading and date.',
      day: 'Sun',
    },
    {
      title: 'Nyasia Space Center',
      description:
        'Some placeholder content in a paragraph below the heading and date.',
      day: 'Mon',
    },
    {
      title: 'Nyasia Space Center',
      description:
        'Some placeholder content in a paragraph below the heading and date.',
      day: 'Tue',
    },
    {
      title: 'Nyasia Space Center',
      description:
        'Some placeholder content in a paragraph below the heading and date.',
      day: 'Wed',
    },
    {
      title: 'Nyasia Space Center',
      description:
        'Some placeholder content in a paragraph below the heading and date.',
      day: 'Thurs',
    },
    {
      title: 'Nyasia Space Center',
      description:
        'Some placeholder content in a paragraph below the heading and date.',
      day: 'Fri',
    },
  ];
  return (
    <div
      className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white"
      style={{ width: '492px', backgroundColor: '#F2F2F2' }}
    >
      <a
        href="/"
        className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom"
      >
        <span className="fs-5 fw-semibold">SPACE TRIP</span>
      </a>
      <List items={items} />
    </div>
  );
};

export default SideBar;
