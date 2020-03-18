import SwapiService from "./services/swapi-service";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";

const connect = new SwapiService();
connect.getAllStarships().then((res) => console.log(res));

ReactDOM.render(<App/>, document.getElementById('root'));