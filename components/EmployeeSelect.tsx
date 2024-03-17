//choosing a employee from a list and update.
import { useState } from 'react';
interface EmployeeSelectProps {
  employees: string[];
  onChange: (value: string) => void;
}

const EmployeeSelect: React.FC<EmployeeSelectProps> = ({ employees, onChange }) => {
  const [selectedEmployee, setSelectedEmployee] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedEmployee(e.target.value);
    onChange(e.target.value); // Call the onChange prop function with the new value
  };

  return (
    <div className="mb-4">
      <label htmlFor="employee-select" className="block mb-2 text-sm font-medium text-gray-900">Select Employee:</label>
      <select
        id="employee-select"
        value={selectedEmployee}
        onChange={handleChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option value="">Please choose an employee</option>
        {employees.map((employee) => (
          <option key={employee} value={employee}>
            {employee}
          </option>
        ))}
      </select>
    </div>
  );
};

export default EmployeeSelect;
