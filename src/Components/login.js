import React, { useState} from "react";
import { Link, useHistory} from 'react-router-dom';
import "../App.css";
import "../App";

const Login = (props) => {
     const {database, setDatabase} = props;
     const [id, setId] = useState("");
     const [password, setPassword] = useState("");
    

    const history = useHistory();
    const routeChange = () =>{ 
        let path = `/deposit`; 
        history.push(path);
    }
    const submitHandler = e => {
        e.preventDefault();
        if ((id == database.user[database.loggedUser].id) && 
        (password == database.user[database.loggedUser].password)) {
           routeChange()
            console.log("user exists!");
        } else {
           document.getElementById("printWarn").innerHTML = 
           "An account with that ID or password does not exist. Try again."
        }
    }

        return (
            <div>
                <div className="App">
                    <div className="jumbotron" id="info">
                        <h3 className="display-4">Welcome to Buutti Bank</h3>
                        <p className="lead">Buutti is a global bank with a strong European base. Our 23,000 employees serve
                        around 55.4 million customers, corporate clients and financial institutions in over 40 countries.
                    Our purpose is to empower people to stay a step ahead in life and in business.</p>
                        <hr className="my-4" />
                        <p>Our products include savings, payments, investments, loans and mortgages in most of our retail
                     markets.</p>
                    </div>
                    <div className="jumbotron form-login">
                        <form className="form-inline" onSubmit={submitHandler}>
                            <h3>Authentication</h3>
                            <div className="input-group mb-2 mr-sm-2">
                                <input type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInputId"
                                placeholder="User ID" value={id} onChange={e => setId(e.target.value)}/>
                            </div>
                            <div className="input-group mb-2 mr-sm-2">
                                <input type="text" className="form-control" id="password"
                                 placeholder="Password"  value={password} onChange={e => setPassword(e.target.value)} />
                            </div>
                            <Link to="register" className="btn btn-secondary active btn-login" role="button" aria-pressed="true">Register</Link>
                            <button type="submit" className="btn btn-success ml-3 btn-login" onClick={submitHandler}>Enter</button>
                        </form>
                        <p id="printWarn"></p>
                    </div>
                </div>
            </div>
        );
    }


export default Login;