import React from 'react';
import TaskList from './TaskList';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';

class TaskForm extends React.Component {
  state = {
    taskList: [
      {
        index: Math.random(),
        quantity: '',
        supplier: '',
        description: '',
        taxable: '',
        unitCost: '',
        itemStatus: '',
      },
    ],
    requester: '',
    date: '',
    department: '',
    supervisor: '',
    vendor: '',
    comment: '',
  };

  handleChange = (e) => {
    if (
      [
        'quantity',
        'supplier',
        'description',
        'taxable',
        'unitCost',
        'itemStatus',
      ].includes(e.target.name)
    ) {
      let taskList = [...this.state.taskList];
      taskList[e.target.dataset.id][e.target.name] = e.target.value;
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  addNewRow = (e) => {
    this.setState((prevState) => ({
      taskList: [
        ...prevState.taskList,
        {
          index: Math.random(),
          quantity: '',
          supplier: '',
          description: '',
          taxable: '',
          unitCost: '',
          itemStatus: '',
        },
      ],
    }));
  };

  deleteRow = (index) => {
    this.setState({
      taskList: this.state.taskList.filter((s, sindex) => index !== sindex),
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (
      this.state.date === '' ||
      this.state.requester === '' ||
      this.state.department === '' ||
      this.state.supervisor === '' ||
      this.state.vendor === ''
    ) {
      NotificationManager.warning(
        "Please fill up required field. Please check Date and Request's name"
      );
      return false;
    }
    for (var i = 0; i < this.state.taskList.length; i++) {
      if (
        this.state.taskList[i].quantity === '' ||
        this.state.taskList[i].supplier === '' ||
        this.state.taskList[i].description === ''
      ) {
        NotificationManager.warning('Please fill up required fields');
        return false;
      }
    }
  };
  clickOnDelete(record) {
    this.setState({
      taskList: this.state.taskList.filter((r) => r !== record),
    });
  }

  render() {
    let { taskList } = this.state;
    return (
      <div className="content">
        <NotificationContainer />
        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <div className="row" style={{ marginTop: 20 }}>
            {/* <div className="col-sm-1"></div> */}
            <div className="col-sm-12">
              <div className="card">
                <div className="card-header text-center">Requisition Form</div>
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
                        />
                      </div>
                    </div>
                  </div>
                  <table className="table table-responsive">
                    <thead>
                      <tr>
                        <th className="required">Quantity</th>
                        <th className="required">Supplier</th>
                        <th className="required">Description</th>
                        <th>Taxable</th>
                        <th>Unit Cost</th>
                        <th>Item Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <TaskList
                        add={this.addNewRow}
                        delete={this.clickOnDelete.bind(this)}
                        taskList={taskList}
                      />
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan="4">
                          <button
                            onClick={this.addNewRow}
                            type="button"
                            className="btn btn-primary text-center"
                          >
                            <i
                              className="fa fa-plus-circle"
                              aria-hidden="true"
                            ></i>
                          </button>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
                <div className="card-footer text-center">
                  <button
                    type="submit"
                    className="btn btn-primary text=-center"
                  >
                    Submit
                  </button>{' '}
                </div>
              </div>
            </div>
            {/* <div className="col-sm-1"></div> */}
          </div>
        </form>
      </div>
    );
  }
}

export default TaskForm;
