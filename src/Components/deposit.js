import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "../App.css";
import "./login";
import "./withdraw";

function DepositPage(props) {

    const {database, setDatabase} = props;
    const [balance, setBalance] = useState("");
    const [amount, setAmount] = useState("");
    
    const submitHandler = e => {
        e.preventDefault()
        database.user[0].balance += Number(amount);
        let currentBalance = database.user[0].balance;
        setBalance(currentBalance);
        setAmount("Amount")
        
    }
    return(
        <div>
        <div className="jumbotron jumbDep">
            <ul className="nav nav-pills nav-fill nav-style">
                <li className="nav-item">
                    <Link to="deposit" className="nav-link active">Deposit</Link>
                </li>
                <li className="nav-item">
                    <Link to="withdraw" className="nav-link">Withdraw</Link>
                </li>
                <li className="nav-item">
                    <Link to="withdraw" className="nav-link disabled">Transfer funds</Link>
                </li>
                <li className="nav-item">
                    <Link to="withdraw" className="nav-link disabled">Request funds</Link>
                </li>
                <li className="nav-item">
                    <button className="btn btn-warning disabled">
                    Total founds: {database.user[database.loggedUser].balance}</button>
                </li>   
            </ul>
                <div className="input-group mb-2 mr-sm-2 deposPage">
                <h5>Hello {database.user[database.loggedUser].name}. How much would you like to deposit into your account?</h5>
                    <input type="text" className="form-control" id="amount" 
                    placeholder="Amount" value={amount} onChange={e => setAmount(e.target.value)}/>
                    <button type="submit" className="btn btn-success ml-3 btn-style" onClick={submitHandler}>Submit</button>
                    <Link to="/" className="btn btn-secondary active ml-3 btn-style" role="button"
                     aria-pressed="true">LogOut</Link>
                </div>
                </div>
        </div>
    )
}

export default DepositPage;