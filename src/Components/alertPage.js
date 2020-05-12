import React, { useState } from "react";
import Alert from 'react-bootstrap/Alert';
import { useHistory } from 'react-router-dom';

const AlertPage = (props) => {
  const [show, setShow] = useState(true);
  const { database, setDatabase } = props;
  const history = useHistory();

  const routeChange = () => {
    let path = `/`;
    history.push(path);
  }

  return (
    <Alert show={show} variant="success">
      <Alert.Heading>Great, {database.user[database.loggedUser].name}!
           You now have an account with a balance of {database.user[database.loggedUser].balance}</Alert.Heading>
      <p>We're happy to have you as a customer, and we want to ensure that your money is safe with us.</p>
      <p>Your account is now created. Account id: {database.user[database.loggedUser].id} balance Store your account ID in a safe place.</p>
      <hr />
      <div className="d-flex justify-content-end">
        <button className="btn btn-success ml-3 btn-style"
          onClick={routeChange} variant="outline-success">
          LogIn
            </button>
      </div>
    </Alert>
  );
}

export default AlertPage;