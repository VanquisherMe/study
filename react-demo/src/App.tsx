import React, { FC } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
  useRouteMatch,
} from "react-router-dom";
import Awesome from "./awesome";
import UseStateExample from './hooks-examples/use-state'


const App: FC = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Awesome />
      </Route>
      <Route path="/hooks">
        <Switch>
          <Route exact path="/hooks/use-state">
            <UseStateExample />
          </Route>
        </Switch>
      </Route>
    </Switch>
  </Router>
);

export default App;
