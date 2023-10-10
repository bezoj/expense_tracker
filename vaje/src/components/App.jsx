import { useState } from 'react'
import Header from './Header'
import style from '../styles/style.css'
import Balance from './Balance'
import IncomeExpenses from './IncomeExpenses'
import TransactionList from './TransactionList'
import TransactionForm from './TransactionForm'
import { GlobalProvider } from './context/GlobalState'


function App() {


  return (
    <GlobalProvider>
      <div className='App'>
        <div className='container'>
          <Header />
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <TransactionForm />
        </div>
      </div>
    </GlobalProvider>
  )
}

export default App
