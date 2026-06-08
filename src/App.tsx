import "./App.css";
import * as React from "react";

type AppProps = {
	value: any;
	onIncrement: () => void;
	onDecrement: () => void;
}

function App({ value, onIncrement, onDecrement }: AppProps): React.ReactElement {
	return (
		<div>
			Clicked: {value} times
			<button onClick={onIncrement}>
				+
			</button>
			<button onClick={onDecrement}>
				-
			</button>
		</div>
	);
}

export default App;
