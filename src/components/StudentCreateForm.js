import { useState } from "react";

const StudentCreatForm = (props) => {

  let [newStudent, setNewStudent] = useState('');

  const onClickHandler = (event) => {
    event.preventDefault();
    props.addStudent(newStudent);
  }

  const onChangeHandler = (event) => {
    setNewStudent(event.target.value)
  }

  return (
    <form className='row g-3'>
      <div className="col-9">
        <input
          id='txtAdd'
          type="text"
          className="form-control"
          name="text"
          autoComplete="off"
          onChange={onChangeHandler}
        />
      </div>
      <div className="col-3">
        <button type="submit" className="btn btn-primary mb-3 w-100" onClick={onClickHandler}>Add</button>
      </div>
    </form>
  )
}

export default StudentCreatForm
