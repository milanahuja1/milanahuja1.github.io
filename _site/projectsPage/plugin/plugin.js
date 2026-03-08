document.addEventListener("DOMContentLoaded", () => {
  const githubLink = "https://github.com/milanahuja1/EQ-Plugin";
  const githubLogo = document.querySelector(".githubLogo");

  if (githubLogo) {
    githubLogo.addEventListener("click", () => {
      window.open(githubLink, "_blank");
    });
  }
});
