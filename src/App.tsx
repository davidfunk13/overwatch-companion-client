import logo from './logo.svg';
import './App.css';
import LoginButton from './Components/LoginButton';
import Profile from './Components/Profile';
import LogoutButton from './Components/LogoutButton';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Auth from './Components/Auth';

function App() {
  return (
    <div className="App">
      <header >
        <LoginButton />
        <LogoutButton />
      </header>
      <Router>
        <Switch>
          <Route exact path={"/"} component={Profile} />
          <Route exact path={"/auth"} component={Auth} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
