import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/sb-admin-2.css";
import Dashboard from "./components/Dashboard";
import Customers from "./components/Customers";
import Portal from "./pages/Portal";
import Login from "./pages/Login";
import CustomerView from "./components/CustomerView";
import EditCustomer from "./components/EditCustomer";
import CreateCustomer from "./components/CreateCustomer";
import { UserProvider } from "./UserContext";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/portal" element={<Portal />}>
            <Route path="dashboard" element={<Dashboard />}></Route>
            <Route path="customers" element={<Customers />}></Route>
            <Route path="customers/:id" element={<CustomerView />}></Route>
            <Route path="profile" element={<Profile />} />
            <Route path="customers/edit/:id" element={<EditCustomer />}></Route>
            <Route path="createcustomer" element={<CreateCustomer />}></Route>
          </Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
