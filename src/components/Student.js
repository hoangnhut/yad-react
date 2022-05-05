const Student = (props) => {
  let status = '';
  if(props.status === 'graduated')
    status = <span className='fst-italic'>(Graduated)</span>

  return (
    <div className='row g-1 mb-3'>
      <div className="col-auto">
        {/* {props.name} {props.status === 'graduated' ? <span className='fst-italic'>(Graduated)</span> : ''} */}
        {props.name} {status}
      </div>
    </div>
  )
}

export default Student