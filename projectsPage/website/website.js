document.addEventListener("DOMContentLoaded", () => {
  const githubLink = "https://github.com/milanahuja1/milanahuja1.github.io";
  const githubLogo = document.querySelector(".githubLogo");

  if (githubLogo) {
    githubLogo.addEventListener("click", () => {
      window.open(githubLink, "_blank");
    });
  }
});
