import { useState } from "react";

const Student = (props) => {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState(props.name);

  const handleChange = (e) => {
    setNewName(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.editStudent(props.id, newName);
    setNewName("");
    setEditing(false);
  }

  const editingTemplate = (<>
    <div className="col-auto">
      <input
        type="text"
        className="form-control"
        name="text"
        autoComplete="off"
        value={newName}
        onChange={handleChange}
      />
    </div>
    <div className="col-auto">
      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Save</button>
    </div>
    <div className="col-auto">
      <button type="submit" className="btn btn-light" onClick={() => setEditing(false)}>Cancel</button>
    </div>
  </>)

  const viewTemplate = (<>
    <div className="col-auto" onClick={() => setEditing(true)}>
      {props.name} {props.status === 'graduated' ? <span className='fst-italic'>(graduated)</span> : ''}
    </div>
  </>)


  return <div className='row g-1 mb-3'>{isEditing ? editingTemplate : viewTemplate}</div>
}

export default Student;