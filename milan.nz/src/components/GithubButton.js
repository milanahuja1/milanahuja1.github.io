function GithubButton({ url }) {
  return (
    <a className="card-github" href={url} target="_blank" rel="noreferrer">
      <img src="/projectsPage/github.png" alt="" />
      View on GitHub
    </a>
  );
}

export default GithubButton;
