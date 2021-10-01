import React, {useEffect, useState} from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from '../components/Login';
import Signup from '../components/SignUp';
import NavBar from '../components/NavBar';
import ShowContainer from '../components/ShowContainer';
import '../index.css';

function App() {
  const [shows, setShows] = useState({})
  const [user, setUser] = useState({})

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((data) =>{
          console.log("setting user to ", data);
          setUser(data)
        });
      }
    });
  }, []);

  return (
    <Router>
      <div>
        <NavBar user={user} setUser={setUser} />
      </div>
      <hr/>
      <Switch>
        <Route exact path="/">
          Blockflix
        </Route>
        <Route path="/shows/:id">
          <ShowContainer user={user} shows={shows} setShows={setShows} />
        </Route>
        <Route exact path="/shows">
          <ShowContainer user={user} shows={shows} setShows={setShows} />
        </Route>
        <Route exact path="/signup">
          <Signup setUser={setUser} />
        </Route>
        <Route exact path="/login">
          <Login setUser={setUser} />
        </Route>
      </Switch>
    </Router>
  );
}



export default App;
