import React, { FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Awesome from "./awesome";
import UseStateExample01 from "./hooks-examples/UseState-Example-01";
import UseEffectExample01 from "./hooks-examples/UseEffect-Example-01";
import UseEffectExample02 from "./hooks-examples/UseEffect-Example-02";
import UseEffectExample03 from "./hooks-examples/UseEffect-Example-03";
import UseContextExample01 from "./hooks-examples/UseContext-Example-01";
import UseReducerExample01 from "./hooks-examples/UseReducer-Example-01";
import UseReducerExample02 from "./hooks-examples/UseReducer-Example-02";
import UseMemoExample01 from "./hooks-examples/UseMemo-Example-01";
import UseMemoExample02 from "./hooks-examples/UseMemo-Example-02";
import UseCallbackExample01 from "./hooks-examples/UseCallback-Example-01";
import LifecycleExample01 from "./class-examples/lifecycle-example-01";
import SymbolExample from "./es6-examples/Symbol-example";

import styles from "./App.module.less";

const menu = [
  {
    path: "/",
    componentName: Awesome,
    exact: true,
  },
  {
    path: "/hooks",
    componentName: Awesome,
    exact: true,
  },
];

const App: FC = () => (
  <div className={styles.App}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Awesome />
        </Route>
        <Route path="/hooks">
          <Switch>
            <Route exact path="/hooks/use-state-01">
              <UseStateExample01 />
            </Route>
            <Route exact path="/hooks/use-effect-01">
              <UseEffectExample01 />
            </Route>
            <Route exact path="/hooks/use-effect-02">
              <UseEffectExample02 />
            </Route>
            <Route exact path="/hooks/use-effect-03">
              <UseEffectExample03 />
            </Route>
            <Route exact path="/hooks/use-context-01">
              <UseContextExample01 />
            </Route>
            <Route exact path="/hooks/use-reducer-01">
              <UseReducerExample01 />
            </Route>
            <Route exact path="/hooks/use-reducer-02">
              <UseReducerExample02 />
            </Route>
            <Route exact path="/hooks/use-memo-01">
              <UseMemoExample01 />
            </Route>
            <Route exact path="/hooks/use-memo-02">
              <UseMemoExample02 />
            </Route>
            <Route exact path="/hooks/use-callback-01">
              <UseCallbackExample01 />
            </Route>
          </Switch>
        </Route>
        <Route path="/class">
          <Switch>
            <Route exact path="/class/lifecycle-01">
              <LifecycleExample01 />
            </Route>
          </Switch>
        </Route>
        <Route path="/es6">
          <Switch>
            <Route exact path="/es6/Symbol">
              <SymbolExample />
            </Route>
          </Switch>
        </Route>
      </Switch>
    </Router>
  </div>
);

export default App;
