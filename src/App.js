import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

import './App.css';
import Student from './components/Student'
import StudentCreatForm from './components/StudentCreateForm';


function App(props) {

  useEffect(() => {
    axios.get('http://localhost:5000/users')
      .then((response) => {
        setStudent(response.data)
      })
  }, [])

  let [students, setStudent] = useState([]);

  const addStudent = (studentName) => {
    let newStudent = { id: 16, name: studentName, status: 'studying' }
    setStudent([...students, newStudent])
  }

  let studentsList = students.map(s => (
    <Student key={s.id} name={s.name} status={s.status} />
  ))

  return (
    <div className='container'>
      <nav>
        <Link to='/'>Home</Link>
        <br></br>
        <Link to='/profile'>Profile</Link>
      </nav>
      
      <h1>YAD Students</h1>

      <StudentCreatForm addStudent={addStudent} />

      <div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="statusRadio" id="statusRadio1" />
          <label className="form-check-label" htmlFor="statusRadio1">
            Studying
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="statusRadio" id="statusRadio2" />
          <label className="form-check-label" htmlFor="statusRadio2">
            Graduated
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="statusRadio" id="statusRadio2" />
          <label className="form-check-label" htmlFor="statusRadio2">
            All
          </label>
        </div>
      </div>

      <div className='container g-0'>
        <div className='row g-1 mb-3'>
          <div className="col-auto">
            <input
              type="text"
              className="form-control"
              name="text"
              autoComplete="off"
            />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary">Edit</button>
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-danger">Delete</button>
          </div>
        </div>

        {studentsList}
      </div>


      <b className='mt-3'>
        {students.length} students studying
      </b>
    </div>
  );
}

export default App;
