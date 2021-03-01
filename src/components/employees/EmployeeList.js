import React, {useContext, useEffect} from "react"
import {EmployeeContext} from "./EmployeeProvider"
import "./Employee.css"
import { Employee } from "./Employee"

export const EmployeeList = () =>{
  const {employees, getEmployees} = useContext(EmployeeContext)
  useEffect(() =>{
    getEmployees()
  }, [])
  return(
    <>
    <h2>Employees</h2>
    <div className="employees">
        {console.log("EmployeeList: render", employees)}
        {
        employees.map(employee => {
            return <Employee key={employee.id} employee={employee} />
        })
        }
    </div>
    </>
  )
}