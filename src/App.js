
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './css/sb-admin-2.css';
import Dashboard from './Dashboard';
import Users from './Users';
import CreateUser from './CreateUser';
import Portal from './Portal';


function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path='/' element={<Portal />}>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/users' element={<Users />}></Route>
          <Route path='/createuser' element={<CreateUser />}></Route>
        </Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
