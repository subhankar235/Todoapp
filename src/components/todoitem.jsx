function TodoItem1({todoName,todoDate,onDeleteClick}) {
  
  return(
  <div className="container text-center">
    <div className="row kg-row">
     <div className="col-5">{todoName} </div>

          <div className="col-3">{todoDate}</div>

          <div className="col-1">
            <button type="button" className="btn btn-danger kg-button"
            onClick={()=>onDeleteClick(todoName)}>
              Delete
            </button>
          </div>
    </div>
  </div>
  );
}

export default TodoItem1;
