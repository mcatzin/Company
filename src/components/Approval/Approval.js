import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import { NotificationContainer } from 'react-notifications';

const requestData = [
  {
    qty: '3',
    supplier: 'ABC',
    description: 'Training',
    taxable: 'No',
    unitCost: '$42.00',
    status: 'Pending',
  },
  {
    qty: '5',
    supplier: 'DEF',
    description: 'Maintenance Support',
    taxable: 'No',
    unitCost: '$42.00',
    status: 'Pending',
  },
  {
    qty: '6',
    supplier: 'ABC',
    description: 'Tool making for fixtures',
    taxable: 'No',
    unitCost: '$60.00',
    status: 'Pending',
  },
];

const renderData = (requestData, index) => {
  return (
    <tr key={index}>
      <td>{requestData.qty}</td>
      <td>{requestData.supplier}</td>
      <td>{requestData.description}</td>
      <td>{requestData.taxable}</td>
      <td>{requestData.unitCost}</td>
      <td>{requestData.status}</td>
    </tr>
  );
};

class Approval extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="content">
          <NotificationContainer />
          <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
            <div className="row" style={{ marginTop: 20 }}>
              {/* <div className="col-sm-1"></div> */}
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-header text-center">
                    Requisition Form
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="form-group">
                          <label className="required">Date</label>
                          <input
                            type="date"
                            name="date"
                            id="date"
                            className="form-control"
                            placeholder="Enter Date"
                            value={'5/20/2020'}
                          />
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="form-group">
                          <label className="required">Requester</label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            className="form-control"
                            placeholder="Enter Full Name"
                            value="Zak Hanns"
                          />
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="form-group">
                          <label className="required">Department</label>
                          <input
                            type="text"
                            name="department"
                            id="department"
                            className="form-control"
                            placeholder="Enter Department Name"
                            value="Quartz"
                          />
                        </div>
                      </div>
                    </div>
                    {/* row 2 */}
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="form-group">
                          <label className="required">Supervisor</label>
                          <input
                            type="text"
                            name="supervisor"
                            id="supervisor"
                            className="form-control"
                            placeholder="Enter Supervisor's Name"
                            value="Julio Cedillo"
                          />
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="form-group">
                          <label className="required">Vendor</label>
                          <input
                            type="text"
                            name="vendor"
                            id="vendor"
                            className="form-control"
                            placeholder="Enter Vendor Name"
                            value="Abc"
                          />
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="form-group">
                          <label>Comments</label>
                          <input
                            type="text"
                            name="comments"
                            id="comments"
                            className="form-control"
                            placeholder="Enter Comments"
                            value="ASAP!"
                          />
                        </div>
                      </div>
                    </div>
                    <ReactBootStrap.Table striped bordered hover>
                      <thead>
                        <tr>
                          <th>Qauntities</th>
                          <th>Supplier Name</th>
                          <th>Description</th>
                          <th>Taxable</th>
                          <th>Unit Cost</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>{requestData.map(renderData)}</tbody>
                    </ReactBootStrap.Table>
                    <div>
                      <ReactBootStrap.DropdownButton
                        id="dropdown-basic-button"
                        title="Status"
                      >
                        <ReactBootStrap.Dropdown.Item href="#/action-1">
                          Approved
                        </ReactBootStrap.Dropdown.Item>
                        <ReactBootStrap.Dropdown.Item href="#/action-2">
                          Hold
                        </ReactBootStrap.Dropdown.Item>
                        <ReactBootStrap.Dropdown.Item href="#/action-3">
                          Rejected
                        </ReactBootStrap.Dropdown.Item>
                      </ReactBootStrap.DropdownButton>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="col-sm-1"></div> */}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Approval;
