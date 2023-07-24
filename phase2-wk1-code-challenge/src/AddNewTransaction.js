import React, {useState} from "react";

 
 
function AddNewTransaction () {
   const [existingTransactions, setExistingTransactions] = useState("")

   const [date, setDate] = useState("")
   const [description, setDescription] = useState("")
   const [category, setCategory] = useState("")
   const [amount, setAmount] = useState("")

   function handleNewTransaction(e) {
        e.preventDefault()
    
        const newTransaction = {
            date,
            description,
            category,
            amount,
        }
        fetch("http://localhost:3000/transactions", {
            method: 'POST',
            headers: {"Content-Type": "application/JSON"},
            body: JSON.stringify(newTransaction)
        }).then(() => {
            console.log('add new transaction')
        })

        const updatedTransactionList = [...existingTransactions, newTransaction]
        setExistingTransactions(updatedTransactionList)

   }
   
    return(
        <div>
            <form className="NewBankTransaction" onSubmit={handleNewTransaction}>
                <h2>Add New Bank Transaction</h2>
                <label htmlFor="date">Date</label>
                <input type="date" placeholder="Date" value={date} onChange={e => setDate(e.target.value)}/>

                <label htmlFor="description">Description</label>
                <input type="text" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)}/>

                <label htmlFor="category">Category</label>
                <input type="text" placeholder="Category" value={category} onChange={e => setCategory(e.target.value)} />

                <label htmlFor="amount">Amount</label>
                <input type="Number" placeholder="Amount" value={amount} onChange={e => setAmount(e.target.value)} />

                <input type="submit" value="Submit New Transaction"/>
            </form>

        </div>
        
    )
}

export default AddNewTransaction