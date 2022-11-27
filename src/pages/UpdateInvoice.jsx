import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const UpdateInvoice = ({invoices, setInvoices}) => {
    const { id } = useParams();
    const [invoice, setInvoice] = useState({});

    useEffect(() => {
        const invoice = invoices.find((invoice) => invoice.id === id);
        setInvoice(invoice);
    }, []);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setInvoice({...invoice, [name]: value});
        console.log(invoice);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(invoice);
        const oldInvoice = invoices.find((invoice) => invoice.id === id);
        const index = invoices.indexOf(oldInvoice);
        invoices[index] = invoice;
        setInvoices([...invoices]);
    }

    return ( 
        <div>
            <h1>Update Invoice</h1>
            <p>Invoice ID: {id}</p>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" name="amount" value={invoice?.amount || ""} onChange={(e) => handleChange(e)}/>
                {
                    invoice?.status === "paid" ? (
                        <select name="status" onChange={(e) => handleChange(e)}>
                            <option value="paid">Paid</option>
                            <option value="pending">Pending</option>
                            <option value="send">Send</option>
                        </select>
                    )
                    : invoice?.status === "pending" ? (
                        <select name="status" onChange={(e) => handleChange(e)}>
                            <option value="pending">Pending</option>
                            <option value="paid">Paid</option>
                            <option value="send">Send</option>
                        </select>
                    )
                    : invoice?.status === "send" ? (
                        <select name="status" onChange={(e) => handleChange(e)}>
                            <option value="send">Send</option>
                            <option value="paid">Paid</option>
                            <option value="pending">Pending</option>
                        </select>
                    )
                    : null
                }
                <input type="submit" value="Edit Invoice" />
            </form>
        </div>
     );
}
 
export default UpdateInvoice;