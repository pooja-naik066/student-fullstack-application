import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';

export default function Home() {
    const { studentId } = useParams();

    const [student,setStudent] = useState([]);
    useEffect(()=>{
        loadStudent();
    },[]);

    const loadStudent=async()=>{
        const result=await axios.get("http://localhost:8080/student");
        setStudent(result.data);
        
    };

    const deleteStudent = async (studentId) => {
        await axios.delete(`http://localhost:8080/student/${studentId}`);
        loadStudent();
      };
  return (
    <div className='container'>
        <div className='py-4'>
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">email</th>
      <th scope="col">Department</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {student.map((stud, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{stud.studentName}</td>
                <td>{stud.email}</td>
                <td>{stud.department}</td>
                <td>
                <Link
                    className="btn btn-primary mx-2"
                    to={`/viewStudent/${stud.studentId}`}>
                    View
                  </Link>
                    <Link className="btn btn-outline-primary mx-2" to={`editStudent/${stud.studentId}`}>Edit</Link>
                    <button className="btn btn-danger mx-2"  onClick={() => deleteStudent(stud.studentId)}>Delete</button>
                </td>
              </tr>
            ))}
  </tbody>
</table>

        </div>
    </div>
  )
}
