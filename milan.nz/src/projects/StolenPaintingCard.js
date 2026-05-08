import ProjectCard from '../components/ProjectCard';

function StolenPaintingCard() {
  return (
    <ProjectCard label={
      <span className="card-label-stolen">The Stolen Painting</span>
    }>
      <div className="card-section">
        <img src="/projectsPage/stolenPainting/homescreen.jpg" className="card-screenshot" alt="The Stolen Painting homescreen" />
        <div className="card-text">
          <p>A JavaFX based detective game developed in a group of 3. The player chats with suspects and interacts with items to identify the perpetrator.</p>
        </div>
      </div>
      <div className="card-section">
        <img src="/projectsPage/stolenPainting/game.jpg" className="card-screenshot" alt="The Stolen Painting gameplay" />
        <div className="card-text">
          <p>Interactable objects are highlighted in blue. A ChatGPT API powers conversations with suspects, with character context provided via prompt.</p>
        </div>
      </div>
      <div className="card-section">
        <img src="/projectsPage/stolenPainting/game2.jpg" className="card-screenshot" alt="The Stolen Painting computer" />
        <div className="card-text">
          <p>One interactable object is a desktop computer and the player must crack the password to unlock it and find clues.</p>
        </div>
      </div>
    </ProjectCard>
  );
}

export default StolenPaintingCard;
