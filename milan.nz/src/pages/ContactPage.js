import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './ContactPage.css';

function ContactPage() {
  return (
    <div>
      <Navbar />
      <div className="contactContent">
        <h1 className="contactTitle">CONTACT</h1>
        <h1><a className="contactLink" href="mailto:milannahuja2@gmail.com">EMAIL</a></h1>
        <h1><a className="contactLink" href="https://www.linkedin.com/in/milan-ahuja-9429b3238/" target="_blank" rel="noreferrer">LINKEDIN</a></h1>
        <h1><a className="contactLink" href="https://www.instagram.com/milansguitaraccount/" target="_blank" rel="noreferrer">INSTAGRAM</a></h1>
        <h1><a className="contactLink" href="https://www.youtube.com/@milansguitaraccount" target="_blank" rel="noreferrer">YOUTUBE</a></h1>
      </div>
      <Footer />
    </div>
  );
}

export default ContactPage;
