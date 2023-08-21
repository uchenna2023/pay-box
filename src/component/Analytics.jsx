// eslint-disable-next-line no-unused-vars
import React from 'react'


import Wallet from './Wallet'
import Savings from './Savings'
import Customers from './Customers'
import Pos from './Pos'
import Transfer from './Transfer'
import Inflow from './Inflow'
import Transactions from './Transactions'
import Count from './Count'
import Cashout from './Cashout'
import Status from './Status'
import Commission from './Commission'
import Avgcommission from './Avgcommission'
import Comparative from './Comparative'
import Avgcount from './Avgcount'

const Analytic = () => {
  return (
    <section className=' flex flex-col gap-3 sm:grid sm:grid-cols-4 p-3 sm:p-5 sm:gap-y-3 sm:gap-x-3 '>
        <Wallet/>
        <Savings/>
        <Customers/>
        <Pos/>
        <Transfer/>
        <Inflow/>
        <Transactions/>
        <Count/>
        <Cashout/>
        <Status/>
        <Avgcount/>
        <Commission/>
        <Avgcommission/>
        <Comparative/>
        </section>
  )
}

export default Analytic