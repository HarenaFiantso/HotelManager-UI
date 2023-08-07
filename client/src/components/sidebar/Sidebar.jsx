import React, { useState } from "react";
import "./sidebar.css"; // Importer le CSS du Sidebar

const Sidebar = ({ options, onOptionSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    onOptionSelect(option); // Pass the selected option to the parent component
  };

  return (
    <div className="sidebar">
      <select onChange={(e) => handleOptionSelect(e.target.value)}>
        <option value="">Select an option</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="checkboxes">
        {options.map((option, index) => (
          <label key={index}>
            <input
              type="checkbox"
              checked={selectedOption === option}
              onChange={() => handleOptionSelect(option)}
            />
            {option}
          </label>
        ))}
      </div>
      <button className="submitBtn">Submit</button>
    </div>
  );
};

export default Sidebar;
