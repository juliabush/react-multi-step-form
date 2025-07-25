import axios from "axios";
// axios used to communicate with API's
// promise-based HTTP client for node.js and browser
// HTTP stands for HyperText Transfer Protocol
// foundation of web, used to load web pages with links
// how to axios work with promises?
// promise is a proxy for a value, unknown when created
// allows you to associate handlers with an asychnronous actions
// eventual success value or failure reason
// lets asynchronus methods return values as if it
// were synchronous
// promise is in one of these states
// pending, fufilled, or rejected.
import { useMultistepform } from "./useMultistepform";
// imports a custom hook created to navigate form steps
import bgSidebarDesktop from "./assets/bg-sidebar-desktop.svg";
import bgSidebarMobile from "./assets/bg-sidebar-mobile.svg";
import iconArcade from "./assets/icon-arcade.svg";
import iconAdvanced from "./assets/icon-advanced.svg";
import iconPro from "./assets/icon-pro.svg";
import iconCheckmark from "./assets/icon-checkmark.svg";
import iconThankYou from "./assets/icon-thank-you.svg";
// imports image files, svgs, as modules
// modules are just code files that are reusable
import "./App.css";
// imports css file
import type { ReactElement } from "react";
// imports a type
// JS is dynamically typed, allowing variables to be changed on the go
// TS id static typing, meaning you define the type of a variable
// aka whether its a number or string
import { useState } from "react";
// imports useState hook from react library
// state is a built-in way to store and manage data that changes over time
// react re-renders the component when state changes

// In TS, an interface is a way to describe the shape of an object
// object is collection of key value-pairs
// shape means what keys does it have and what types
interface Step1Props {
  // each property is assigned a type
  name: string;
  // name must be string
  nameError: boolean;
  // data type in programming with only two possible values
  // yes/no, on/off or true/false
  setName: (val: string) => void;
  // takes in one argument, val, which must be string
  email: string;
  setEmail: (val: string) => void;
  emailError: boolean;
  phone: string;
  setPhone: (val: string) => void;
  phoneError: boolean;
}

// function that takes in a parameter, but that parameter
// in this case is an object, and it is destructured
// real javascript objects must always have key-value pairs
// but here we are only recieving an object, and immediately
// unpacking its keys into local variables
function Step1({
  name,
  setName,
  nameError,
  email,
  setEmail,
  emailError,
  phone,
  setPhone,
  phoneError,
}: Step1Props) {
  return (
    // JSX similair to HTML but allows for javascript inside
    // such as dynamic values with {}
    // dynamic values= variable that can be changed at runtime
    // runtime = when code executes
    <>
      <h1 className="step-1-heading">Personal info</h1>
      <p className="step-1-sub-heading">
        Please provide your name, email address, and phone number.
      </p>
      <form id="step-1-form">
        <div className="form-mini-flexbox">
          <label>Name </label>
          <input
            id="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            // e stands for event
            // onChange is a prop you add to input elements to look out for change
            // calls setName function with input value

            className="step-1-input"
            type="text"
            name="Name"
            placeholder="e.g. Stephen King"
          />
          {nameError && <p>Name is required to proceed</p>}
          {/*  if ! was used thats the logical NOT operator */}
        </div>
        <div className="form-mini-flexbox">
          <label>Email Address </label>
          <input
            id="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="step-1-input"
            type="email"
            name="Email"
            placeholder="e.g. stephenking@lorem.com"
          />
          {emailError && <p>Email is required to proceed</p>}
        </div>
        <div className="form-mini-flexbox">
          <label>Phone Number </label>
          <input
            id="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="step-1-input"
            type="text"
            name="Phone Number"
            placeholder="e.g. +1 234 567 890"
          />
          {phoneError && <p>Phone Number is required to proceed</p>}
        </div>
      </form>
    </>
  );
}

