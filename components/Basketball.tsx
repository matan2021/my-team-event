//choosing option to register to basketball tournament and update,possible onlly if the number of atendees is more than 5.' 
import React, { useState } from 'react';
import AttendeesInput from './AttendeesInput';
const Basketball: React.FC = () => {
  const [attendees, setAttendees] = useState('0');
  const [showBasketballCheckbox, setShowBasketballCheckbox] = useState(false);
  const [basketballTournament, setBasketballTournament] = useState(false);

  const handleAttendeesChange = (value: string) => {
    setAttendees(value);
    const numAttendees = parseInt(value, 10);
    // Check for NaN to ensure only valid numbers proceed
    if (!isNaN(numAttendees)) {
      if (numAttendees > 5) {
        setShowBasketballCheckbox(true);
      } else {
        setShowBasketballCheckbox(false);
        setBasketballTournament(false);
      }
    }
  };

  return (
    <div>
      <AttendeesInput onChange={handleAttendeesChange} />
      {showBasketballCheckbox && (
        <div>
          <label htmlFor="basketball-checkbox">
            <input
              type="checkbox"
              id="basketball-checkbox"
              checked={basketballTournament}
              onChange={(e) => setBasketballTournament(e.target.checked)}
            />
            Register for the Basketball Tournament
          </label>
        </div>
      )}
    </div>
  );
};

export default Basketball;
