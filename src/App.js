
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './css/sb-admin-2.css';
import Dashboard from './Dashboard';
import Customers from './Customers';
import Portal from './Portal';
import Login from './Login';
import CustomerView from './CustomerView';
import EditCustomer from './EditCustomer';
import CreateCustomer from './CreateCustomer';
import { UserProvider } from './UserContext';
import Profile from './Profile';


function App() {

  return (
    <BrowserRouter>
    <UserProvider>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/portal' element={<Portal />}>
          <Route path='dashboard' element={<Dashboard />}></Route>
          <Route path='customers' element={<Customers />}></Route>
          <Route path='customers/:id' element={<CustomerView />}></Route>
          <Route path='profile' element={<Profile />} />
          <Route path='customers/edit/:id' element={<EditCustomer />}></Route>
          <Route path='createcustomer' element={<CreateCustomer />}></Route>
        </Route>
      </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;