import './MySelect.css';

function MySelect({sortOptions, value, onChange}) {

  return (
   <select
      value={value}
      onChange={onChange}
      className="my-select-sort"
   >
   {sortOptions.map(opt => <option key={opt.value} value={opt.value}> {opt.name} </option>)}
      <option value="" disabled> Сортировать по  </option>
   </select>
  )
}

export default MySelect;
