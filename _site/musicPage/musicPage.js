document.addEventListener("DOMContentLoaded", () => {
  const spotifyLink = "https://open.spotify.com/album/0IcJ6YotAaglvsmCpBg6qh?si=8ECwc7IBQ-Oy5PzEKNBPnQ";
  const youtubeLink = "https://www.youtube.com/watch?v=exekHnjoyoM&list=PLWw3ZlyPoHmEEkE2xXz9ZhMaNR-wu_OFy";

  const spotifyLogo = document.querySelector(".spotifyLogo");
  const youtubeLogo = document.querySelector(".youtubeLogo");

  if (spotifyLogo) {
    spotifyLogo.addEventListener("click", () => {
      window.open(spotifyLink, "_blank");
    });
  }

  if (youtubeLogo) {
    youtubeLogo.addEventListener("click", () => {
      window.open(youtubeLink, "_blank");
    });
  }
});
