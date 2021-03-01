import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"

import {CustomerList} from "./customers/CustomerList"
import { EmployeeList } from "./employees/EmployeeList"
import {LocationList} from "./locations/LocationList"
import { AnimalList } from "./animal/AnimalList"
import { AnimalProvider } from "./animal/AnimalProvider"
import { CustomerProvider } from "./customers/CustomerProvider"
import { EmployeeProvider } from "./employees/EmployeeProvider"
import { LocationProvider } from "./locations/LocationProvider"
import { AnimalForm } from "./animal/AnimalForm"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <AnimalProvider>
                <LocationProvider>
                    <CustomerProvider>
                        <Route exact path="/animals">
                            <AnimalList />
                        </Route>
                        <Route path="/animals/create">
                            <AnimalForm/>
                        </Route>
                    </CustomerProvider>
                </LocationProvider>
            </AnimalProvider>
            
            <CustomerProvider>
                <Route path ="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>
            
            <EmployeeProvider>
                <Route path ="/employees">
                    <EmployeeList />
                </Route>
            </EmployeeProvider>
            
            <LocationProvider>
                <Route path ="/locations">
                    <LocationList />
                </Route>
            </LocationProvider>
        </>
    )
}