function Step2({
  billingCycle,
  setBillingCycle,
  selectedPlan,
  setSelectedPlan,
}: // react component
// part in parentheses is destructuring an object passed
// as a parameter
// in react parameters are often referred to as props
{
  // destructuring props(paramters) object
  // defining types
  // important cause it can prevent bugs
  billingCycle: "monthly" | "yearly";
  setBillingCycle: (cycle: "monthly" | "yearly") => void;
  selectedPlan: string | null;
  setSelectedPlan: (plan: string) => void;
}): ReactElement {
  const handleSelectPlan = (plan: string) => {
    setSelectedPlan(plan);
  };
  // null is a value of nothing
  // void is a type and means function doesnt return anything
  const isSelected = (plan: string) => selectedPlan === plan;
  // === is strict equality, it asks:
  // are the values the same?
  // are the types also the same?

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
          // utilizes template literals `` to combine css classes
          // call function isSelected
          // if isSelected returns true it applies "selected-plan" class
          // otheriwse it applies an empty string
          onClick={() => handleSelectPlan("Arcade")}
          // onClick sets a click event handler
          // handler is an arrow function that calls handleSelectedPlan with argument Arcade
          // triggers selection of the Arcade plan and updates state
          // Parameters vs. Argument:
          // parameter is a variable in a fucntion definition
          // acts like a placeholder
          // argument is the actual value you pass to a function
        >
          <img
            src={iconArcade}
            // javascript variable leading to svg import
            alt="Icon for the arcade plan"
            className="icon"
          />
          <p className="billing-card-title">Arcade</p>
          <p className="billing-card-price">
            {billingCycle === "yearly" ? "$90/yr" : "$9/mo"}
            {/*ternary expression that works like if/else  */}
            {/* true returns 90/yr, false 9/mo */}
          </p>
          {billingCycle === "yearly" && (
            <p className="billing-card-offer"> 2 months free</p>
          )}
          {/* strict equality check */}
          {/* && is a logical and operator to conditionally render */}
          {/* if true adds paragraph with class if false nothing */}
        </button>
        <button
          className={`billing-card ${
            isSelected("Advanced") ? "selected-plan" : ""
          }`}
          // again template literals applied for dual css classes
          onClick={() => handleSelectPlan("Advanced")}
          // onclick event handler passes through function with
          // Advanced as its argument that changes state
        >
          <img
            src={iconAdvanced}
            alt="Icon for the advanced plan"
            className="icon"
          />
          <p className="billing-card-title">Advanced</p>
          <p className="billing-card-price">
            {billingCycle === "yearly" ? "$120/yr" : "$12/mo"}
            {/* ternary operator acting as if/else */}
            {/* if is ? */}
            {/* else is : */}
          </p>
          {billingCycle === "yearly" && (
            <p className="billing-card-offer"> 2 months free</p>
          )}
          {/* && logical and operator */}
          {/* checking if billingCycle stricly equals yearly */}
          {/* if true it conditionally renders the paragraph */}
        </button>
        <button
          className={`billing-card ${isSelected("Pro") ? "selected-plan" : ""}`}
          // template literal with backticks to combine dynamic values
          // ternary expression so if/else
          // if pro is selected class is applied if not empty string
          onClick={() => handleSelectPlan("Pro")}
          // event listener for when button is clicked
          // passes handleSelectPlan function with pro argument
        >
          <img src={iconPro} alt="Icon for the pro plan" className="icon" />
          <p className="billing-card-title">Pro</p>
          <p className="billing-card-price">
            {billingCycle === "yearly" ? "$150/yr" : "$15/mo"}
            {/* ternary expression so if/else */}
            {/* strict equality check */}
            {/* if condition is true return yearly, if false monthly */}
          </p>
          {billingCycle === "yearly" && (
            <p className="billing-card-offer"> 2 months free</p>
          )}
          {/* strictly equals and logical and operator */}
          {/* conditionally renders a paragraph with classname */}
        </button>
      </div>

      <div className="toggle-monthly-yearly">
        <p className={billingCycle === "yearly" ? "" : "active-label"}>
          {/* ternary expressions with strictly equals */}
          {/* if billingCycle equals yearly then conditionally render empty string */}
          {/* if false conditionally render class active-label */}
          Monthly
        </p>
        <button
          className={`toggle-switch ${
            billingCycle === "yearly" ? "yearly" : "monthly"
          }`}
          // template literal to allow embedded expressions
          // ternary operator, if billingcycle stricly equals yearly, then use yearly
          // otherwise use monthly
          onClick={() =>
            setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")
          }
          // onclick event handler watching for clicks
          // anonymous arrow function to delay execution until click
          // state setter fucntion with setBillingCycle
          // ternary expression
          // if the current billingCycle is "monthly", it switches to yealry
          // otheriwse it switches to monthly
        >
          <div className="toggle-knob" />
        </button>
        <p className={billingCycle === "yearly" ? "active-label" : ""}>
          Yearly
        </p>
        {/* ternary expression with strict equality */}
        {/* if true it applies the active-label class */}
        {/* if false it applies an empty string*/}
      </div>
    </>
  );
}

