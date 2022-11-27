import { TableRow, TableCell, Button} from "@mui/material";
import { Link } from "react-router-dom";

const CustomerRow = ({customer}) => {
    return ( 
        <>
            <TableRow key={customer.id}>
                <TableCell>{customer.id}</TableCell>
                <TableCell>{customer.firstName}</TableCell>
                <TableCell>{customer.lastName}</TableCell>
                <TableCell>
                    <Link to={`/customers/${customer.id}`}>
                        <Button variant="contained">{customer.invoices.length}</Button>
                    </Link>
                </TableCell>
                <TableCell>
                    <Button variant="contained" color="error">Delete</Button>
                </TableCell>
            </TableRow>
        </>
     );
}
 
export default CustomerRow;