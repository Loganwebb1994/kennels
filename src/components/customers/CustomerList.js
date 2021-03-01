import React, { useContext, useEffect } from "react"
import { CustomerContext } from "./CustomerProvider"
import { Customer } from "./Customer"
import "./Customer.css"

export const CustomerList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { customers, getCustomers } = useContext(CustomerContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("AnimalList: useEffect - getAnimals")
    getCustomers()

  }, [])


    return (
    <>
    <h2>Customers</h2>
    <div className="customers">
        {console.log("CustomerList: render", customers)}
        {
        customers.map(customer => {
            return <Customer key={customer.id} customer={customer} />
        })}
    </div>
    </>
    )
}
