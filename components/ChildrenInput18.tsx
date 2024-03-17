//choosing number of childrens under 18 and update.
import React, { useState } from 'react';
interface ChildrenInputProps {
  onChange: (value: string) => void;
}

const ChildrenInput: React.FC<ChildrenInputProps> = ({ onChange }) => {
  const [numberOfChildren2, setNumberOfChildren] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumberOfChildren(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div>
      <label htmlFor="children-input">Number of Children over 18:</label>
      <input
        type="number"
        id="children-input2"
        value={numberOfChildren2}
        onChange={handleChange}
        className="border rounded p-1"
      />
    </div>
  );
};

export default ChildrenInput;
