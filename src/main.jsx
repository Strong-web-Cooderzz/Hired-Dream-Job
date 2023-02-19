import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AuthProvider from "./components/AuthProvider/AuthProvider";
import "./index.css";
import 'tw-elements';

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
			<AuthProvider>
				<App />
				
			</AuthProvider>
	</React.StrictMode>
);
