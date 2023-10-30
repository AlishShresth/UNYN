import React from "react";
import "./Home.css";
import pic from '../../assets/Rectangle 2.png'
const Home = () => (
  <div className='home__container section__padding' id='home'>
    <div className='home__container1 '>
      <h1 className='headtext__cormorant' style={{ marginBottom: 15 }}>
        Empowering Youth <br />
        for a Brighter <br />
        Future
      </h1>
      <p
        className='p__opensans'
        style={{ color: "#888e95", fontSize: 17, marginBottom: 10 }}
      >
        United Youth Network (UNYN) is a dynamic and impactful international
        student society committed to nurturing the talents and potential of
        young individuals across colleges and universities of different
        countries. Join us today to be a part of our mission to create a
        brigther and more promising future.
      </p>
      <div style={{ marginTop: 25, display: "flex", alignItems: "center" }}>
        <button className='custom__button'>Join</button>
        <div
          className='p__opensans'
          style={{
            marginLeft: 20,
            color: "#1aa7ec",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          Learn More&nbsp;&nbsp;{" "}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            class='bi bi-chevron-right'
            viewBox='0 0 16 16'
            style={{ top: 10 }}
          >
            <path
              fill-rule='evenodd'
              d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'
            />
          </svg>
        </div>
      </div>
    </div>
    <div className='home__container2'>
      <img src={pic} />
      <div className='home__empower'>
        <h3 className='p__cormorant'>Empower the Youth Today</h3>
        <p className='p__opensans'>
          Unlock Your Potential and Make a Difference
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex" }}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='40'
            height='40'
            fill='currentColor'
            class='bi bi-three-dots'
            viewBox='0 0 16 16'
            style={{ marginLeft: 10 }}
          >
            <path d='M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z' />
          </svg>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: 70,
          }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            fill='#1275a5'
            class='bi bi-arrow-left-circle'
            viewBox='0 0 16 16'
            style={{ cursor: "pointer" }}
          >
            <path
              fill-rule='evenodd'
              d='M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z'
            />
          </svg>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            fill='#1275a5'
            class='bi bi-arrow-right-circle'
            viewBox='0 0 16 16'
            style={{ cursor: "pointer" }}
          >
            <path
              fill-rule='evenodd'
              d='M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z'
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
