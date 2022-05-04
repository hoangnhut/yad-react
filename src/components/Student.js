export default function Student(props) {
  return (
    <div className='row g-1 mb-3'>
      <div className="col-auto">
        {props.name}
      </div>
    </div>
  );
}