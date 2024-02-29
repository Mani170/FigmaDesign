// App.jsx
import React from 'react';
import CardContainer from './components/CardContainer';
import './App.css';

const App = () => {
  return (
    <div>
      <h1 class="two">How <span class="one">Investo</span> Helps You?</h1>
      <div className="container">
        <CardContainer 
          title="Choose your own Advisor." 
          content="Select and Subscribe to your ideal investment Advisor." 
        />
        <CardContainer 
          title="Personalized Investment Plans." 
          content="Share your investment details, risk appetite, and receive a personalized investment plan from your advisor." 
        />
        <CardContainer 
          title="Investment Advisor Verdict." 
          content="Advisor tracks the portfolio, advices withdrawals when needed." 
        />
      </div>
    </div>
  );
}

export default App;

