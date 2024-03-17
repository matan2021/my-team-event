//choosing if the user want to add a connecting door and update.
import React, { useState } from 'react';
interface ConnectingDoorCheckboxProps {
  onChange: (value: boolean) => void;
}

const ConnectionDoorCheckbox: React.FC<ConnectingDoorCheckboxProps> = ({ onChange }) => {
  const [isConnectingDoorNeeded, setIsConnectingDoorNeeded] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsConnectingDoorNeeded(e.target.checked);
    onChange(e.target.checked);
  };

  return (
    <div>
      <label htmlFor="connecting-door-checkbox">
        <input
          type="checkbox"
          id="connecting-door-checkbox"
          checked={isConnectingDoorNeeded}
          onChange={handleChange}
        />
        Need a connecting door?
      </label>
    </div>
  );
};

export default ConnectionDoorCheckbox;
