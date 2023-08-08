import React, { useState } from "react";
import "./sidebar.css"; // Importer le CSS du Sidebar

const Sidebar = ({options, insertSearchParams}) => {
  // const handleOptionSelect = (option) => {
  //   setSelectedOption(option);
  //   onOptionSelect(option); // Pass the selected option to the parent component
  // };

  return (
    <div className="sidebar">
      <div className="checkboxes">
        {options.map((option) => (
          <label key={option.id}>
            <input
              type="checkbox"
              onChange={e => {
                e.stopPropagation();
                insertSearchParams(e.target.checked, {id: option.id, name: option.name})
              }}
            />
            {option.name}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
