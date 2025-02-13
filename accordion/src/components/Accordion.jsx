import React, { useState } from 'react';
import faqs from '../assets/faqs.json';

const Accordion = () => {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
    console.log(openId)
    console.log(id)
    
  };

  

  return (
    <div className="accor">
      {faqs.map(({ id, question, answer }) => (
        <div key={id}>
          <h3 onClick={() => handleToggle(id)}>{question}</h3>
          {openId === id && <p>{answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
