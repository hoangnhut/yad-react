import { useState } from "react";

export default function Student(props) {
  const [isEditing, setEditing] = useState(false);

  const editingTemplate = (<>
    <div className="col-auto">
      <input
        type="text"
        className="form-control"
        name="text"
        autoComplete="off"
      />
    </div>
    <div className="col-auto">
      <button type="submit" className="btn btn-primary">Save</button>
    </div>
    <div className="col-auto">
      <button type="submit" className="btn btn-danger" onClick={() => setEditing(false)}>Cancel</button>
    </div>
  </>)

  const viewTemplate = (<>
    <div className="col-auto" onClick={() => setEditing(true)}>
      {props.name} {props.status === 'graduated' ? <span className='fst-italic'>(graduated)</span> : ''}
    </div>
  </>)


  return <div className='row g-1 mb-3'>{isEditing ? editingTemplate : viewTemplate}</div>
}