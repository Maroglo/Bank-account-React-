import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "../App.css";
import "./login";
import "./deposit";

function WithdrawPage(props) {

    const { database, setDatabase } = props;
    const [balance, setBalance] = useState("");
    const [amount, setAmount] = useState("");

    const submitHandler = e => {
        e.preventDefault();
        if (amount >= database.user[database.loggedUser].balance) {
            document.getElementById("printWarn").innerHTML =
                "Unfortunately you don't have the balance for that. Try a smaller amount."
            setAmount(" ")
        } else {
            database.user[database.loggedUser].balance -= Number(amount);
            let currentBalance = database.user[database.loggedUser].balance;
            document.getElementById("printWarn").innerHTML =
                "Withdrawing a cash sum of " + amount + ". Your account balance is now " + currentBalance;
            setBalance(currentBalance);
            setAmount("Amount");
        }


    }

    return (
        <div>
            <div className="jumbotron jumbDep">
                <ul className="nav nav-pills nav-fill nav-style">
                    <li className="nav-item">
                        <Link to="deposit" className="nav-link">Deposit</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link active">Withdraw</Link>
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
                    <h5>Hello {database.user[database.loggedUser].name}. 
                    How much would you like to withdraw from your account?</h5>
                    <input type="text" className="form-control" id="amount"
                        placeholder="Amount" value={amount} onChange={e => setAmount(e.target.value)} />
                    <button type="submit" className="btn btn-success ml-3 btn-style"
                        onClick={submitHandler}>Submit</button>
                    <Link to="/" className="btn btn-secondary active ml-3 btn-style"
                        role="button" aria-pressed="true">LogOut</Link>
                    <div><p id="printWarn"></p></div>
                </div>
            </div>
        </div>
    )
}

export default WithdrawPage;