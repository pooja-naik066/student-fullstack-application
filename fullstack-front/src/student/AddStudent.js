
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddStudent() {
    let navigate = useNavigate
    const [student, setStudent] = useState({
        studentName: "",
        email: "",
        department: "",
      });
    
      const { studentName, email, department } = student;
    
      const onInputChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
      };

      const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/student", student);
        navigate("/");
      };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register Student</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="studentName"
                value={studentName}
                onChange={(e) => onInputChange(e)}
               
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your email"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
            
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Department" className="form-label">
                Department
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Department"
                name="department"
                value={department}
                onChange={(e) => onInputChange(e)}
             
               
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
           
            <Link className="btn btn-outline-danger mx-2" to="/">Cancel</Link>
    
          </form>
        </div>
      </div>
    </div>
  )
}
