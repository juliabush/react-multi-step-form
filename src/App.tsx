import { useMultistepform } from "./useMultistepform";
import bgSidebarDesktop from "./assets/bg-sidebar-desktop.svg";
import iconArcade from "./assets/icon-arcade.svg";
import iconAdvanced from "./assets/icon-advanced.svg";
import iconPro from "./assets/icon-pro.svg";
import iconCheckmark from "./assets/icon-checkmark.svg";
import iconThankYou from "./assets/icon-thank-you.svg";
import "./App.css";
import type { ReactElement } from "react";

function Step1(): ReactElement {
  return (
    <>
      <h1 className="step-1-heading">Personal info</h1>
      <p className="step-1-sub-heading">
        Please provide your name, email address, and phone number.
      </p>
      <form id="step-1-form">
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

function Step2({
  billingCycle,
  setBillingCycle,
  selectedPlan,
  setSelectedPlan,
}: {
  billingCycle: "monthly" | "yearly"; // added
  setBillingCycle: (cycle: "monthly" | "yearly") => void; // added
  selectedPlan: string | null; // added
  setSelectedPlan: (plan: string) => void; // added
}): ReactElement {
  const handleSelectPlan = (plan: string) => {
    setSelectedPlan(plan);
  };

  const isSelected = (plan: string) => selectedPlan === plan;

  return (
    <>
      <h1 className="step-1-heading">Select your plan</h1>
      <p className="step-1-sub-heading">
        You have the option of monthly or yearly billing.
      </p>

      <div className="billing-type-buttons-flexbox">
        <button
          className={`billing-card ${
            isSelected("Arcade") ? "selected-plan" : ""
          }`}
          onClick={() => handleSelectPlan("Arcade")}
        >
          <img
            src={iconArcade}
            alt="Icon for the arcade plan"
            className="icon"
          />
          <p className="billing-card-title">Arcade</p>
          <p className="billing-card-price">
            {billingCycle === "yearly" ? "$90/yr" : "$9/mo"} {/* modified */}
          </p>
          {billingCycle === "yearly" && (
            <p className="billing-card-offer"> 2 months free</p>
          )}
        </button>
        <button
          className={`billing-card ${
            isSelected("Advanced") ? "selected-plan" : ""
          }`}
          onClick={() => handleSelectPlan("Advanced")}
        >
          <img
            src={iconAdvanced}
            alt="Icon for the advanced plan"
            className="icon"
          />
          <p className="billing-card-title">Advanced</p>
          <p className="billing-card-price">
            {billingCycle === "yearly" ? "$120/yr" : "$12/mo"} {/* modified */}
          </p>
          {billingCycle === "yearly" && (
            <p className="billing-card-offer"> 2 months free</p>
          )}
        </button>
        <button
          className={`billing-card ${isSelected("Pro") ? "selected-plan" : ""}`}
          onClick={() => handleSelectPlan("Pro")}
        >
          <img src={iconPro} alt="Icon for the pro plan" className="icon" />
          <p className="billing-card-title">Pro</p>
          <p className="billing-card-price">
            {billingCycle === "yearly" ? "$150/yr" : "$15/mo"} {/* modified */}
          </p>
          {billingCycle === "yearly" && (
            <p className="billing-card-offer"> 2 months free</p>
          )}
        </button>
      </div>

      <div className="toggle-monthly-yearly">
        <p className={billingCycle === "yearly" ? "" : "active-label"}>
          Monthly
        </p>
        <button
          className={`toggle-switch ${
            billingCycle === "yearly" ? "yearly" : "monthly"
          }`}
          onClick={() =>
            setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")
          }
        >
          <div className="toggle-knob" />
        </button>
        <p className={billingCycle === "yearly" ? "active-label" : ""}>
          Yearly
        </p>
      </div>
    </>
  );
}

function Step3({
  billingCycle, // existing
}: {
  billingCycle: "monthly" | "yearly"; // existing
}): ReactElement {
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]); // added state for selected add-ons

  const toggleAddOn = (addon: string) => {
    // added toggle function
    setSelectedAddOns((prev) =>
      prev.includes(addon) ? prev.filter((a) => a !== addon) : [...prev, addon]
    );
  };

  const isSelected = (addon: string) => selectedAddOns.includes(addon); // added helper

  return (
    <>
      <h1 className="step-1-heading">Pick add-ons</h1>
      <p className="step-3-sub-heading">
        Add-ons help enhance your gaming experience.
      </p>
      <div className="add-ons-flexbox">
        <button
          type="button" // added so it doesn't submit form accidentally
          className={`add-on-button ${
            isSelected("Online Service") ? "selected-addon" : ""
          }`} // added class toggle
          onClick={() => toggleAddOn("Online Service")} // added onClick
        >
          <div className="add-ons-flex">
            <img
              src={iconCheckmark}
              alt="Icon of a checkmark"
              className={`add-on-checkmark ${
                isSelected("Online Service") ? "checkmark-selected" : ""
              }`} // added conditional class
            />
            <div className="add-ons-text">
              <p className="add-on-title">Online Service</p>
              <p className="add-on-subtitle">Access to multiplayer games</p>
            </div>
            <p className="add-on-price">
              {billingCycle === "yearly" ? "+$10/yr" : "+$1/mo"}
            </p>
          </div>
        </button>
        <button
          type="button"
          className={`add-on-button ${
            isSelected("Larger Storage") ? "selected-addon" : ""
          }`}
          onClick={() => toggleAddOn("Larger Storage")}
        >
          <div className="add-ons-flex">
            <img
              src={iconCheckmark}
              alt="Icon of a checkmark"
              className={`add-on-checkmark ${
                isSelected("Larger Storage") ? "checkmark-selected" : ""
              }`}
            />
            <div className="add-ons-text">
              <p className="add-on-title">Larger Storage </p>
              <p className="add-on-subtitle">Extra 1TB of cloud save</p>
            </div>
            <p className="add-on-price">
              {billingCycle === "yearly" ? "+$20/yr" : "+$2/mo"}
            </p>
          </div>
        </button>
        <button
          type="button"
          className={`add-on-button ${
            isSelected("Customizable Profile") ? "selected-addon" : ""
          }`}
          onClick={() => toggleAddOn("Customizable Profile")}
        >
          <div className="add-ons-flex">
            <img
              src={iconCheckmark}
              alt="Icon of a checkmark"
              className={`add-on-checkmark ${
                isSelected("Customizable Profile") ? "checkmark-selected" : ""
              }`}
            />
            <div className="add-ons-text">
              <p className="add-on-title">Customizable profile </p>
              <p className="add-on-subtitle">Custom theme on your profile</p>
            </div>
            <p className="add-on-price">
              {billingCycle === "yearly" ? "+$20/yr" : "+$2/mo"}
            </p>
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
    </>
  );
}

function App() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly"
  ); // added
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null); // added

  const steps = [
    <Step1 />,
    <Step2
      billingCycle={billingCycle} // added
      setBillingCycle={setBillingCycle} // added
      selectedPlan={selectedPlan} // added
      setSelectedPlan={setSelectedPlan} // added
    />,
    <Step3 billingCycle={billingCycle} />, // added
    <Step4 />,
  ];

  const { currentStepIndex, step, back, next, goTo } = useMultistepform(steps);

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
              onClick={() => goTo(index)}
              style={{ cursor: "pointer" }}
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
        {currentStepIndex > 0 && (
          <button className="step-back-button" onClick={back}>
            Go back
          </button>
        )}
        <button
          className="step-toggle-button"
          form="step-1-form"
          onClick={next}
        >
          Next Step
        </button>
      </div>
    </div>
  );
}

export default App;
export { Step1 };