function Step3({
  billingCycle,
  selectedAddOns,
  setSelectedAddOns,
}: // paramater destructuring
// three keys for the props object
// we are still recieving one object we just unpack its contents
{
  billingCycle: "monthly" | "yearly";
  selectedAddOns: string[];
  setSelectedAddOns: React.Dispatch<React.SetStateAction<string[]>>;
}): // typescript type annotations for destructured props
// billing must be a string, only either monthly or yearly
// This line | is a union type
// allows prop to accept more than one type or value
// selectedAddOns must be an array of strings
// setSelectedAddOns is a type of state updater function returned by usestate
// function must accept a array of strings or function that returns one

ReactElement {
  // typescript syntax, component returns ReactElement
  // type annotation for return value
  const toggleAddOn = (addon: string) => {
    // defining a function named toggleAddOn
    // takes on argument, addon which has to be a string
    // const declared functions are not hoisted and are stored in a variable
    // good cause they are modular, predictable scoping
    setSelectedAddOns(
      (prev) =>
        // updating state using setSelectedAddOns
        // recieves paramater prev, previous state value
        // array of strings
        prev.includes(addon)
          ? prev.filter((a) => a !== addon)
          : [...prev, addon]
      // Checks if addon is already in the selectedAddOns array
      // If addon is already seleceted it removes it from array
      // if addon is not selected it adds to array using spread operator
    );
  };

  const isSelected = (addon: string) => selectedAddOns.includes(addon);
  // helper function to check if addon is sleceted
  // it return true if it is
  // returns false if it isnt

  return (
    <>
      <h1 className="step-1-heading">Pick add-ons</h1>
      <p className="step-3-sub-heading">
        Add-ons help enhance your gaming experience.
      </p>
      <div className="add-ons-flexbox">
        <button
          type="button"
          className={`add-on-button ${
            isSelected("Online Service") ? "selected-addon" : ""
          }`} // template literal with css class
          // ternary expression if Online Service is selected
          // if true add class "selected-addon"
          // if false add an empty string
          onClick={() => toggleAddOn("Online Service")}
          // onclick eventhandler
          // passes function with argument Online service
          // paramater is a placeholder, argument actually has a value
        >
          <div className="add-ons-flex">
            <img
              src={iconCheckmark}
              alt="Icon of a checkmark"
              className={`add-on-checkmark ${
                isSelected("Online Service") ? "checkmark-selected" : ""
              }`}
              // template literal
              // ternary expression
              // when online service isselected if true apply css class
              // if false apply empty string
            />
            <div className="add-ons-text">
              <p className="add-on-title">Online Service</p>
              <p className="add-on-subtitle">Access to multiplayer games</p>
            </div>
            <p className="add-on-price">
              {billingCycle === "yearly" ? "+$10/yr" : "+$1/mo"}
              {/* ternary expression
              billing cycle if it stricly equals yearly
              then if true add yearly price
              then if false add monthly */}
            </p>
          </div>
        </button>
        <button
          type="button"
          className={`add-on-button ${
            isSelected("Larger Storage") ? "selected-addon" : ""
          }`}
          // template literal
          // ternary expression
          // isSelected Larger storage if true add selected-addon
          // if false add an empty string
          onClick={() => toggleAddOn("Larger Storage")}
        >
          {/* adding an event handler onclick */}
          {/* when clicked function toggleAddOn with argument larger storage */}
          <div className="add-ons-flex">
            <img
              src={iconCheckmark}
              alt="Icon of a checkmark"
              className={`add-on-checkmark ${
                isSelected("Larger Storage") ? "checkmark-selected" : ""
              }`}
              // template literal
              // ternary expression, if/else
              // if Larger Storage is selected and true add checkmark-selected
              // if false add an empty string
            />
            <div className="add-ons-text">
              <p className="add-on-title">Larger Storage </p>
              <p className="add-on-subtitle">Extra 1TB of cloud save</p>
            </div>
            <p className="add-on-price">
              {billingCycle === "yearly" ? "+$20/yr" : "+$2/mo"}
              {/* ternary expression */}
              {/* billingcycle if stricly equals yearly */}
              {/* if true add yearly price */}
              {/* if false add monthly price */}
            </p>
          </div>
        </button>
        <button
          type="button"
          className={`add-on-button ${
            isSelected("Customizable Profile") ? "selected-addon" : ""
          }`}
          // template literal
          // ternary expression if/else
          // isSelected Customizable profile if true add selected-addon
          // if false then add empty string
          onClick={() => toggleAddOn("Customizable Profile")}
        >
          {/* adding event listener of onClick */}
          {/* function toggleAddOn with argument Customizable Profile */}
          <div className="add-ons-flex">
            <img
              src={iconCheckmark}
              alt="Icon of a checkmark"
              className={`add-on-checkmark ${
                isSelected("Customizable Profile") ? "checkmark-selected" : ""
                // template literal
                // ternary expression
                // isSelected Customizable profile if true add checkmar-selected class
                // if false add empty-string
              }`}
            />
            <div className="add-ons-text">
              <p className="add-on-title">Customizable profile </p>
              <p className="add-on-subtitle">Custom theme on your profile</p>
            </div>
            <p className="add-on-price">
              {billingCycle === "yearly" ? "+$20/yr" : "+$2/mo"}
              {/* ternary expression if billingCycle strictly equals yearly */}
              {/* if true add yearly price */}
              {/* if false then add monthly price */}
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
}: // function props(parameters) in a destructured object
{
  selectedPlan: string | null;
  // null means a value of intentionally nothing
  // defining type of selected plan with union type |
  billingCycle: "monthly" | "yearly";
  selectedAddOns: string[];
  // defining type can only be an array of strings
}): ReactElement {
  const planPrices: Record<string, { monthly: number; yearly: number }> = {
    // declaring a constant object of planPrices
    // typescript type annotation using built in helper RECORD
    // what is record?
    // tells typescript:
    // object should have keys of the type of KeyType
    // values of type ValueType
    // Keys must be strings like ("Arcade", "Advanced", "Pro")
    // Values must be objects with a monthly or yearly number
    Arcade: { monthly: 9, yearly: 90 },
    Advanced: { monthly: 12, yearly: 120 },
    Pro: { monthly: 15, yearly: 150 },
  };

  const addOnPrices: Record<string, { monthly: number; yearly: number }> = {
    "Online Service": { monthly: 1, yearly: 10 },
    "Larger Storage": { monthly: 2, yearly: 20 },
    "Customizable Profile": { monthly: 2, yearly: 20 },
  };
  // addOnPrices is a constant
  // record is a typescript utility function
  // utlity type: built in generic types
  // help you quickly describe common object patterns
  // keys like online service are string keys
  // values must be objects with two number properties, monthly and yearly

  const planPrice = selectedPlan ? planPrices[selectedPlan][billingCycle] : 0;
  const addOnsTotal = selectedAddOns.reduce(
    (sum, addon) => sum + addOnPrices[addon][billingCycle],
    0
  );
  // setting the planPrice based on the selectedPlan
  // if ternary expression returns false then it falls back to 0
  // selectedAddOns is an array of addon names
  // .reduce accumulates a value , so it sums up prices for each addon

  const total = planPrice + addOnsTotal;

  // sums planPrice and addOnsTotal to find total

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
              {/* dynamic values result in dynamic rendering */}
            </p>
          </div>
          <p className="summary-plan-price">
            ${planPrice}/{billingCycle === "yearly" ? "yr" : "mo"}
            {/* ternary expression, if/else */}
            {/* slash here is just visual */}
          </p>
        </div>
        <hr />
        {selectedAddOns.map((addon) => (
          // .map iterates over each item in the array
          // returns a new array of something
          // in this case it creates a list of selected-add-ons
          <div key={addon} className="summary-addon-row">
            <p>{addon}</p>
            <p>
              +${addOnPrices[addon][billingCycle]}/
              {/* here bracket notation is used to look up values in an object */}
              {/* how to tell the difference with bracket notation */}
              {/* if its an array, [] means get by index */}
              {/* if its an object, [] means get the value by key */}
              {billingCycle === "yearly" ? "yr" : "mo"}
              {/* ternary expression, if/else */}
            </p>
          </div>
        ))}
      </div>

      <div className="summary-total">
        <p>Total (per {billingCycle === "yearly" ? "year" : "month"})</p>
        {/* ternary expression, if/else */}
        {/* billingCycle stricly equals yearly */}
        {/* if true return year */}
        {/* if false return month */}
        <p className="summary-total-amount">
          ${total}/{billingCycle === "yearly" ? "yr" : "mo"}
          {/* dollar sign is visual */}
          {/* dynamic value */}
          {/* ternary expression, if/else */}
          {/* strict equality makes sure both the type and value are the same */}
        </p>
      </div>
    </>
  );
}
function Step5({ email }: { email: string }): ReactElement {
  // step5 takes one parameter, object with key email
  // typescript type annotation, email must be a string
  // key is the name in an object
  // property is a key-value pair
  // function must have an object with email property
  // returns a react element
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
        <strong> {email}</strong>. We're excited to have you on board and hope
        you enjoy using our platform!
      </p>
    </>
  );
}

