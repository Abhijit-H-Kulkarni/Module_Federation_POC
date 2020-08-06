import * as React from "react";

const App3 = React.lazy(() => import('app3/App3'));

const renderLoader = () => <p>Loading</p>;

class App extends React.Component {

  render() {
  return (<div>
    <h1>React Host Container (Module Federation POC)</h1>
    <React.Suspense fallback={renderLoader()}>
       <App3></App3>
    </React.Suspense>
  </div>
  )
  }
};

export default App;
