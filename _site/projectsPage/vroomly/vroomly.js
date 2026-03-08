document.addEventListener("DOMContentLoaded", () => {
  const githubLink = "https://github.com/COMPSYS302/2025-project-java-2025-project-java-team-5";

  const githubLogo = document.querySelector(".githubLogo");

  if (githubLogo) {
    githubLogo.addEventListener("click", () => {
      window.open(githubLink, "_blank");
    });
  }
});
