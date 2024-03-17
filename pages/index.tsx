import React, { useState } from 'react';
import EmployeeSelect from '../components/EmployeeSelect';
import PartnerCheckbox from '../components/PartnerCheckbox';
import ChildrenInput from '../components/ChildrenInput';
import ChildrenInput18 from '../components/ChildrenInput18';
import ShabbatCheckbox from '../components/ShabbatCheckbox';
import RoomSelect from '../components/RoomSelect';
import AttendeesInput from '../components/AttendeesInput';
import ConnectionDoorCheckbox from '../components/ConnectionDoorCheckbox';
import TransportationSelect from '../components/TransportationSelect';
import '../styles/globals.css';

const IndexPage: React.FC = () => {
  const employees = ['Employee 1', 'Employee 2', 'Employee 3', 'Employee 4', 'Employee 5'];
  const roomNumbers = [0, 1, 2, 3];
  const transportationOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [formData, setFormData] = useState({
    employee: '',
    partner: false,
    children: 0,
    children18: 0,
    shabbat: false,
    roomNumber: '',
    attendees: 0,
    connectingDoor: false,
    transportation: '',
    basketballTournament: false,
  });

  const [totalPrice, setTotalPrice] = useState(0);
  const [showBasketballCheckbox, setShowBasketballCheckbox] = useState(false);

  //Function to calculate the total cost.
  const calculatePrice = () => {
    let totalCost = 520; // Base price(including participation in a team evening).
    totalCost += formData.partner ? 120 : 0; //Add a partner(including participation in a team evening).
    totalCost += formData.children * 60;  //Add children under 18 (including participation in a team evening).
    totalCost += formData.children18 * 270; // Add childrens over 18 (including participation in a team evening).
    if (formData.transportation!=='')  
    {
        totalCost += formData.attendees ? formData.attendees * 25 : 0;  // Add transportation for each of those attendees.
    }
     let result= Math.floor(formData.attendees /3); //Add a room automatically if the attendees is more than three.
    if (result !==1)
    {
        totalCost += (result-1) * 500;
    }
    else{
      totalCost += 500;
    }

    const roomCount = parseInt(formData.roomNumber); //Add a room by choosing of the user,if he dont want sign 0.
    if (formData.roomNumber !== '')
    {
        totalCost += roomCount * 500; 
        console.log(totalCost);

    }
    // Shabbat discount
    if (formData.shabbat) {
      totalCost *= 0.82;
      console.log(totalCost);

    }

    return totalCost;
  };

  /*Function to submits form data to a specified API endpoint using a POST request 
  and alerts the user of success or any errors encountered during submission.*/
  const submitFormData = async () => {
    try {
      const response = await fetch('/api/webhooks/route', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Unknown error');
      }
      alert('Form submitted successfully');
    } catch (error) {
        const message = (error as Error).message;
        console.error('An error occurred:', message);
        alert(`An error occurred while submitting the form: ${message}`);
      }
  };
  /*Function to handles form submission by preventing the default form action, 
  calculating the total price, updating the state with this price.*/
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const price = calculatePrice();
    setTotalPrice(price);
    await submitFormData();
  };
  /* Function to updates form data state based on input changes and toggles the visibility of a 
  basketball checkbox based on the number of attendees.*/ 
  const handleChange = (name: string, value: any) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === 'attendees' ) {
      const attendeesCount = parseInt(value, 10) || 0;
      setShowBasketballCheckbox(attendeesCount > 5);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Team Event Registration</h1>
      <h3>***Please fill all the fields including zeros***</h3>
      <form onSubmit={handleSubmit}>
        <EmployeeSelect employees={employees} onChange={(value) => handleChange('employee', value)} />
        <PartnerCheckbox onChange={(value) => handleChange('partner', value)} />
        <ChildrenInput onChange={(value) => handleChange('children', value)} />
        <ChildrenInput18 onChange={(value) => handleChange('children18', value)} />
        <ShabbatCheckbox onChange={(value) => handleChange('shabbat', value)} />
        <RoomSelect roomNumbers={roomNumbers} onChange={(value) => handleChange('roomNumber', value)} />
        <AttendeesInput onChange={(value) => handleChange('attendees', value)} />
        <ConnectionDoorCheckbox onChange={(value) => handleChange('connectingDoor', value)} />
        <TransportationSelect options={transportationOptions} onChange={(value) => handleChange('transportation', value)} />
        {showBasketballCheckbox && (
          <div>
            <label htmlFor="basketball-tournament">
              <input
                type="checkbox"
                id="basketball-tournament"
                checked={formData.basketballTournament}
                onChange={(e) => handleChange('basketballTournament', e.target.checked)}
              />
              Register for the Basketball Tournament
            </label>
          </div>
        )}
        <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
          Submit
        </button>
        <div className="image-container">
    </div>
      </form>
      <p className="mt-4">Total Price: ${totalPrice.toFixed(2)}</p>
      <h2>Enjoy And Let's Make Fun!</h2>
    </div>
  );
};
export default IndexPage;
