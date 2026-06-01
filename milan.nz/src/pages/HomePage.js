import { useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PhotoReveal from '../components/PhotoReveal';
import CodeReveal from '../components/CodeReveal';
import MusicReveal from '../components/MusicReveal';
import './HomePage.css';

function HomePage() {
  const firstImageRef = useRef(null);

  return (
    <div className="homePage" style={{ cursor: "url('/homePage/images/cursor2.png') 0 0, auto" }}>
      <Navbar />
      <PhotoReveal className="introReveal">
        <div className="topSectionContainer">
          <h1 className="homeTitle">welcome to milan's website</h1>
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
      </PhotoReveal>

      <CodeReveal className="codingSection">
        <div className="homeContent">
          <img src="/homePage/images/coding.JPG" alt="Milan doing some coding" className="rectanglePicture" />
          <div className="homeContentText">
            <p className="aboutPageText">I'm in my final year of software engineering at the University of Auckland.</p>
            <Link to="/projects" className="homeButton">Projects →</Link>
          </div>
        </div>
      </CodeReveal>

      <MusicReveal className="musicSection">
        <div className="homeContent">
          <img src="/homePage/images/guitar.gif" alt="GIF of Milan playing the guitar" className="rectanglePicture rectanglePicture--small" />
          <div className="homeContentText">
            <p className="aboutPageText">I also play the guitar in a band called footprint.</p>
            <Link to="/music" className="homeButton">Music →</Link>
          </div>
        </div>
      </MusicReveal>

      <Footer />
    </div>
  );
}

export default HomePage;
