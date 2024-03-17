//choosing number of transporation seats and update.
import React, { useState } from 'react';
interface TransportationSelectProps {
  options: number[];
  onChange: (value: string) => void;
}

const TransportationSelect: React.FC<TransportationSelectProps> = ({ options, onChange }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div>
      <label htmlFor="transportation-select">Transportation Seats Needed:</label>
      <select id="transportation-select" value={selectedOption} onChange={handleChange}>
        <option value="">Please select</option>
        {options.map((option) => (
          <option key={option} value={option.toString()}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TransportationSelect;
