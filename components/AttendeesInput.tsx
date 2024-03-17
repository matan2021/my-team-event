//choosing number of attendees and update.
import React, { useState } from 'react';
interface AttendeesInputProps {
  onChange: (value: string) => void;
}

const AttendeesInput: React.FC<AttendeesInputProps> = ({ onChange }) => {
  const [numberOfAttendees, setNumberOfAttendees] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumberOfAttendees(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div>
      <label htmlFor="attendees-input">Total Number of Attendees:</label>
      <input
        type="number"
        id="attendees-input"
        value={numberOfAttendees}
        onChange={handleChange}
      />
    </div>
  );
};

export default AttendeesInput;
