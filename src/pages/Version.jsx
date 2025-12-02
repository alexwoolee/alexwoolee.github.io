import "../styles/versions.css"

const Version = () => {
  return (
    <div id="version-container">
      <h1 className="version">2025 Website Remaster</h1>
      <h1 className="version-date">Creation Date: 09/21</h1>
      <ul>
        <li className="version-point">Introduced a unified single-screen user interface</li>
        <li className="version-point">Added a sidebar displaying available navigation links</li>
        <li className="version-point">Enabled dynamic content loading without page reloads</li>
        <li className="version-point">Updated website title</li>
        <li className="version-point">Implemented active link highlighting</li>
        <li className="version-point">Completed rough designs for About, Projects, and Experience pages</li>
        <li className="version-point">Added a new Home page</li>
        <li className="version-point">Added new visual and media assets</li>
        <li className="version-point">Introduced initial music player assets</li>
        <li className="version-point">Started implementing project info display feature</li>
        <li className="version-point">Added Education page</li>
        <li className="version-point">Added Blog Posts page</li>
        <li className="version-point">Added Miscellaneous page</li>
        <li className="version-point">Finalized Work Experience section design</li>
        <li className="version-point">Added a fully functional music player component</li>
        <li className="version-point">Music player displays current soundtrack, artist, and cover art</li>
        <li className="version-point">Implemented play, pause, skip forward, and skip backward controls</li>
        <li className="version-point">Displayed total song duration and current progress in timer format</li>
        <li className="version-point">Added progress bar (currently unstable, pending fixes)</li>
        <li className="version-point">Clicking a project now displays detailed project info with image, description, links, and artist credits</li>
        <li className="version-point">Added toggles component to music player with volume, snow, rain, and dark-light mode controls</li>
        <li className="version-point">Implemented dark-light mode toggle button with visual state switching</li>
        <li className="version-point">Added new icon components: Rain, Snowflake, Volume (High/Mid/Low), and dark-light mode icons</li>
        <li className="version-point">Added Christmas music collection with 10 holiday jazz tracks</li>
        <li className="version-point">Reorganized components into modular directory structure (about, contact, effects, navigation, projects, ui, media)</li>
        <li className="version-point">Reorganized pages into cleaner naming structure</li>
        <li className="version-point">Enhanced icon organization with dedicated music and dark-light-mode subdirectories</li>
        <li className="version-point">Cleaned up codebase by archiving old components and unused assets</li>
      </ul>
    </div>
  )
}

export default Version
