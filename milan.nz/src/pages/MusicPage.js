import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './MusicPage.css';

const ALBUM_COUNT_ROW1 = 7;
const ALBUM_COUNT_ROW2 = 5;

function MusicPage() {
  return (
    <div className="musicPage" style={{ cursor: "url('/musicPage/foot.png') 0 0, auto" }}>
      <Navbar />

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

      <div className="albumRow">
        {Array.from({ length: ALBUM_COUNT_ROW1 }).map((_, i) => (
          <img key={i} src="/musicPage/album_cover.jpg" alt="Album cover" className="albumCover" />
        ))}
      </div>
      <div className="albumRow">
        {Array.from({ length: ALBUM_COUNT_ROW2 }).map((_, i) => (
          <img key={i} src="/musicPage/album_cover.jpg" alt="Album cover" className="albumCover" />
        ))}
      </div>
      <div className="albumMain">
        <img src="/musicPage/album_cover.jpg" alt="Album cover" className="albumCover" />
      </div>

      <div className="musicSubtitle">
        <p>We recently released our debut self-titled EP.</p>
      </div>
      <p className="bodyText">It's really cool and you should listen to it on Spotify or YouTube.</p>

      <div className="linkContainer">
        <div>
          <img src="/musicPage/spotify.png" className="spotifyLogo" alt="Spotify logo" />
        </div>
        <div>
          <img src="/musicPage/youtube.png" className="youtubeLinkLogo" alt="YouTube logo" />
        </div>
      </div>

      <div className="youtubeEmbed">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/XyIuLU9mOT4?si=wh1Gcuep01jzvFq6" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/dB-mZLcyMko?si=I7NF4sInhlMqM7A7" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/xM89v8pojOk?si=-z_T2kotlldl8M23" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/RY1ZMDwD04U?si=jqhiIKSj1sr8tjtQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>

      <Footer />
    </div>
  );
}

export default MusicPage;
