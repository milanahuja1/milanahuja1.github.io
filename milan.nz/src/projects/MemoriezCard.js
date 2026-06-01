import ProjectCard from '../components/ProjectCard';
import GithubButton from '../components/GithubButton';

function MemoriezCard() {
  return (
    <ProjectCard label={
      <span className="card-label-memoriez">Memoriez</span>
    }>
      <div className="card-phones-row">
        <img src="/memoriez/screen1.png" className="card-screenshot-sm card-screenshot-memoriez" alt="Memoriez screen 1" draggable="false" />
        <img src="/memoriez/screen2.png" className="card-screenshot-sm card-screenshot-memoriez" alt="Memoriez screen 2" draggable="false" />
        <img src="/memoriez/screen3.png" className="card-screenshot-sm card-screenshot-memoriez" alt="Memoriez screen 3" draggable="false" />
      </div>
      <div className="card-section">
        <div className="card-text">
          <p>Memoriez was built as a cross-platform Expo React Native app for iOS, Android, and web, backed by a TypeScript Node.js/Express REST API.</p>
          <p>The app uses Mapbox for its interactive globe-based memory map, Clerk for authentication, PostgreSQL on Supabase with Prisma ORM for structured data, and Supabase Storage/S3 signed URLs for secure media uploads.</p>
          <p>Push notifications are handled through the Expo Push API, with scheduled anniversary reminders run through GitHub Actions.</p>
          <GithubButton url="https://github.com/UOA-CS732-S1-2026/group-project-drake-glazers" />
        </div>
      </div>
    </ProjectCard>
  );
}

export default MemoriezCard;
