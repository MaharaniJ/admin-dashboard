import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/sb-admin-2.css";
import Dashboard from "./components/Dashboard";
import Users from "./components/Users";
import CreateUser from "./components/CreateUser";
import Portal from "./components/Portal";
import ViewUserDetails from "./components/ViewUserDetails";
import EditUserDetails from "./components/EditUserDetails";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/portal" element={<Portal />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:id" element={<ViewUserDetails />} />
          <Route path="users/edit/:id" element={<EditUserDetails />} />
          <Route path="createuser" element={<CreateUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
