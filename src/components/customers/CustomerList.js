import { useEffect, useState } from "react"
import { Customer } from "./Customer"
import "./Customer.css"


export const CustomerList = () => {
    const [customers, setCustomers] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8089/users?isStaff=false`)
                .then(response => response.json())
                .then((customerArray) => {
                        setCustomers(customerArray)
                })
        },
        []
    )
        return <article className="customers">
        {
            customers.map(customer => <Customer key={`customer-${customer.id}`}
                id={customer.id} 
                fullName={customer.fullName} 
                email={customer.email}/>)
        }
    </article>
}