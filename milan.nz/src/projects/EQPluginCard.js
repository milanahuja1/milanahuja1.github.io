import ProjectCard from '../components/ProjectCard';
import GithubButton from '../components/GithubButton';

function EQPluginCard() {
  return (
    <ProjectCard label={
      <span className="card-label-plugin">EQ Plugin</span>
    }>
      <div className="card-section">
        <img src="/projectsPage/plugin/eq-plugin.gif" className="card-screenshot" alt="EQ Plugin interface" />
        <div className="card-text">
          <p>A work in progress equaliser plugin built with JUCE while learning C++, real-time audio processing, and the structure of a modern VST project.</p>
          <p>The current build includes low and high cut filters, a peak band, custom rotary controls, and a live frequency response curve so changes can be heard and seen while shaping a sound.</p>
          <p>Most of the development has been about connecting the audio engine to the interface: exposing parameters safely, smoothing control changes, and keeping the processing responsive enough for use inside a DAW.</p>
          <GithubButton url="https://github.com/milanahuja1/EQ-Plugin" />
        </div>
      </div>
    </ProjectCard>
  );
}

export default EQPluginCard;
