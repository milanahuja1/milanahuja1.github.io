import ProjectCard from '../components/ProjectCard';
import GithubButton from '../components/GithubButton';

function MilanNzCard() {
  return (
    <ProjectCard label={
      <span className="card-label-website">milan.nz</span>
    }>
      <div className="card-section">
        <img src="/projectsPage/website/homePage.jpg" className="card-screenshot" alt="Website homepage" />
        <div className="card-text">
          <p>You're looking at it. Built to learn web development and as a creative outlet — originally raw HTML/CSS, now rebuilt in React.</p>
          <GithubButton url="https://github.com/milanahuja1/milanahuja1.github.io" />
        </div>
      </div>
      <div className="card-section">
        <img src="/projectsPage/website/musicPage.jpg" className="card-screenshot" alt="Music page" />
        <div className="card-text">
          <p>The music page is my favourite — animated clouds and glowing logos built with CSS keyframes.</p>
        </div>
      </div>
    </ProjectCard>
  );
}

export default MilanNzCard;
