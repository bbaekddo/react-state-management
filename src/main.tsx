import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createStore } from "redux";
import rootReducer from "./reducers";

const rootElement = document.getElementById("root");
const store = createStore(rootReducer);

store.dispatch({
	type: "ADD_TODO",
	text: "test",
});

if (rootElement) {
	const root = createRoot(rootElement);
	const render = () => {
		root.render(
			<StrictMode>
				<App
					value={store.getState().counter}
					onIncrement={() => store.dispatch({ type: "increment" })}
					onDecrement={() => store.dispatch({ type: "decrement" })}
				/>
			</StrictMode>,
		);
	};

	console.log(store.getState());

	store.subscribe(render);
	render();
} else {
	console.error("Root 요소를 찾을 수 없습니다.");
}
