import TodoItem1 from "./components/todoitem";
import styles from "./TodoItems.module.css"

const TodoItems = ({ todoItems ,onDeleteClick}) => {
  return (
    <div className={styles.itemContainer}>
      {todoItems.map((item, index) => (
        <TodoItem1
          key={index}
          todoDate={item.duedate}
          todoName={item.name}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
};

export default TodoItems;
