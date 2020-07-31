import * as React from "react";
import LocalButton from "./Button";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import RemoteRoutes from "app1/routes";

const App1Button = React.lazy(() => import('app1/Button1'));

const App2Button = React.lazy(() => import('app2/Button2'));

// const routes = [...RemoteRoutes];

const renderLoader = () => <p>Loading</p>;

class App extends React.Component {

  render() {
  return (<div>
    <h2>App 3</h2>
    <LocalButton /><br/><br/>
    <React.Suspense fallback={renderLoader()}>
      <App1Button></App1Button><br/><br/>
      <App2Button></App2Button><br/><br/>
      <Router>
          <h2>Pre-Loading</h2>
          <Link to='/comp1'>Component 1</Link><br/><br/>
          <Link to='/comp2'>Component 2</Link>
          <Switch>
              {
                RemoteRoutes.map((route:any) => <Route key={route.path} path={route.path} component={route.component}/>)
              }
          </Switch>
      </Router>
    </React.Suspense><br/><br/>
  </div>
  )
  }
};

export default App;
