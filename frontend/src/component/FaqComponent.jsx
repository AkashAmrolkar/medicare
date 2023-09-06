import React from 'react'
import { useState } from 'react';

import { BsPlusSquare, BsDash } from 'react-icons/bs'
const FaqComponent = ({question, answer}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="border rounded-lg p-4 mb-5">
        <div className="flex items-center justify-between cursor-pointer" onClick={toggleAccordion}>
          <h3 className="text-lg font-semibold">{question}</h3>
          {isOpen ? <BsDash className="w-6 h-6" /> : <BsPlusSquare className="w-6 h-6" />}
        </div>
        {isOpen && <p className="mt-2 text-gray-600">{answer}</p>}
      </div>
    );
}

export default FaqComponent