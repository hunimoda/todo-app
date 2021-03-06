import { useState, useRef, useCallback } from "react";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";

const initTodos = [
	{
		id: 1,
		text: "리액트의 기초 알아보기",
		checked: true,
	},
	{
		id: 2,
		text: "컴포넌트 스타일링 해보기",
		checked: true,
	},
	{
		id: 3,
		text: "일정 관리 앱 만들어보기",
		checked: false,
	},
];

const App = () => {
	const [todos, setTodos] = useState(initTodos);
	const nextId = useRef(initTodos.length + 1);

	const onInsert = useCallback(
		(text) =>
			setTodos((prevTodos) => [
				...prevTodos,
				{
					id: nextId.current++,
					text,
					checked: false,
				},
			]),
		[]
	);

	const onRemove = useCallback(
		(id) => setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id)),
		[]
	);

	const onToggle = useCallback(
		(id) =>
			setTodos((prevTodos) =>
				prevTodos.map((todo) =>
					todo.id === id ? { ...todo, checked: !todo.checked } : todo
				)
			),
		[]
	);

	return (
		<TodoTemplate>
			<TodoInsert onInsert={onInsert} />
			<TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
		</TodoTemplate>
	);
};

export default App;
