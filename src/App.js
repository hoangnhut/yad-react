import { useState } from "react";

import './App.css';
import Student from './components/Student'
import CreateStudentForm from './components/CreateStudentForm';
import FilterStudent from './components/FilterStudent';

function App(props) {
  let predefinedStudents = [
    { id: 1, name: 'Alice', status: 'studying' },
    { id: 2, name: 'Bob', status: 'studying' },
    { id: 3, name: 'Charlie', status: 'graduated' },
    { id: 4, name: 'Dave', status: 'studying' },
    { id: 5, name: 'Eva', status: 'studying' },
  ]

  const [students, setStudents] = useState(predefinedStudents)
  const studentElements = students.map(s => (
    <Student key={s.id} name={s.name} status={s.status} />
  ))

  const addStudent = (studentName) => {
    const newStudent = { id: new Date().getTime(), name: studentName, status: 'studying' }
    setStudents([...students, newStudent])
  }

  return (
    <div className='container'>
      <h1>YAD Students</h1>
      <CreateStudentForm addStudent={addStudent} />
      <FilterStudent />

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
        {studentElements}
      </div>


      <b className='mt-3'>
        3 students studying
      </b>
    </div>
  );
}

export default App;