function App() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly"
  );
  // billing cycle is a state variable
  // setBillingCycle is a function to update that state
  // this pairing can be referred to as state tuple
  // hooks are functions that let you use reacts features inside components
  // useState is a hook
  // type here is that it can only be string of monthly or yearly
  // union type is the |
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  // selectedAddOns is a state variable
  // string[] is an array of strings
  // initial state is an empty array seen by ([])
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  // type is either a string or null
  // union type |
  // initial value is null as seen in angle brackets ()
  // common practice to provide initial value
  // typescript can infer states type from it
  // for example (0) infers its a number
  // null is a value you can assign
  // explicit "no value"
  // void is a type that means function returns nothing
  // undefined means a variable has not been assigned a value yet
  // undefined is both a value and a type
  const [name, setName] = useState("");
  // initial value as seen in angle brackets is empty string
  // typescript infers the type to be a string
  // typescript always tries to infer a type or wants you to explixitly declare
  // this allows us to catch errors early
  // wheras in JS you only catch them after the code runs
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const steps = [
    // array of react components
    // each component passes its own parameters
    // they are dynamic values coming from components state
    // inside each component the props are passed as object
    // props are react-specific concept
    // passsed to components
    // paramaters are a general programming concept
    // variables that are defined in function signature
    // function signature defines: its name, parameters and type like in typescript
    // other typed languages: Java, C/C++, Go, Rust, Swift, Kotlin
    // require you to define type at compile time(before running code)
    // a compiler is a program that changes human readable code into machine readable code
    // compile time refers to when code is being checked and translated
    // computer is analyzing and building it
    // syntax errors and type mismatches show up here
    // run time is when compiled code executes or when user runs it
    // functions are executed and variables hold real data
    <Step1
      name={name}
      setName={setName}
      nameError={nameError}
      email={email}
      setEmail={setEmail}
      emailError={emailError}
      phone={phone}
      setPhone={setPhone}
      phoneError={phoneError}
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
    <Step5 email={email} />,
  ];
  const { currentStepIndex, step, back, next, goTo } = useMultistepform(steps);
  // const { nameError, emailError, phoneError };

  // useMultiStepForm is a custom hook, passing steps
  // Hook is returning an object with its keys
  // Object destructuring, grabs values directly
  // What does that means?
  // object destructuring takes values directly and assigns them to local variable
  // async means this function performs asynchronous work
  // fetch, await
  // is asyn used when backend is involved? why? what does it mean?
  // async allows you to pause execution until a promise is resolved
  // async functions always return promises
  // JS and TS are single threaded
  // tasks run one after the other, no parallel execution
  // to not block the main-thread, JS uses an event-driven
  // non blocking I/O model
  // relies on the event loop,
  // typescript return type annotation
  // promise because its async
  // the value that the promise resolves will be a response object or null
  // why is it response rather then request?
  // constant userData is creating a plain object
  // creating an object when {} is on right side
  // destructuring an object when {} is on left side
  const handleSubmit = async () => {
    const userData = {
      name,
      email,
      phone,
      plan: selectedPlan,
      billingCycle,
      addOns: selectedAddOns,
    };
    try {
      await axios.post("http://localhost:3000/sendmail", {
        to: { name, email },
        sub: { text: "New Signup Multi-Step-Form" },
        msg: {
          phone,
          plan: selectedPlan,
          billingCycle,
          addOns: selectedAddOns,
        },
        // passing through objects on the frontend so backend must match up
        // doesnt work when backend expects strings
      });
    } catch (error) {
      console.log(error);
      alert(error);
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
            className="step-toggle-button"
            form="step-1-form"
            onClick={async (e) => {
              e.preventDefault();
              // preventing refresh
              if (currentStepIndex === 0) {
                // checks if we are on step 1
                // strict equality operator checks both value and type
                const isNameValid = name.trim() !== "";
                // name is current value of the input
                // .trim() removes any trailling whitespace
                // !== is the not equal operator
                const isEmailValid = email.trim() !== "";
                const isPhoneValid = phone.trim() !== "";

                setNameError(!isNameValid);
                // ! is the logical NOT operator
                // flips boolean value from true to false and vice versa
                setEmailError(!isEmailValid);
                setPhoneError(!isPhoneValid);

                if (!isNameValid || !isEmailValid || !isPhoneValid) {
                  // || is the logical OR operator
                  // if name is invalid or email or phone dont
                  return;
                }
              }
              if (currentStepIndex === steps.length - 2) {
                next();
                // this gives us the final step so it works for final button
                await handleSubmit();
                // can work without await, but moves to the next step immediateley
              } else {
                next();
              }
              // else if (currentStepIndex < steps.length - 2) {
              //   next();
              // }
              // else does not take any conditions
              // only else if can be used here to take a condition
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
