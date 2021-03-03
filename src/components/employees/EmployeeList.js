import React, {useContext, useEffect} from "react"
import {EmployeeContext} from "./EmployeeProvider"
import "./Employee.css"
import { Employee } from "./Employee"
import {useHistory} from "react-router-dom"

export const EmployeeList = () =>{
  const {employees, getEmployees} = useContext(EmployeeContext)
  useEffect(() =>{
    getEmployees()
  }, [])
  
  const history = useHistory()
  return(
    <>
    <h2>Employees</h2>
    <div className="employees">
    <button onClick={() => {history.push("/employee/create")}}>
      Add Employee
    </button>
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