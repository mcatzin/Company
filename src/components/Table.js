import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
const Table = () => {
  const data = [
    {
      prf: '101',
      name: 'Mario Catzin',
      date: '05/20/20',
      department: 'General',
    },
    { prf: '100', name: 'Jeff Golez', date: '4/22/20', department: 'HR' },
    {
      prf: '99',
      name: 'Zak Hanns',
      date: '4/03/20',
      department: 'Maintenance',
    },
    {
      prf: '98',
      name: 'Dwayne Nash',
      date: '4/02/20',
      department: 'Maintenance',
    },
  ];

  const renderData = (data, index) => {
    return (
      <tr key={index}>
        <td>{data.prf}</td>
        <td>{data.name}</td>
        <td>{data.date}</td>
        <td>{data.department}</td>
      </tr>
    );
  };
  return (
    <div className="container">
      <ReactBootStrap.Table striped bordered hover>
        <thead>
          <tr>
            <th>PRF Number</th>
            <th>Requester's Name</th>
            <th>Date</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>{data.map(renderData)}</tbody>
      </ReactBootStrap.Table>
    </div>
  );
};

export default Table;
