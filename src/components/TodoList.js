import TodoListItem from "./TodoListItem";
import styles from "./TodoList.module.css";

const TodoList = ({ todos }) => {
	return (
		<div className={styles.todoList}>
			{todos.map((todo) => (
				<TodoListItem todo={todo} key={todo.id} />
			))}
		</div>
	);
};

export default TodoList;
