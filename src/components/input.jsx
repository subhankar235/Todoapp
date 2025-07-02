import { useState } from "react";
function Input({ onNewItem }) {
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleDAddButtonClicked = (event) => {
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };
  return (
    <div className="container ">
      <div className="row kg-row">
        <div className="col-5">
          <input
            type="text"
            placeholder="enter todo here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>

        <div className="col-3">
          <input type="date" value={dueDate} onChange={handleDateChange} />
        </div>

        <div className="col-1">
          <button
            type="button"
            className="btn btn-primary kg-button"
            onClick={handleDAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Input;
