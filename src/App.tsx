import "./App.css";
import bgSidebarDesktop from "./assets/bg-sidebar-desktop.svg";

function App() {
  return (
    <div className="container">
      <img
        src={bgSidebarDesktop}
        alt="Colourful Sidebar"
        className="desktop-image"
      />
      <ul className="page-numbers" role="list">
        <div className="row-flexbox-list">
          <li className="circular-page-number">1</li>
          <div>
            <p>Step 1</p>
            <p>Your Info</p>
          </div>
        </div>
        <div className="row-flexbox-list">
          <li className="circular-page-number">2</li>
          <div>
            <p>Step 2</p>
            <p>Your Info</p>
          </div>
        </div>
        <div className="row-flexbox-list">
          <li className="circular-page-number">3</li>
          <div>
            <p>Step 3</p>
            <p>Your Info</p>
          </div>
        </div>
        <div className="row-flexbox-list">
          <li className="circular-page-number">4</li>
          <div>
            <p>Step 4</p>
            <p>Your Info</p>
          </div>
        </div>
      </ul>
      <form action=""></form>
    </div>
  );
}
export default App;
