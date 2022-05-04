import './App.css';
import Student from './components/Student'

function App(props) {
  return (
    <div className='container'>
      <h1>YAD Students</h1>

      {/* g-3 is gutters https://getbootstrap.com/docs/5.0/forms/layout/#gutters */}
      <form className='row g-3'>
        <div className="col-9">
          <input
            type="text"
            className="form-control"
            name="text"
            autoComplete="off"
          />
        </div>
        <div className="col-3">
          <button type="submit" className="btn btn-primary mb-3 w-100">Add</button>
        </div>
      </form>

      <div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="statusRadio" id="statusRadio1" />
          <label className="form-check-label" for="statusRadio1">
            Studying
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="statusRadio" id="statusRadio2" />
          <label className="form-check-label" for="statusRadio2">
            Graduated
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="statusRadio" id="statusRadio3" />
          <label className="form-check-label" for="statusRadio3">
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
        <Student name='Bob' />
        <Student name='Charlie' status='graduated' />
        <Student name='Dave' />
        <Student name='Eva' />
      </div>


      <b className='mt-3'>
        3 students studying
      </b>
    </div>
  );
}

export default App;
