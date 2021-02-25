import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalCard } from "./animal/AnimalCard"
import { Customer } from "./customers/Customer"
import { Employee } from "./employees/Employee"
import {Location} from "./locations/Location"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="/animals">
                <AnimalCard />
            </Route>
            <Route path ="/customers">
                <Customer />
            </Route>
            <Route path ="/employees">
                <Employee />
            </Route>
            <Route path ="/locations">
                <Location />
            </Route>
        </>
    )
}