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
    <Student key={s.id} name={s.name} status={s.status} editStudent={editStudent} />
  ))

  const addStudent = (studentName) => {
    const newStudent = { id: new Date().getTime(), name: studentName, status: 'studying' }
    setStudents([...students, newStudent])
  }

  function editStudent(id, newName) {
    const editedStudentsList = students.map(student => {
      // if this student has the same ID as the edited student
      if (id === student.id) {
        //
        return { ...student, name: newName }
      }
      return student;
    });
    setStudents(editedStudentsList);
  }

  return (
    <div className='container'>
      <h1>YAD Students</h1>
      <CreateStudentForm addStudent={addStudent} />
      <FilterStudent />

      <div className='container g-0'>
        {studentElements}
      </div>


      <b className='mt-3'>
        {students.length} students studying
      </b>
    </div>
  );
}

export default App;
