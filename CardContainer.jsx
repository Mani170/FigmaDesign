// CardContainer.jsx
import React from 'react';
import './CardContainer.css'

const CardContainer = ({ title, content }) => {
  return (
    <div className="card-container">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

export default CardContainer;

