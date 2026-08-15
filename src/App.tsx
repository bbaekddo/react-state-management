import "./App.css";
import * as React from "react";
import {useState} from "react";

type AppProps = {
	value: any;
	onIncrement: () => void;
	onDecrement: () => void;
}

function App({ value, onIncrement, onDecrement }: AppProps): React.ReactElement {
	// 상태 관리
	const [todoValue, setTodoValue] = useState("");

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTodoValue(e.target.value);
	};

	const addTodo = (e:React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setTodoValue("");
	}

	return (
		<div>
			Clicked: {value} times
			<button onClick={onIncrement}>
				+
			</button>
			<button onClick={onDecrement}>
				-
			</button>
			<form onSubmit={addTodo}>
				<input type="text" value={todoValue} onChange={handleChange}/>
				<button type="submit">Add</button>
			</form>
		</div>
	);
}

export default App;
