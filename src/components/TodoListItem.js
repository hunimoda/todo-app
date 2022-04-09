import {
	MdCheckBoxOutlineBlank,
	MdCheckBox,
	MdRemoveCircleOutline,
} from "react-icons/md";
import styles from "./TodoListItem.module.css";

const TodoListItem = ({ todo, onRemove }) => {
	const { id, text, checked } = todo;
	const checkboxStyle = styles.checkbox + (checked ? " " + styles.checked : "");

	return (
		<div className={styles.todoListItem}>
			<div className={checkboxStyle}>
				{checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
				<div className={styles.text}>{text}</div>
			</div>
			<div className={styles.remove} onClick={() => onRemove(id)}>
				<MdRemoveCircleOutline />
			</div>
		</div>
	);
};

export default TodoListItem;
