import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Invoices from './pages/Invoices';
import Customers from './pages/Customers';
import UpdateInvoice from './pages/UpdateInvoice';
import CreateInvoice from './pages/CreateInvoice';
import InvoiceCustomer from './pages/InvoiceCustomer';

function App() {
  const [customers, setCustomers] = useState([]);
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    fetch('./customers.json')
      .then((res) => res.json())
      .then((data) => setCustomers(data));
    fetch('./invoices.json')
      .then((res) => res.json())
      .then((data) => setInvoices(data));
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Invoices invoices={invoices} setInvoices={setInvoices}/>} />
          <Route path="/customers" element={<Customers customers={customers}/>} />
          <Route path="/invoices/:id" element={<UpdateInvoice invoices={invoices} setInvoices={setInvoices}/>} />
          <Route path="/customers/:id" element={<InvoiceCustomer invoices={invoices} customers={customers}/>} />
          <Route path="/newinvoice" element={<CreateInvoice invoices={invoices} customers={customers} setInvoices={setInvoices}/>} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
