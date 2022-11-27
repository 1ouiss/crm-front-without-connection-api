import { TableContainer, Table, TableBody, TableHead, TableRow, TableCell, Paper, Button} from "@mui/material";
import InvoiceRow from "../components/InvoiceRow";
// import SearchComponent from "../components/SearchComponent";
import { Link } from "react-router-dom";

const Invoices = ({invoices, setInvoices}) => {

  const handleDelete = (e, id) => {
    e.preventDefault();
    console.log(id);
    const newInvoices = invoices.filter((invoice) => invoice.id !== id);
    console.log(newInvoices);
    setInvoices(newInvoices);
  }

  return (
    <>
      <h1>All Invoices</h1>
      <div className="header">
        {/* <SearchComponent dataToSearch={invoices} resultOfSearch={setSearch} setIsSearching={setIsSearching}/> */}
        <Link to="/newinvoice">
          <Button variant="contained">Create Invoice</Button>
        </Link>
      </div>
        

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
            {invoices.map((invoice) => (
                <InvoiceRow key={invoice.id} invoice={invoice} handleDelete={handleDelete}/>
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
 
export default Invoices;