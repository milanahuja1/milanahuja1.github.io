import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './ProjectsPage.css';

function Accordion({ summary, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="accordion">
      <div
        className="accordion-summary"
        role="button"
        tabIndex={0}
        aria-expanded={open}
        onClick={() => setOpen(o => !o)}
        onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setOpen(o => !o); }}
      >
        {summary}
        <span className={`accordion-arrow${open ? ' open' : ''}`}>&gt;</span>
      </div>
      {open && <div className="accordion-panel">{children}</div>}
    </div>
  );
}

function ProjectsPage() {
  const openGithub = url => window.open(url, '_blank');

  return (
    <div className="projectsPage">
      <Navbar />
      <p className="pageTitle">SOFTWARE PROJECTS</p>

      <div className="accordions">
      {/* Vroomly */}
      <Accordion summary={
        <img src="/projectsPage/vroomly/vroomlyLogo.png" alt="Vroomly logo" draggable="false" />
      }>
        <div className="panel-images-row">
          <img src="/projectsPage/vroomly/phone1.jpeg" className="panel-screenshot-sm" alt="Vroomly homescreen" />
          <img src="/projectsPage/vroomly/phone2.jpeg" className="panel-screenshot-sm" alt="Vroomly screenshot" />
          <img
            src="/projectsPage/github.png"
            className="panel-githubLogo"
            alt="View on Github"
            onClick={() => openGithub('https://github.com/COMPSYS302/2025-project-java-2025-project-java-team-5')}
          />
        </div>
        <p className="panel-subHeading">Vroomly is an android app which allows users to purchase all kinds of vehicles, from fighter jets to jetskis.</p>
        <p className="panel-subHeading">This app was developed in collaboration with two other developers for the course COMPSYS 306. We were tasked with building an android storefront app.</p>
      </Accordion>

      {/* GestureX */}
      <Accordion summary={
        <img src="/projectsPage/gestureX/gestureX.png" alt="GestureX Logo" draggable="false" />
      }>
        <div className="panel-topSection">
          <div className="panel-horizontalSection">
            <img src="/projectsPage/gestureX/homePage.jpg" className="panel-screenshot" alt="GestureX homescreen" />
            <div className="panel-columnSection">
              <img
                src="/projectsPage/github.png"
                className="panel-githubLogo"
                alt="View on Github"
                onClick={() => openGithub('https://github.com/COMPSYS302/project-deep-neural-network-python-dnn_team_5')}
              />
              <p className="panel-subHeading">GestureX is a desktop application which can be used to train a Deep Neural Network (DNN) to classify American sign language (ASL) letters. GestureX can be used to train DNN models and can also be used to test these models and classify these images.</p>
            </div>
          </div>
          <div className="panel-horizontalSection">
            <img src="/projectsPage/gestureX/trainPage.jpg" className="panel-screenshot" alt="GestureX screenshot" />
            <div className="panel-columnSection">
              <p className="panel-subHeading">The application can train three different models and has customisable hyperparameters for batch size, number of epochs and allows the user to adjust the test-train split of the dataset.</p>
            </div>
          </div>
          <div className="panel-horizontalSection">
            <img src="/projectsPage/gestureX/prediction.png" className="panel-screenshot" alt="GestureX screenshot" />
            <div className="panel-columnSection">
              <p className="panel-subHeading">GestureX will display a graph showing its confidence for each class and highlight the most confident result.</p>
            </div>
          </div>
        </div>
      </Accordion>

      {/* The Stolen Painting */}
      <Accordion summary={
        <span className="stolenPaintingLabel">The Stolen Painting</span>
      }>
        <div className="panel-topSection">
          <div className="panel-horizontalSection">
            <img src="/projectsPage/stolenPainting/homescreen.jpg" className="panel-screenshot" alt="The Stolen Painting homescreen" />
            <div className="panel-columnSection">
              <p className="panel-subHeading">The Stolen Painting is a JavaFX based game, which was developed in a group of 3 as 'training' software for aspiring private investigators. In the game, the player can chat with suspects and interact with items with the final goal of guessing the perpetrator.</p>
            </div>
          </div>
          <div className="panel-horizontalSection">
            <img src="/projectsPage/stolenPainting/game.jpg" className="panel-screenshot" alt="The Stolen Painting screenshot" />
            <div className="panel-columnSection">
              <p className="panel-subHeading">The interactable objects are highlighted in blue. Additionally, the game used a ChatGPT API to facilitate 'discussions' with the suspects. The game gives a prompt to ChatGPT to help it understand the character before the player begins an interaction.</p>
            </div>
          </div>
          <div className="panel-horizontalSection">
            <img src="/projectsPage/stolenPainting/game2.jpg" className="panel-screenshot" alt="The Stolen Painting screenshot" />
            <div className="panel-columnSection">
              <p className="panel-subHeading">One of the interactable objects is a desktop computer. The player must figure out the password and can use this to unlock the computer and obtain clues from it.</p>
            </div>
          </div>
        </div>
      </Accordion>

      {/* milan.nz */}
      <Accordion summary={
        <span className="websiteLabel">milan.nz</span>
      }>
        <div className="panel-topSection">
          <div className="panel-horizontalSection">
            <img src="/projectsPage/website/homePage.jpg" className="panel-screenshot" alt="Website homescreen" />
            <div className="panel-columnSection">
              <img
                src="/projectsPage/github.png"
                className="panel-githubLogo"
                alt="View on Github"
                onClick={() => openGithub('https://github.com/milanahuja1/milanahuja1.github.io')}
              />
              <p className="panel-subHeading">Considering you are reading this, you have probably already seen my website. I made this with the goal of learning some basic web development and to have another creative outlet. I have enjoyed the process of designing this webpage and have spent a fair amount of time on the CSS styling.</p>
            </div>
          </div>
          <div className="panel-horizontalSection">
            <img src="/projectsPage/website/musicPage.jpg" className="panel-screenshot" alt="Website screenshot" />
            <div className="panel-columnSection">
              <p className="panel-subHeading">The music page is definitely my favourite page of this website. I used some of my band's imagery and learnt how to animate it using CSS and a little JavaScript.</p>
            </div>
          </div>
          <div className="panel-horizontalSection">
            <img src="/musicPage/cloud1.png" className="panel-screenshot" alt="Cloud animation example" />
            <div className="panel-columnSection">
              <p className="panel-subHeading">An example of a moving cloud.</p>
            </div>
          </div>
        </div>
      </Accordion>

      {/* EQ Plugin */}
      <Accordion summary={
        <span className="pluginLabel">EQ Plugin</span>
      }>
        <div className="panel-topSection">
          <div className="panel-horizontalSection">
            <div className="panel-columnSection">
              <img
                src="/projectsPage/github.png"
                className="panel-githubLogo"
                alt="View on Github"
                onClick={() => openGithub('https://github.com/milanahuja1/EQ-Plugin')}
              />
              <p className="panel-subHeading">This project is still a work in progress. I am developing an equaliser VST plugin using the JUCE framework. Through this, I am learning C++ development and how to work with audio DSP.</p>
            </div>
          </div>
        </div>
      </Accordion>

      </div>
      <Footer />
    </div>
  );
}

export default ProjectsPage;
