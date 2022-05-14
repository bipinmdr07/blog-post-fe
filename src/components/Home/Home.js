import React from 'react';

import { TopNav } from 'components/common';

import HomeRouter from './HomeRouter';

const Home = () => {
  return (
    <>
      <div className="d-flex">
        <div className="top-bar">
          <TopNav />
        </div>
      </div>
      <div>
        <HomeRouter />
      </div>
    </>
  );
};

export default Home;
