import React from "react";
import "./AboutUs.css";
import pic from "../../assets/Rectangle 5.png";
const AboutUs = () => (
  <div className='about__container section__padding' id='about'>
    <div className='about__container1 '>
      <div className='container11 headtext__cormorant ' style={{fontSize: 44,lineHeight:1.3,fontWeight:700}}>
        Empowering Youth for a Brighter Future:{" "}
        <span style={{ color: "#1275a5" }}>
          UNYN's Impact on Youth Individuals
        </span>
      </div>
      <div className='p__opensans' style={{ color: "#888e95", width: "40%" }}>
        United Youth Network (UNYN) is dedicated to empowering young individuals
        by providing them with opportunities for growth and development. Throug
        our international student society, we aim to nurture their talents and
        unlock their full potential. By investing in the youth today, we believe
        that we can create a brighter and more promising future for tomorrow.
      </div>
    </div>
    <img src={pic} />
  </div>
);

export default AboutUs;
