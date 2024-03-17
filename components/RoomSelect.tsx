//choosing number of rooms and update.
import React, { useState } from 'react';
interface RoomSelectProps {
  roomNumbers: number[];
  onChange: (value: string) => void;
}

const RoomSelect: React.FC<RoomSelectProps> = ({ roomNumbers, onChange }) => {
  const [selectedRoom, setSelectedRoom] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRoom(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div>
      <label htmlFor="room-select">Number of Rooms:</label>
      <select id="room-select" value={selectedRoom} onChange={handleChange}>
        <option value="">Please select a room</option>
        {roomNumbers.map((number) => (
          <option key={number} value={number.toString()}>
            {number}
          </option>
        ))}
      </select>
      <div>***Every three pepole get a room automatically,if you want more you can add in the pervious line!</div>
    </div>
  );
};

export default RoomSelect;


