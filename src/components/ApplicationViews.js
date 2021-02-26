import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"

import { Customer } from "./customers/Customer"
import { Employee } from "./employees/Employee"
import {Location} from "./locations/Location"
import { AnimalList } from "./animal/AnimalList"
import { AnimalProvider } from "./animal/AnimalProvider"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <AnimalProvider>
                <Route exact path="/animals">
                    <AnimalList />
                </Route>
            </AnimalProvider>
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