import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './ContactPage.css';

const links = [
  { label: 'EMAIL', href: 'mailto:milannahuja2@gmail.com' },
  { label: 'LINKEDIN', href: 'https://www.linkedin.com/in/milan-ahuja-9429b3238/' },
  { label: 'INSTAGRAM', href: 'https://www.instagram.com/milansguitaraccount/' },
  { label: 'YOUTUBE', href: 'https://www.youtube.com/@milansguitaraccount' },
];

function ContactPage() {
  return (
    <div className="contactPage">
      <Navbar />
      <div className="contactContent">
        <h1 className="contactTitle">CONTACT</h1>
        <div className="contact-links">
          {links.map(({ label, href }) => (
            <a
              key={label}
              className="contactLink"
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noreferrer"
            >
              {label}
              <span className="contactLink-arrow">→</span>
            </a>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactPage;
