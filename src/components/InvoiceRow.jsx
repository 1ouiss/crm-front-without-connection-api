import { TableRow, TableCell, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const InvoiceRow = ({invoice, handleDelete}) => {
    const [customer, setCustomer] = useState({});

    useEffect(() => {
        fetch(`./customers.json`)
        .then((res) => res.json())
        .then((data) => {
            const customer = data.find((customer) => customer.id === invoice.customer[0]);
            setCustomer(customer);
        });
    }, []);
    return ( 
        <>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                <TableCell>
                    {invoice.id}
                </TableCell>
                <TableCell>{invoice.name}</TableCell>
                <TableCell>
                {customer?.firstName} {customer?.lastName}
                </TableCell>
                <TableCell>
                    {
                        invoice.createdAt.slice(0, 10)
                    }
                </TableCell>
                <TableCell>
                    <Button variant="contained" className={invoice.status === "paid" ? "sucess" : "send"}>{invoice.status}</Button>
                </TableCell>
                <TableCell>{invoice.amount} €</TableCell>
                <TableCell>
                    <Link to={`/invoices/${invoice.id}`}>
                        <Button variant="contained">Edit</Button>
                    </Link>
                    <Button variant="contained" color="error" onClick={(e) => handleDelete(e, invoice.id)}>Delete</Button>
                </TableCell>
            </TableRow>
        </>
     );
}
 
export default InvoiceRow;