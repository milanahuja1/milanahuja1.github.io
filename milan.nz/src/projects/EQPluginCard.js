import ProjectCard from '../components/ProjectCard';
import GithubButton from '../components/GithubButton';

function EQPluginCard() {
  return (
    <ProjectCard label={
      <span className="card-label-plugin">EQ Plugin</span>
    }>
      <div className="card-section">
        <div className="card-text">
          <p>A work in progress — an equaliser VST plugin built with the JUCE framework, learning C++ and audio DSP along the way.</p>
          <GithubButton url="https://github.com/milanahuja1/EQ-Plugin" />
        </div>
      </div>
    </ProjectCard>
  );
}

export default EQPluginCard;
