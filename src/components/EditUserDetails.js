import { useFormik } from "formik";
import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditUserDetails() {
  const params = useParams();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      id: "",
      position: "",
      office: "",
      age: "",
      startdate: "",
      salary: "",
    },
    validate: (values) => {
      let errors = {};

      if (values.name === "") {
        errors.name = "Please enter a name";
      }
      if (values.position === "") {
        errors.position = "Please enter a position";
      }
      if (values.office === "") {
        errors.office = "Please enter an office";
      }
      if (values.age === "") {
        errors.age = "Please enter age";
      }
      if (values.startdate === "") {
        // Fix field name here
        errors.startdate = "Please enter start date";
      }
      if (values.salary === "") {
        errors.salary = "Please enter a salary";
      }

      return errors;
    },
    onSubmit: async (values) => {
      let users = await axios.put(
        `https://651e92db44a3a8aa47689c04.mockapi.io/users`,
        values
      );
      alert("user Created");
      navigate("/portal/users");
    },
  });
  useEffect(() => {
    loaduser();
  }, []);
  let loaduser = async () => {
    try {
      let user = await axios.get(
        `https://651e92db44a3a8aa47689c04.mockapi.io/users/${params.id}`
      );
      formik.setValues({
        name: user.data.name,
        id: user.data.id,
        position: user.data.position,
        office: user.data.office,
        age: user.data.age,
        startdate: user.data.startdate,
        salary: user.data.salary,
      });
    } catch (error) {}
  };
  return (
    <>
      <div className="container">
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-lg-6">
              <label>Name</label>
              <input
                className="form-control"
                type={"text"}
                value={formik.values.name}
                onChange={formik.handleChange}
                name="name"
              ></input>
              <span style={{ color: "red" }}>{formik.errors.name}</span>
            </div>
            <div className="col-lg-6">
              <label>UserId</label>
              <input
                className="form-control"
                value={formik.values.id}
                onChange={formik.handleChange}
                name="id"
                type={"text"}
              ></input>
              <span style={{ color: "red" }}>{formik.errors.userid}</span>
            </div>
            <div className="col-lg-6">
              <label>Position</label>
              <input
                className="form-control"
                type={"text"}
                value={formik.values.position}
                onChange={formik.handleChange}
                name="position"
              ></input>
              <span style={{ color: "red" }}>{formik.errors.position}</span>
            </div>
            <div className="col-lg-6">
              <label>Office</label>
              <input
                className="form-control"
                value={formik.values.office}
                onChange={formik.handleChange}
                name="office"
                type={"text"}
              ></input>
              <span style={{ color: "red" }}>{formik.errors.office}</span>
            </div>
            <div className="col-lg-6">
              <label>Age</label>
              <input
                className="form-control"
                value={formik.values.age}
                onChange={formik.handleChange}
                name="age"
                type={"text"}
              ></input>
              <span style={{ color: "red" }}>{formik.errors.age}</span>
            </div>

            <div className="col-lg-6">
              <label>StartDate</label>
              <input
                className="form-control"
                value={formik.values.startdate}
                onChange={formik.handleChange}
                name="startdate"
                type={"text"}
              ></input>
              <span style={{ color: "red" }}>{formik.errors.startdate}</span>
            </div>
            <div className="col-lg-6">
              <label>Salary</label>
              <input
                className="form-control"
                value={formik.values.salary}
                onChange={formik.handleChange}
                name="salary"
                type={"text"}
              ></input>
              <span style={{ color: "red" }}>{formik.errors.salary}</span>
            </div>

            <div className="col-lg-6">
              <button
                className="btn btn-primary mt-2"
                type={"submit"}
                value={"submit"}
                disabled={!formik.isValid}
              >
                submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default EditUserDetails;
