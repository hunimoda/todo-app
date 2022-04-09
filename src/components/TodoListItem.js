import {
	MdCheckBoxOutlineBlank,
	MdCheckBox,
	MdRemoveCircleOutline,
} from "react-icons/md";
import styles from "./TodoListItem.module.css";

const TodoListItem = () => {
	return (
		<div className={styles.todoListItem}>
			<div className={styles.checkbox}>
				<MdCheckBoxOutlineBlank />
				<div className={styles.text}>할 일</div>
			</div>
			<div className={styles.remove}>
				<MdRemoveCircleOutline />
			</div>
		</div>
	);
};

export default TodoListItem;
