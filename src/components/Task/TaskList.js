import React from 'react';

const TaskList = (props) => {
  return props.taskList.map((val, idx) => {
    let quantity = `quantity-${idx}`,
      supplier = `supplier-${idx}`,
      description = `description-${idx}`,
      taxable = `taxable-${idx}`,
      unitCost = `unitCost-${idx}`,
      itemStatus = `itemStatus-${idx}`;
    return (
      <tr key={val.index}>
        <td>
          <input
            type="text"
            name="quantity"
            data-id={idx}
            id={quantity}
            className="form-control"
          />
        </td>
        <td>
          <input
            type="text"
            name="supplier"
            data-id={idx}
            id={supplier}
            className="form-control"
          />
        </td>
        <td>
          <input
            type="text"
            name="description"
            data-id={idx}
            id={description}
            className="form-control"
          />
        </td>
        <td>
          <input
            type="text"
            name="taxable"
            data-id={idx}
            id={taxable}
            className="form-control"
          />
        </td>
        <td>
          <input
            type="text"
            name="unitCost"
            data-id={idx}
            id={unitCost}
            className="form-control"
          />
        </td>
        <td>
          <select
            name="itemStatus"
            id={itemStatus}
            data-id={idx}
            className="form-control"
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Pending</option>
            <option value="Hold">Hold</option>
          </select>
        </td>

        <td>
          {idx === 0 ? (
            <button
              onClick={() => props.add()}
              type="button"
              className="btn btn-primary text-center"
            >
              <i className="fa fa-plus-circle" aria-hidden="true"></i>
            </button>
          ) : (
            <button
              className="btn btn-danger"
              onClick={() => props.delete(val)}
            >
              <i className="fa fa-minus" aria-hidden="true"></i>
            </button>
          )}
        </td>
      </tr>
    );
  });
};

export default TaskList;
