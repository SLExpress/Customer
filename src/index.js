import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import logger from "./services/logService";
import "./index.css";
import App from "./App";
import { ProductProvider } from "./context";
import { TableProvider } from "./context/tableContext";

// reactbootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// mdb React
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
// Bootstrap
import "bootstrap/dist/css/bootstrap.css";
// Semantic UI
// import "semantic-ui-css/components/menu.min.css";
// import "semantic-ui-css/components/grid.min.css";
// import "semantic-ui-css/components/table.min.css";
// import "semantic-ui-css/components/input.min.css";
// import "semantic-ui-css/components/icon.min.css";
import "semantic-ui-css/semantic.min.css";

// Sentry Log Service
logger.init();

ReactDOM.render(
  <ProductProvider>
    <TableProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TableProvider>
  </ProductProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
