import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    loaddata();
  }, []);

  let loaddata = async () => {
    setLoading(true);
    let users = await axios.get(
      `https://651e92db44a3a8aa47689c04.mockapi.io/users`
    );
    setUsers(users.data);
    setLoading(false);
  };
  let userDelete = async (id) => {
    try {
      let ask = window.confirm("Do you want to delete?");
      if (ask) {
        await axios.delete(
          `https://651e92db44a3a8aa47689c04.mockapi.io/users/${id}`
        );
        loaddata();
      }
    } catch (error) {}
  };
  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        {/* <!-- Page Heading --> */}
        <h1 className="h3 mb-2 text-gray-800">Tables</h1>
        <p className="mb-4">
          <Link
            to="/portal/createuser"
            className={"d-none d-sm-inline-block btn-sm btn-primary"}
          >
            <li className="fas fa-download fa-sn text-white-50"></li>Create user
          </Link>
        </p>
      </div>
      {/* <!-- DataTales Example --> */}
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              DataTables Example
            </h6>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellSpacing="0"
              >
                <thead>
                  <tr>
                    <th>#Sl</th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Office</th>
                    <th>Age</th>
                    <th>Start date</th>
                    <th>Salary</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>#Sl</th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Office</th>
                    <th>Age</th>
                    <th>Start date</th>
                    <th>Salary</th>
                    <th>Actions</th>
                  </tr>
                </tfoot>
                <tbody>
                  {users.map((user, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.position}</td>
                        <td>{user.office}</td>
                        <td>{user.age}</td>
                        <td>{user.startdate}</td>
                        <td>${user.salary}</td>
                        <td>
                          <Link
                            to={`/portal/users/${user.id}`}
                            className="btn btn-sm btn-warning mr-2"
                          >
                            View
                          </Link>
                          <Link
                            to={`/portal/users/edit/${user.id}`}
                            className="btn btn-sm btn-primary mr-2"
                          >
                            Edit
                          </Link>
                          <button
                            onClick={() => userDelete(user.id)}
                            className="btn btn-sm btn-danger mr-2"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>

    // <!-- /.container-fluid -->
  );
}

export default Users;
