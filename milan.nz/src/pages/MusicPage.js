import { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './MusicPage.css';

const BAND_PICS = [
  '/musicPage/bandpics/283974.jpeg',
  '/musicPage/bandpics/DSCF7056.jpeg',
  '/musicPage/bandpics/DSCF7074.jpeg',
  '/musicPage/bandpics/DSCF7223.jpeg',
  '/musicPage/bandpics/DSCF7077.jpeg',
];

function MusicPage() {
  const galleryRef = useRef(null);
  const [lightboxSrc, setLightboxSrc] = useState(null);

  useEffect(() => {
    document.body.classList.add('dark-mode');
    return () => document.body.classList.remove('dark-mode');
  }, []);

  useEffect(() => {
    if (!lightboxSrc) return;
    const onKey = (e) => { if (e.key === 'Escape') setLightboxSrc(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxSrc]);

  useEffect(() => {
    const existingScript = document.querySelector('script[src="https://www.instagram.com/embed.js"]');

    if (existingScript) {
      window.instgrm?.Embeds?.process();
      return;
    }

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.instagram.com/embed.js';
    script.onload = () => window.instgrm?.Embeds?.process();
    document.body.appendChild(script);
  }, []);

  return (
    <div className="musicPage" style={{ cursor: "url('/musicPage/foot.png') 0 0, auto" }}>
      <Navbar />

      <section className="musicIntro">
        <div className="musicIntroText">
          <p className="musicIntroKicker">GUITAR</p>
          <h1>I started playing the guitar when I was 10 and never looked back</h1>
          <p className="musicIntroBody">
            I've played a range of genres from metalcore to neo soul. Check out my current project Footprint:
          </p>
        </div>
        <div className="musicIntroImageFrame">
          <img src="/musicPage/firstpic.jpg" alt="Milan playing guitar" className="musicIntroImage" />
        </div>
      </section>

      <div className="topBar">
        <div className="leftCloudBoundingBox">
          <img src="/musicPage/cloud1.png" alt="Cloud" className="leftCloudImage" />
        </div>
        <div className="footprintLogo">
          <img src="/musicPage/footprintLogo.png" alt="Footprint logo" />
        </div>
        <div className="rightCloudBoundingBox">
          <img src="/musicPage/cloud2.png" alt="Cloud" className="rightCloudImage" />
        </div>
      </div>

      <div className="albumMain">
        <img src="/musicPage/album_cover.jpg" alt="Album cover" className="albumCover" />
      </div>

      <div className="musicSubtitle">
        <p>We recently released our debut self-titled EP.</p>
      </div>
      <p className="bodyText">It's really cool and you should listen to it on Spotify or YouTube.</p>

      <div className="linkContainer">
        <a href="https://open.spotify.com/album/0IcJ6YotAaglvsmCpBg6qh?si=bsdE0D-AR12QI5TcdneohA" target="_blank" rel="noreferrer">
          <img src="/musicPage/spotify.png" className="spotifyLogo" alt="Spotify logo" />
        </a>
        <a href="https://www.youtube.com/watch?v=exekHnjoyoM&list=PLWw3ZlyPoHmEEkE2xXz9ZhMaNR-wu_OFy" target="_blank" rel="noreferrer">
          <img src="/musicPage/youtube.png" className="youtubeLinkLogo" alt="YouTube logo" />
        </a>
      </div>

      <div ref={galleryRef} className="darkSection">
        <div className="bandPicsGallery">
          {BAND_PICS.map((src, i) => (
            <img key={i} src={src} alt="Footprint band" className="bandPic" onClick={() => setLightboxSrc(src)} />
          ))}
        </div>

        <div className="instagramEmbedSection">
          <blockquote
            className="instagram-media"
            data-instgrm-captioned=""
            data-instgrm-permalink="https://www.instagram.com/reel/C8YgyDAycSL/"
            data-instgrm-version="14"
          >
            <a href="https://www.instagram.com/reel/C8YgyDAycSL/" target="_blank" rel="noreferrer">
              View this post on Instagram
            </a>
          </blockquote>
        </div>

        <div className="youtubeEmbed">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/XyIuLU9mOT4?si=wh1Gcuep01jzvFq6" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/dB-mZLcyMko?si=I7NF4sInhlMqM7A7" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/xM89v8pojOk?si=-z_T2kotlldl8M23" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/RY1ZMDwD04U?si=jqhiIKSj1sr8tjtQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>

      <Footer />

      {lightboxSrc && (
        <div className="lightboxOverlay" onClick={() => setLightboxSrc(null)}>
          <img src={lightboxSrc} alt="Footprint band" className="lightboxImg" />
        </div>
      )}
    </div>
  );
}

export default MusicPage;
