import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AuthProvider from "./components/AuthProvider/AuthProvider";
import "./index.css";
import 'tw-elements';
import { Provider } from "react-redux";
import { store } from "./app/store";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<AuthProvider>
				<App />
				
			</AuthProvider>
		</Provider>
	</React.StrictMode>
);
