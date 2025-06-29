import { useMultistepform } from "./useMultistepform";
import bgSidebarDesktop from "./assets/bg-sidebar-desktop.svg";
import bgSidebarMobile from "./assets/bg-sidebar-mobile.svg";
import iconArcade from "./assets/icon-arcade.svg";
import iconAdvanced from "./assets/icon-advanced.svg";
import iconPro from "./assets/icon-pro.svg";
import iconCheckmark from "./assets/icon-checkmark.svg";
import iconThankYou from "./assets/icon-thank-you.svg";
import "./App.css";
import type { ReactElement } from "react";

interface Step1Props {
  name: string;
  setName: (val: string) => void;
  email: string;
  setEmail: (val: string) => void;
  phone: string;
  setPhone: (val: string) => void;
}

function Step1({
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
}: Step1Props) {
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
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
  billingCycle,
  selectedAddOns,
  setSelectedAddOns,
}: {
  billingCycle: "monthly" | "yearly";
  selectedAddOns: string[];
  setSelectedAddOns: React.Dispatch<React.SetStateAction<string[]>>;
}): ReactElement {
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

function Step4({
  selectedPlan,
  billingCycle,
  selectedAddOns,
}: {
  selectedPlan: string | null;
  billingCycle: "monthly" | "yearly";
  selectedAddOns: string[];
}): ReactElement {
  const planPrices: Record<string, { monthly: number; yearly: number }> = {
    Arcade: { monthly: 9, yearly: 90 },
    Advanced: { monthly: 12, yearly: 120 },
    Pro: { monthly: 15, yearly: 150 },
  };

  const addOnPrices: Record<string, { monthly: number; yearly: number }> = {
    "Online Service": { monthly: 1, yearly: 10 },
    "Larger Storage": { monthly: 2, yearly: 20 },
    "Customizable Profile": { monthly: 2, yearly: 20 },
  };

  const planPrice = selectedPlan ? planPrices[selectedPlan][billingCycle] : 0;
  const addOnsTotal = selectedAddOns.reduce(
    (sum, addon) => sum + addOnPrices[addon][billingCycle],
    0
  );

  const total = planPrice + addOnsTotal;

  return (
    <>
      <h1 className="step-1-heading">Finishing up</h1>
      <p className="step-1-sub-heading">
        Double-check everything looks OK before confirming.
      </p>

      <div className="summary-box">
        <div className="summary-plan-row">
          <div>
            <p className="summary-plan-title">
              {selectedPlan} ({billingCycle})
            </p>
          </div>
          <p className="summary-plan-price">
            ${planPrice}/{billingCycle === "yearly" ? "yr" : "mo"}
          </p>
        </div>
        <hr />
        {selectedAddOns.map((addon) => (
          <div key={addon} className="summary-addon-row">
            <p>{addon}</p>
            <p>
              +${addOnPrices[addon][billingCycle]}/
              {billingCycle === "yearly" ? "yr" : "mo"}
            </p>
          </div>
        ))}
      </div>

      <div className="summary-total">
        <p>Total (per {billingCycle === "yearly" ? "year" : "month"})</p>
        <p className="summary-total-amount">
          ${total}/{billingCycle === "yearly" ? "yr" : "mo"}
        </p>
      </div>
    </>
  );
}
function Step5(): ReactElement {
  return (
    <>
      <h1 className="step-1-heading">Thank You!</h1>
      <p className="step-1-sub-heading">Your subscription has been confirmed</p>
      <img
        src={iconThankYou}
        alt="Thank you illustration"
        className="thankyou-icon"
      />
      <p className="thankyou-description">
        Thanks for subscribing! We've sent a confirmation email to
        test@email.com. We're excited to have you on board and hope you enjoy
        using our platform!
      </p>
    </>
  );
}
function App() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly"
  ); // added
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const steps = [
    <Step1
      name={name}
      setName={setName}
      email={email}
      setEmail={setEmail}
      phone={phone}
      setPhone={setPhone}
    />,
    <Step2
      billingCycle={billingCycle}
      setBillingCycle={setBillingCycle}
      selectedPlan={selectedPlan}
      setSelectedPlan={setSelectedPlan}
    />,
    <Step3
      billingCycle={billingCycle}
      selectedAddOns={selectedAddOns}
      setSelectedAddOns={setSelectedAddOns}
    />,
    <Step4
      selectedPlan={selectedPlan}
      billingCycle={billingCycle}
      selectedAddOns={selectedAddOns}
    />,
    <Step5 />,
  ];
  const { currentStepIndex, step, back, next, goTo } = useMultistepform(steps);

  const handleSubmit = async () => {
    const userData = {
      name: "Stephen King",
      email: "stephenking@lorem.com",
      phone: "+1 234 567 890",
      plan: selectedPlan,
      billingCycle,
      addOns: selectedAddOns,
    };
    try {
      const response = await fetch("http://localhost:3000/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
      if (response.ok) {
        console.log("Confirmation email sent!");
      } else {
        console.error("Failed to send confirmation email");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
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
        {currentStepIndex > 0 && currentStepIndex < steps.length - 1 && (
          <button className="step-back-button" onClick={back}>
            Go back
          </button>
        )}
        {currentStepIndex < steps.length - 1 && (
          <button
            type="submit"
            className="step-toggle-button"
            form="step-1-form"
            onClick={async () => {
              if (currentStepIndex === steps.length - 2) {
                await handleSubmit();
              }
              next();
            }}
          >
            {currentStepIndex === steps.length - 2 ? "Confirm" : "Next Step"}
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
export { Step1 };
