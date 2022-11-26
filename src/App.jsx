import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Invoices from './pages/Invoices';
import Customers from './pages/Customers';
import UpdateInvoice from './pages/UpdateInvoice';
import CreateInvoice from './pages/CreateInvoice';

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
          <Route path="/" element={<Invoices invoices={invoices}/>} />
          <Route path="/customers" element={<Customers customers={customers}/>} />
          <Route path="/invoices/:id" element={<UpdateInvoice invoices={invoices}/>} />
          <Route path="/newinvoice" element={<CreateInvoice invoices={invoices}/>} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
