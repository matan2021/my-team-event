//choosing number of childrens over 18 and update.
import React, { useState } from 'react';
interface ChildrenInputProps {
  onChange: (value: string) => void;
}

const ChildrenInput: React.FC<ChildrenInputProps> = ({ onChange }) => {
  const [numberOfChildren, setNumberOfChildren] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumberOfChildren(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div>
      <label htmlFor="children-input">Number of Children under 18:</label>
      <input
        type="string"
        id="children-input"
        value={numberOfChildren}
        onChange={handleChange}
        className="border rounded p-1"
      />
    </div>
  );
};

export default ChildrenInput;
