import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Login from "./Components/login";
import Register from "./Components/register";
import WelcomePage from "./Components/welcomePage";
import Deposit from "./Components/deposit";
import Withdraw from "./Components/withdraw";
import Alert from "./Components/alertPage";

function App() {

  const dummyUsers = {
    loggedUser: 0,
    user: [
      {
        name: "Rene Orosz",
        password: "1234",
        balance: 300,
        id: 529
      }
    ]

  }
  const [database, seDatabase] = useState(dummyUsers);
  //const [user, setUser] = useState(dummyUser.user);
  return (
    <div>
      <Router>
        <Route exact path="/" render={() => (
          <div>
            <WelcomePage />,
            <Login database={database} seDatabase={seDatabase} />
          </div>
        )} />
        <Route exact path="/register" render={() => (
          <div>
            <WelcomePage />,
            <Register user={database} setUser={seDatabase} />
          </div>
        )} />
        <Route exact path="/deposit" render={() => (
          <div>
            <WelcomePage />,
            <Deposit database={database} seDatabase={seDatabase} />
          </div>
        )} />
        <Route exact path="/withdraw" render={() => (
          <div>
            <WelcomePage />,
            <Withdraw database={database} seDatabase={seDatabase} />
          </div>
        )} />
        <Route exact path="/alertPage" render={() => (
          <div>
            <WelcomePage />,
            <Alert database={database} seDatabase={seDatabase} />
          </div>
        )} />
      </Router>
    </div>
  )
}

export default App;
