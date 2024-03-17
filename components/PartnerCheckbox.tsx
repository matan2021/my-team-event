//choosing if the user want to add a partner and update.
import React, { useState } from 'react';
interface PartnerCheckboxProps {
  onChange: (value: boolean) => void;
}

const PartnerCheckbox: React.FC<PartnerCheckboxProps> = ({ onChange }) => {
  const [isPartnerJoining, setIsPartnerJoining] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsPartnerJoining(e.target.checked);
    onChange(e.target.checked);
  };

  return (
    <div>
      <label htmlFor="partner-checkbox">
        <input
          type="checkbox"
          id="partner-checkbox"
          checked={isPartnerJoining}
          onChange={handleChange}
        />
        Partner Joining
      </label>
    </div>
  );
};

export default PartnerCheckbox;
