export default function CreateStudentForm(props) {
  return (
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
  )
}