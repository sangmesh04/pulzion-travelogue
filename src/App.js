//import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Trip from './Trip';
import Tripdetails from './Tripdetails';
import MapT from './Map';
import Media from './Media';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route  path="/dashboard">
            <Dashboard />
          </Route>
          <Route  path="/trips">
            <Trip />
          </Route>
          <Route path="/tripdetail">
            <Tripdetails />
          </Route>
          <Route exact path="/map">
            <MapT />
          </Route>
          <Route exact path="/media">
                <Media />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
