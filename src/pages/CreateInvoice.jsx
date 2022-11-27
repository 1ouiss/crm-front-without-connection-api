import { useState } from "react";
import { TextField, Button} from "@mui/material";

const CreateInvoice = ({invoices, customers, setInvoices}) => {
    const [invoice, setInvoice] = useState({});
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const {name, value} = e.target;
        setInvoice({...invoice, [name]: value});
        console.log(invoice);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const customer = customers.find((customer) => customer.firstName.toLowerCase().includes(invoice.customer.toLowerCase()) || customer.lastName.toLowerCase().includes(invoice.customer.toLowerCase()));
        console.log(customer);
        if (customer) {
            console.log("customer found");
            invoice.status = "send";
            invoice.createdAt = new Date().toISOString();
            invoice.customer = [customer.id];
            invoice.id = invoices.length + 1;
            console.log(invoice);
            setInvoices([...invoices, invoice]);
        }else{
            setError("Votre customer n'existe pas");
        }
    }
    return ( 
        <>
            <h1>Create Invoice</h1>
            <form>
                <TextField
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    name="name"
                    onChange={(e) => handleChange(e)}
                />

                <TextField
                    id="outlined-basic"
                    label="Customer"
                    variant="outlined"
                    name="customer"
                    onChange={(e) => handleChange(e)}
                />
                <TextField
                    id="outlined-basic"
                    label="Amount"
                    variant="outlined"
                    name="amount"
                    onChange={(e) => handleChange(e)}
                />
                <Button variant="contained" onClick={(e) => handleSubmit(e)}>Create</Button>
            </form>
            {error && <p>{error}</p>}
        </>
     );
}
 
export default CreateInvoice;