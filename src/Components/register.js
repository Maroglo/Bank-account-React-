import React, {useState} from "react";
import { Link, useHistory } from 'react-router-dom';
import "./alertPage";
import "../App.css";

function Register(props) {
    const {user, setUser } = props;
    const [name, setName] = useState("");
    const [deposit, setDeposit] = useState("");
    const [password, setPassword] = useState("");
    const [id, setId] = useState(Math.floor(Math.random() * 1000));
    let new_user = {};

    const history = useHistory();
    const routeChange = () =>{ 
        let path = `/alertPage`; 
        history.push(path);
    }

    const submitHandler = e => {
        e.preventDefault();
        if (deposit <= 10) {
            console.log("small amount")
            document.getElementById("printWarn").innerHTML = 
            "Unfortunately we can't open an account for such a small amount."
            // console.log("user", user);
            // console.log("the user", user["user"]);
        } else {
            routeChange();
            new_user.id = id;
            new_user.name = name;
            new_user.password = password;
            new_user.balance = Number(deposit);
            //setUser(user => [...user, {user: new_user}]);
            user["user"].push(new_user);
            user.loggedUser = user["user"].length - 1; 
            console.log(new_user);
            console.log("user", user);
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
                    <form className="form-inline">
                        <h3>Register</h3>
                        <div className="input-group mb-2 mr-sm-2">
                            <input className="form-control mb-2 mr-sm-2" id="name" 
                            placeholder="Full name" required  value={name} onChange={e => setName(e.target.value)}/>
                        </div>
                        <div className="input-group mb-2 mr-sm-2">
                            <input type="text" className="form-control" id="password"
                             placeholder="Password" required  value={password} onChange={e => setPassword(e.target.value)} />
                        </div>
                        <div className="input-group mb-2 mr-sm-2">
                            <input type="text" className="form-control" id="deposit" 
                            placeholder="Initial cash deposit" value={deposit} onChange={e => setDeposit(e.target.value)} />
                        </div>
                        <Link to="/" className="btn btn-secondary active btn-login" role="button"
                         aria-pressed="true">Cancel</Link>
                        <button type="submit" className="btn btn-success ml-3 btn-login"
                        onClick={submitHandler}>Submit</button>
                    </form>
                    <p id="printWarn"></p>
                </div>
            </div>
        </div>
    )

}

export default Register;