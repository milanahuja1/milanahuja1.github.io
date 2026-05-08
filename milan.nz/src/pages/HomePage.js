import { useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './HomePage.css';

function HomePage() {
  const firstImageRef = useRef(null);

  return (
    <div className="homePage" style={{ cursor: "url('/homePage/images/cursor2.png') 0 0, auto" }}>
      <Navbar />
      <div className="topSectionContainer">
        <h1 className="homeTitle">Welcome to Milan's Website</h1>
        <button
          className="arrow"
          onClick={() => firstImageRef.current?.scrollIntoView({ behavior: 'smooth' })}
        >
          ↓
        </button>
      </div>

      <div ref={firstImageRef} className="homeContent">
        <img src="/homePage/images/bike.png" alt="Milan on a bike" className="profilePicture" />
      </div>
      <div className="homeContent">
        <p className="aboutPageText">Hi, I'm Milan. (米兰)</p>
      </div>

      <div className="homeContent">
        <img src="/homePage/images/coding.JPG" alt="Milan doing some coding" className="rectanglePicture" />
        <p className="aboutPageText">I'm in my final year of software engineering at the University of Auckland.</p>
      </div>

      <div className="homeContent">
        <img src="/homePage/images/guitar.gif" alt="GIF of Milan playing the guitar" className="rectanglePicture" />
        <p className="aboutPageText">I also play the guitar in a band called footprint.</p>
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;
