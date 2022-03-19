import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { store } from "./Redux/Store";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <StrictMode>
        <App />
      </StrictMode>
    </Provider>
  </BrowserRouter>,
  rootElement
);
