import React from 'react';
import Counter from '../components/Counter';

const Dashboardpage = () => {
  console.log('Dashboard page render');
  return (
    <div>
      <h1>Dashboard page</h1>
      <Counter></Counter>
      <li>Dashboadr 1</li>
      <li>Dashboadr 2</li>
      <li>Dashboadr 3</li>
      <li>Dashboadr 4</li>
    </div>
  );
};

export default Dashboardpage;
