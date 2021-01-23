import React from "react";
import Router from "./services/Router";
import env from "react-dotenv";

console.log(env.API_URL);
const App = () => <Router />;

export default App;
