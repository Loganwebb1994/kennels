import React from "react"
import "./Employee.css"
import { Link } from "react-router-dom"

export const Employee = ({employee}) => (
    <section className="employee">
        <h3 className="emloyee__name">
            <Link to={`/employees/detail/${employee.id}`}>
                { employee.name }
            </Link>
        </h3>
    </section>
)