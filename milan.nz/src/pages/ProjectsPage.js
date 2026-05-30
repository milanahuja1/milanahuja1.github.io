import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import VroomlyCard from '../projects/VroomlyCard';
import GestureXCard from '../projects/GestureXCard';
import StolenPaintingCard from '../projects/StolenPaintingCard';
import MilanNzCard from '../projects/MilanNzCard';
import EQPluginCard from '../projects/EQPluginCard';
import './ProjectsPage.css';

function ProjectsPage() {
  return (
    <div className="projectsPage">
      <Navbar />
      <p className="pageTitle">PROJECTS</p>
      <div className="accordions">
        <EQPluginCard />
        <MilanNzCard />
        <GestureXCard />
        <VroomlyCard />
        <StolenPaintingCard />
      </div>
      <Footer />
    </div>
  );
}

export default ProjectsPage;
