document.addEventListener("DOMContentLoaded", () => {
  const spotifyLogo = document.querySelector(".spotifyLogo");
  if (spotifyLogo) {
    spotifyLogo.addEventListener("click", () => {
      window.open("https://open.spotify.com/album/0IcJ6YotAaglvsmCpBg6qh?si=8ECwc7IBQ-Oy5PzEKNBPnQ", "_blank");
    });
  }
});
