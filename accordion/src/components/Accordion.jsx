import React, { useState, useEffect } from 'react';
import faqs from '../assets/faqs.json';


const Accordion = () => {
  const [openId, setOpenId] = useState(null);
  const [faqsData, setFaqsData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/FAQ")
      .then(response => response.json())
      .then(data => setFaqsData(data))
      .catch(() => setFaqsData(faqs)); // Fallback to local JSON if fetch fails
  }, []);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="accordion">
      {faqsData.map(({ id, question, answer }) => (
        <div key={id} className="accordion-item">
          <div className="accordion-header" onClick={() => handleToggle(id)}>
            <h3 className="question-text">{question}</h3>
          </div>


          
          {openId === id && <p>{answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
