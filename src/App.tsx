import logo from './logo.svg';
import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <header >
        <LoginButton />
        <LogoutButton />
        <Profile />
      </header>
      {/* <Router>
        <Switch>
        <Route exact path={"/"} component={Profile} />
        <Route exact path={"/auth"} component={Auth} />
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
