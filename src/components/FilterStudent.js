const FilterStudent = (props) => {
  return (
    <div>
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name="statusRadio" id="statusRadio1" />
        <label className="form-check-label" htmlFor="statusRadio1">
          Studying
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name="statusRadio" id="statusRadio2" />
        <label className="form-check-label" htmlFor="statusRadio2">
          Graduated
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name="statusRadio" id="statusRadio3" />
        <label className="form-check-label" htmlFor="statusRadio3">
          All
        </label>
      </div>
    </div>
  )
}

export default FilterStudent