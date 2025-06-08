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
            <p className="step">Step 1</p>
            <p className="step-description">Your Info</p>
          </div>
        </div>
        <div className="row-flexbox-list">
          <li className="circular-page-number">2</li>
          <div>
            <p className="step">Step 2</p>
            <p className="step-description">Select Plan</p>
          </div>
        </div>
        <div className="row-flexbox-list">
          <li className="circular-page-number">3</li>
          <div>
            <p className="step">Step 3</p>
            <p className="step-description">Add-ons</p>
          </div>
        </div>
        <div className="row-flexbox-list">
          <li className="circular-page-number">4</li>
          <div>
            <p className="step">Step 4</p>
            <p className="step-description">Summary</p>
          </div>
          <div className="container-text">
            <h1 className="step-1-heading">Personal info</h1>
            <p className="step-1-sub-heading">
              Please provide your name, email address, and phone number.
            </p>
            <form>
              <div className="form-mini-flexbox">
                <label htmlFor="Name">Name</label>
                <input
                  className="step-1-input"
                  type="text"
                  name="name"
                  placeholder="e.g. Stephen King"
                  required
                />
              </div>
              <div className="form-mini-flexbox">
                <label htmlFor="Email">Email Address </label>
                <input
                  className="step-1-input"
                  type="email"
                  name="email"
                  placeholder="e.g. stephenking@lorem.com"
                  required
                />
              </div>
              <div className="form-mini-flexbox">
                <label htmlFor="Phone Number">Phone Number</label>
                <input
                  className="step-1-input"
                  type="number"
                  name="phone-number"
                  placeholder="e.g. +1 234 567 890"
                  required
                />
              </div>
            </form>
            <button className="step-toggle-button">Next Step</button>
          </div>
        </div>
      </ul>
    </div>
  );
}
export default App;
