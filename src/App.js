import "./App.css";
import Inbox from "./components/Inbox";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import * as module from "https://t2c-stage.solutionsbytext.com/js/interactions/module.js";
module.loadJSFiles();

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route
            path="/inbox"
            element={
              <Inbox
                accountId="271759e9-ca4f-4835-be61-0fe38d051559"
                groupId="425fa869-6116-4e0c-af1c-0c764e78bc70"
                orgunitId="b85c02b4-c3de-4c7f-8717-97aa551652bb"
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
