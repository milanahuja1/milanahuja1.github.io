import ProjectCard from '../components/ProjectCard';
import GithubButton from '../components/GithubButton';

function VroomlyCard() {
  return (
    <ProjectCard label={
      <img src="/projectsPage/vroomly/vroomlyLogo.png" alt="Vroomly" draggable="false" />
    }>
      <div className="card-phones-row">
        <img src="/projectsPage/vroomly/phone1.jpeg" className="card-screenshot-sm" alt="Vroomly homescreen" style={{ width: '120px' }} />
        <img src="/projectsPage/vroomly/phone2.jpeg" className="card-screenshot-sm" alt="Vroomly screenshot" style={{ width: '120px' }} />
      </div>
      <div className="card-section">
        <div className="card-text">
          <p>Vroomly is an android app which allows users to purchase all kinds of vehicles, from fighter jets to jetskis.</p>
          <p>Developed in collaboration with two other developers for the course COMPSYS 306.</p>
        </div>
      </div>
    </ProjectCard>
  );
}

export default VroomlyCard;
