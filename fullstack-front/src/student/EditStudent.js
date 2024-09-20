
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditStudent() {

    let navigate = useNavigate();
    const { studentId } = useParams();
    const [student, setStudent] = useState({
        studentName: "",
        email: "",
        department: "",
      });
    
      const { studentName, email, department } = student;
    
      const onInputChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
      };

      useEffect(() => {
        loadStudent();
      }, []);

      const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/student/${studentId}`, student);
        navigate("/");
      };

      const loadStudent = async () => {
        const result = await axios.get(`http://localhost:8080/student/${studentId}`);
        setStudent(result.data);
      };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Student Details</h2>

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
