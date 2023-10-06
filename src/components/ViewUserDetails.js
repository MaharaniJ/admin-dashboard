import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import axios from "axios";

function ViewUserDetails() {
  const params = useParams();

  const [searchParams, setSearchParams] = useSearchParams();
  console.log(...searchParams);
  const [userData, setuserData] = useState({});

  useEffect(() => {
    loaduser();
  }, []);
  let loaduser = async () => {
    try {
      let user = await axios.get(
        `https://651e92db44a3a8aa47689c04.mockapi.io/users/${params.id}`
      );
      setuserData(user.data);
    } catch (error) {}
  };
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center">
      <div className="card shadow w-50 ">
        <div className="card-body ">
          <h1>{userData.name}</h1>
          <h1>{userData.position}</h1>
          <h1>{userData.office}</h1>
          <h1>{userData.age}</h1>
          <h1>{userData.startdate}</h1>
          <h1>{userData.salary}</h1>
        </div>
      </div>
    </div>
  );
}

export default ViewUserDetails;
