import React, { useState } from 'react';
import ArrayGenerator from './ArrayGenerator';
import Header from './header';

const NumberGenerator = () => {
  const [number, setNumber] = useState(0);
  const [numbersArray, setNumbersArray] = useState([]);
  
  const handleGenerateClick = () => {
    let color = "red";

    if(number%2 == 0){
        color = "green";
    } else if (number%3 == 0){
        color = "yellow";
    }

    setNumbersArray([...numbersArray, { number: number, color }]);
    setNumber(number + 1);
  };

  return (
    <div>
      <Header onGenerateClick={handleGenerateClick}></Header>
      <ArrayGenerator numbersArray={numbersArray} />
    </div>
  );
};

export default NumberGenerator;
