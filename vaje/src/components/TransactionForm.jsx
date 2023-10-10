import React, { useContext } from "react";
import { Exception } from "sass";
import { useState } from "react";
import { GlobalContext } from "./context/GlobalState";


export default function TransactionForm() {

    const [text, setText] = useState("")
    const [amount, setAmount] = useState(0)

    const { addTransaction } = useContext(GlobalContext)

    const onSubmit = e => {
        e.preventDefault()


        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }

        addTransaction(newTransaction);
        
        setText("");
        setAmount(0);
    }

    return (
        <>
            <h3 className="form--title">Add a new transaction</h3>
            <form className="form" onSubmit={onSubmit}>
                <div className="form--control">
                    <label htmlFor="Text" >Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                </div>
                <div className="form--control">
                    <label htmlFor="text">Amount (negative-expense, positive-income)</label>
                    <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}