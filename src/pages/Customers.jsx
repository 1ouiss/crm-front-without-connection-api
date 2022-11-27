import { TableContainer, Table, TableBody, TableHead, TableRow, TableCell, Paper, Button} from "@mui/material";
import CustomerRow from "../components/CustomerRow";


const Customers = ({customers}) => {
    return ( 
        <>
            <h1>Customers</h1>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>First Name</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell>Invoices Numbers</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* {isSearching ? search.map(customer => (
                            <CustomerRow key={customer._id} customer={customer} handleDelete={handleDelete} viewInvoicesCustomer={viewInvoicesCustomer}/>
                        )) : customers.map(customer => (
                            <CustomerRow key={customer._id} customer={customer} handleDelete={handleDelete} viewInvoicesCustomer={viewInvoicesCustomer}/>
                        ))} */}
                        {
                            customers.map(customer => (
                                <CustomerRow key={customer.id} customer={customer}/>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </>
     );
}
 
export default Customers;