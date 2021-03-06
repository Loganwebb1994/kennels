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
import { EmployeeForm } from "./employees/EmployeeForm"
import { AnimalDetail } from "./animal/AnimalDetail"
import { LocationForm} from "./locations/LocationForm"
import { EmployeeDetail } from "./employees/EmployeeDetail"
import { LocationDetail } from "./locations/LocationDetail"
import { AnimalSearch } from "./animal/AnimalSearch"

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
                            <AnimalSearch />
                            <AnimalList />
                        </Route>
                        <Route path="/animals/create">
                            <AnimalForm/>
                        </Route>
                        <Route exact path="/animals/detail/:animalId(\d+)">
                            <AnimalDetail />
                        </Route>
                        <Route path="/animals/edit/:animalId(\d+)">
                            <AnimalForm />
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
                <LocationProvider>
                    <Route exact path ="/employees">
                        <EmployeeList />
                    </Route>
                    <Route path ="/employee/create">
                        <EmployeeForm />
                    </Route>
                    <Route exact path="/employees/detail/:employeeId(\d+)">
                        <EmployeeDetail />
                    </Route>
                    <Route path="/employees/edit/:employeeId(\d+)">
                        <EmployeeForm />
                    </Route>

                </LocationProvider>    
            </EmployeeProvider>
            
            <LocationProvider>
                <Route exact path ="/locations">
                    <LocationList />
                </Route>
                <Route path ="/location/create">
                    <LocationForm />
                </Route>
                <Route exact path="/locations/detail/:locationId(\d+)">
                    <LocationDetail />
                </Route>
                <Route path="/locations/edit/:locationId(\d+)">
                    <LocationForm />
                </Route>
            </LocationProvider>
        </>
    )
}