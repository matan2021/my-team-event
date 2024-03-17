//choosing if the user observes Shabbat and update.
import React, { useState } from 'react';
interface ShabbatCheckboxProps {
  onChange: (value: boolean) => void; // Define the type of the value expected by onChange
}

const ShabbatCheckbox: React.FC<ShabbatCheckboxProps> = ({ onChange }) => {
  const [isShabbatObserver, setIsShabbatObserver] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsShabbatObserver(e.target.checked);
    onChange(e.target.checked);
  };

  return (
    <div>
      <label htmlFor="shabbat-observer">
        <input
          type="checkbox"
          id="shabbat-observer"
          checked={isShabbatObserver}
          onChange={handleChange}
          className="border rounded p-1"
        />
        Observes Shabbat
      </label>
    </div>
  );
};

export default ShabbatCheckbox;
