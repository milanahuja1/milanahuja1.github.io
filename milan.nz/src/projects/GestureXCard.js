import ProjectCard from '../components/ProjectCard';

function GestureXCard() {
  return (
    <ProjectCard label={
      <img src="/projectsPage/gestureX/gestureX.png" alt="GestureX" draggable="false" />
    }>
      <div className="card-section">
        <img src="/projectsPage/gestureX/homePage.jpg" className="card-screenshot" alt="GestureX homescreen" />
        <div className="card-text">
          <p>GestureX is a desktop application which can be used to train a Deep Neural Network (DNN) to classify American Sign Language (ASL) letters.</p>
        </div>
      </div>
      <div className="card-section">
        <img src="/projectsPage/gestureX/trainPage.jpg" className="card-screenshot" alt="GestureX training" />
        <div className="card-text">
          <p>The application can train three different models with customisable hyperparameters — batch size, epochs, and test-train split.</p>
        </div>
      </div>
      <div className="card-section">
        <img src="/projectsPage/gestureX/prediction.png" className="card-screenshot" alt="GestureX prediction" />
        <div className="card-text">
          <p>GestureX displays a confidence graph for each class and highlights the most confident result.</p>
        </div>
      </div>
    </ProjectCard>
  );
}

export default GestureXCard;
