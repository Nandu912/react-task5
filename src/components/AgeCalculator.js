import React, { useState } from 'react';

function AgeCalculator() {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    const birthDate = new Date(dob);
    const today = new Date();
    const ageInMilliseconds = today - birthDate;
    const ageInYears = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));

    setAge(ageInYears);
  };

  const handleInputChange = (e) => {
    setDob(e.target.value);
  };

  return (
    <div className="container">
      <h1>Age Calculator</h1>
      <h2>Enter your date of birth</h2>
      <input
        type="date"
        value={dob}
        onChange={handleInputChange}
      />
      <button onClick={calculateAge} className="calculate-button">Calculate Age</button>
      {age !== '' && <p>You are {age} years old</p>}
    </div>
  );
}

export default AgeCalculator;
