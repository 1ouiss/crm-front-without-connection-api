import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { TableContainer, Table, TableBody, TableHead, TableRow, TableCell, Paper} from "@mui/material";
import InvoiceRow from "../components/InvoiceRow";

const InvoiceCustomer = ({invoices, customers}) => {
    const {id} = useParams();
    const [customerInvoices, setCustomerInvoices] = useState([]);

    useEffect(() => {
        invoices.map((invoice) => {
            if (invoice.customer[0] === id) {
                setCustomerInvoices((customerInvoices) => [...customerInvoices, invoice]);
            }
        })
    }, []);

    return ( 
        <>
            <h1>InvoiceCustomer</h1>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Invoice Number</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Client</TableCell>
                        <TableCell>SendingAt</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {customerInvoices.map((invoice) => (
                        <InvoiceRow key={invoice.id} invoice={invoice}/>
                    ))}
                    {/* {
                        isSearching ? search.map((invoice, index) => (
                            <InvoiceRow key={index} invoice={invoice} handleDelete={handleDelete} index={index}/>
                        )) : invoices.map((invoice, index) => (
                            <InvoiceRow key={index} invoice={invoice} handleDelete={handleDelete} index={index}/>
                        ))
                    } */}
                </TableBody>
                </Table>
            </TableContainer>
        </>
     );
}
 
export default InvoiceCustomer;