import { useMultistepform } from "./useMultistepform";
import bgSidebarDesktop from "./assets/bg-sidebar-desktop.svg";
import iconArcade from "./assets/icon-arcade.svg";
import iconAdvanced from "./assets/icon-advanced.svg";
import iconPro from "./assets/icon-pro.svg";
import "./App.css";
import type { ReactElement } from "react";

function Step1(): ReactElement {
  return (
    <>
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
            type="text"
            name="phone-number"
            placeholder="e.g. +1 234 567 890"
            required
          />
        </div>
      </form>
    </>
  );
}
import { useState } from "react";

function Step2(): ReactElement {
  const [toggled, setToggled] = useState(false);

  return (
    <>
      <h1 className="step-1-heading">Select your plan</h1>
      <p className="step-1-sub-heading">
        You have the option of monthly or yearly billing.
      </p>

      <div className="billing-type-buttons-flexbox">
        <button>
          <img
            src={iconArcade}
            alt="Icon for the arcade plan"
            className="icon"
          />
          <p>Arcade</p>
        </button>
        <button>
          <img
            src={iconAdvanced}
            alt="Icon for the advanced plan"
            className="icon"
          />
          <p>Advanced</p>
        </button>
        <button>
          <img src={iconPro} alt="Icon for the pro plan" className="icon" />
          <p>Pro</p>
        </button>
      </div>

      <div className="toggle-monthly-yearly">
        <p>Monthly</p>
        <button
          className={`toggle-switch ${toggled ? "yearly" : "monthly"}`}
          onClick={() => setToggled((prev) => !prev)}
        >
          <div className="toggle-knob" />
        </button>
        <p>Yearly</p>
      </div>
    </>
  );
}
function Step3(): ReactElement {
  return (
    <>
      <h1 className="step-1-heading">Pick add-ons</h1>
      <p className="step-1-sub-heading">
        Add-ons help enhance your gaming experience.
      </p>
      <div className="add-ons-flexbox">
        <button>
          <div className="add-ons-text">
            <p>Online Service</p>
            <p>Access to multiplayer games</p>
            <div className="add-on"></div>
          </div>
        </button>
        <button>
          <div className="add-ons-text">
            <p>Larger Storage </p>
            <p>Extra 1TB of cloud save</p>
            <div className="add-on"></div>
          </div>
        </button>
        <button>
          <div className="add-ons-text">
            <p>Customizable profile </p>
            <p>Custom theme on your profile</p>
            <div className="add-on"></div>
          </div>
        </button>
      </div>
    </>
  );
}
function Step4(): ReactElement {
  return (
    <>
      <h1 className="step-1-heading">Finishing up</h1>
      <p className="step-1-sub-heading">
        Double-check everything looks OK before confirming.
      </p>
      <div className="billing-type-buttons-flexbox">
        <button></button>
        <button></button>
        <button></button>
      </div>
    </>
  );
}

function App() {
  const steps = [<Step1 />, <Step2 />, <Step3 />, <Step4 />];

  const { currentStepIndex, step, back, next } = useMultistepform(steps);

  return (
    <div className="container">
      <img
        src={bgSidebarDesktop}
        alt="Colourful Sidebar"
        className="desktop-image"
      />

      <ul className="page-numbers" role="list">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="row-flexbox-list">
            <li
              className={`circular-page-number ${
                index === currentStepIndex ? "active-step" : ""
              }`}
            >
              {index + 1}
            </li>
            <div>
              <p className="step">Step {index + 1}</p>
              <p className="step-description">
                {["Your Info", "Select Plan", "Add-ons", "Summary"][index]}
              </p>
            </div>
          </div>
        ))}
      </ul>

      <div className="container-text">
        {step}
        <button className="step-back-button" onClick={back}>
          Go back
        </button>
        <button className="step-toggle-button" onClick={next}>
          Next Step
        </button>
      </div>
    </div>
  );
}

export default App;
export { Step1 };
