import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Todos from "./views/Todos";

const App = () => {
  return (
    <Router>
      <Route exact path="/"><Todos /></Route>
    </Router>
  );
};

export default App;