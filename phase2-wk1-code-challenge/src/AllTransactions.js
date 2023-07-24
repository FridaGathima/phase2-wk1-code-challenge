import React, { useEffect, useState } from "react";


function AllTransactions() {

    const [transactionList, setData] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/transactions")
            .then(response => response.json())
            .then(data => setData(data))
    }, [])

    function handleDelete() {
        fetch("http://localhost:3000/transactions", {
            method: 'DELETE',
        }).then(() => {
            console.log('delete transaction')
        })
        
    }
    return (
        <div className="alltransactionstable">
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Amount</th>
                    </tr>
                </thead>

                <tbody>
                    {transactionList.map((transactions) => {
                        return <tr key={transactions.id}>
                            <td>{transactions.date}</td>
                            <td> {transactions.description}</td>
                            <td> {transactions.category}</td>
                            <td> {transactions.amount}</td>
                           <td> <button onClick={handleDelete} >Delete</button></td>
                        </tr>
                    })}
                </tbody>
            </table>
            
        </div>

    )
}

export default AllTransactions