import React from "react";
import "./FAQs.css";

const FAQs = () => (
  <div className='join__container section__padding' id='faq'>
    <div className='join__container1'>
      <div
        className='headtext__cormorant'
        style={{ padding: 10, fontSize: 50 }}
      >
        Empowering Your Potential with UNYN
      </div>
      <div
        className='p__opensans'
        style={{
          textAlign: "center",
          color: "#ffffff",
          marginBottom: 50,
          fontWeight: 200,
        }}
      >
        Join UNYN and unlock endless oportunities for growth
      </div>
    </div>
    <div className='join__container2'>
      <button
        className='custom__button1'
      >
        Join
      </button>
      <button className='btn' >Get evolved</button>
    </div>
  </div>
);

export default FAQs;
