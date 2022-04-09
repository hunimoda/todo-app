import TodoListItem from "./TodoListItem";
import styles from "./TodoList.module.css";

const TodoList = () => {
	return (
		<div className={styles.todoList}>
			<TodoListItem />
			<TodoListItem />
			<TodoListItem />
		</div>
	);
};

export default TodoList;
