import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from "./component/admin/Admin";
import Customer from "./component/customer/Customer";
import CustomerCare from "./component/customer_care/CustomerCare";
import AuthForm from "./component/authForm/AuthForm";


function App() {
  return (
      <Router>
        <div className="p-6 bg-gray-100 min-h-screen">
        
          <Routes>
            <Route path="/admin" element={<Admin />} />
            <Route path="/customer" element={<Customer />} />
              <Route path="/customerCare" element={<CustomerCare />} />
              <Route path="/auth" element={<AuthForm />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
