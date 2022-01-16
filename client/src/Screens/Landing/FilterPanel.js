import React from "react";
import DropDown from "../../components/Dropdown";

const FilterPanel = ({
  langauges,
  language,
  handleLaguage,
  sortBy,
  sortList,
  handleSortBy,
}) => (
  <div className="filter-panel">
    Language -
    <DropDown
      value={language}
      items={langauges}
      handleChange={(event) => handleLaguage(event.target.value)}
    />
    Sort By -
    <DropDown
      value={sortBy}
      items={sortList}
      handleChange={(event) => handleSortBy(event.target.value)}
    />
  </div>
);

export default FilterPanel;
