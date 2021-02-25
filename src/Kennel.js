import React from "react"
import { AnimalCard } from "./components/animal/AnimalCard"
import { Customer } from "./components/customers/Customer"
import {Employee} from "./components/employees/Employee.js"
import {Location} from "./components/locations/Location.js"
import { PropsAndState } from "./components/propsandstate/PropsAndState"
import "./Kennel.css"
export const Kennel = () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>
        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>
        <PropsAndState yourName="Logan"/>
        <h2>Animals</h2>
        <article className="animals">
            <AnimalCard />
            <AnimalCard />
            <AnimalCard />
        </article>
        <h2>Employees</h2>
        <article className="employees">
            <Employee />
            <Employee />
            <Employee />
        </article>
        <h2>Locations</h2>
        <article className="locations">
            <Location />
            <Location />
        </article>
        <h2>Customers</h2>
        <article className="customers">
            <Customer />
            <Customer />
            <Customer />
            <Customer />
        </article>
    </>
)