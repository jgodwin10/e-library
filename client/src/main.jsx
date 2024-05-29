import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.jsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    <Toaster
      containerStyle={{
        top: 100,
        right: 30,
      }}
      toastOptions={{
        className: "",
        style: {
          border: "1px solid #713200",
          padding: "16px",
        },
      }}
      position="top-right"
    />
  </React.StrictMode>
);
