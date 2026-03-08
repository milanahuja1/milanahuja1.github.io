document.addEventListener("DOMContentLoaded", () => {
  const githubLink = "https://github.com/COMPSYS302/project-deep-neural-network-python-dnn_team_5";
  const githubLogo = document.querySelector(".githubLogo");

  if (githubLogo) {
    githubLogo.addEventListener("click", () => {
      window.open(githubLink, "_blank");
    });
  }
});
