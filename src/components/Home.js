import React from 'react';

import './Home.css';
import CardForm from './Card/CardForm';
const Home = () => {
  const user = {
    name: 'Mario Catzin',
    pending: '8',
    approved: '4',
  };
  const pendingData = [
    {
      prf: '67',
      name: 'Mario Catzin',
      date: '5/3/20',
      department: 'General',
      status: 'Pending',
    },
    {
      prf: '55',
      name: 'Mario Catzin',
      date: '5/1/20',
      department: 'General',
      status: 'Pending',
    },
    {
      prf: '46',
      name: 'Mario Catzin',
      date: '4/23/20',
      department: 'General',
      status: 'Hold',
    },
    {
      prf: '42',
      name: 'Mario Catzin',
      date: '4/3/20',
      department: 'General',
      status: 'Pending',
    },
    {
      prf: '37',
      name: 'Mario Catzin',
      date: '4/2/20',
      department: 'General',
      status: 'Pending',
    },
    {
      prf: '34',
      name: 'Mario Catzin',
      date: '4/1/20',
      department: 'General',
      status: 'Pending',
    },
    {
      prf: '31',
      name: 'Mario Catzin',
      date: '3/23/20',
      department: 'General',
      status: 'Pending',
    },
  ];
  const approvedData = [
    {
      prf: '23',
      name: 'Mario Catzin',
      date: '5/3/20',
      department: 'General',
      status: 'Completed',
    },
    {
      prf: '22',
      name: 'Mario Catzin',
      date: '5/1/20',
      department: 'General',
      status: 'Completd',
    },
    {
      prf: '18',
      name: 'Mario Catzin',
      date: '4/23/20',
      department: 'General',
      status: 'Completed',
    },
    {
      prf: '17',
      name: 'Mario Catzin',
      date: '4/3/20',
      department: 'General',
      status: 'Completed',
    },
  ];
  return (
    <div className="container">
      <div className="text-center my-2 py-3 display-4">
        <p>Welcome</p>
        <strong className="welcome pb-2">{user.name}</strong>
      </div>
      <div className="container card-container display-4">
        <div>
          <CardForm
            title={'Request Pending'}
            status={user.pending}
            tableData={pendingData}
          />
        </div>
        <div>
          <CardForm
            title={'Approved'}
            status={user.approved}
            tableData={approvedData}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
