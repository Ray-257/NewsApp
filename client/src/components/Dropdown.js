import React from "react";

const DropDown = ({ value='', handleChange,items=[] }) => (
  <select value={value} onChange={handleChange} className="select-comp">
    { items.map((item) => <option value={item.value}>{item.label}</option>)}
  </select>
);
export default DropDown;