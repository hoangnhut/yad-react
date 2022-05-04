import './App.css';
import Student from './components/Student'
import CreateStudentForm from './components/CreateStudentForm';
import FilterStudent from './components/FilterStudent';

function App(props) {
  const students = [
    { id: 1, name: 'Alice', status: 'studying' },
    { id: 2, name: 'Bob', status: 'studying' },
    { id: 3, name: 'Charlie', status: 'graduated' },
    { id: 4, name: 'Dave', status: 'studying' },
    { id: 5, name: 'Eva', status: 'studying' },
  ]

  const studentElements = students.map(s => (
    <Student name={s.name} status={s.status} />
  ))

  return (
    <div className='container'>
      <h1>YAD Students</h1>

      {/* g-3 is gutters https://getbootstrap.com/docs/5.0/forms/layout/#gutters */}
      <CreateStudentForm />

      <FilterStudent />

      <div className='container g-0'>
        <div className='row g-1 mb-3'>
          <div className="col-auto">
            <input
              type="text"
              className="form-control"
              name="text"
              autoComplete="off"
              value='Alice'
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
