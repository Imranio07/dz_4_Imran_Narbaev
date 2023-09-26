import React, { useState } from "react";
import "./index.css";

const PrototypeForm = {
  key1: "Barbara",
  key2: "Hepworth",
  key3: "bhepworth@react.com",
  key4: "love cats",
};

export default function App() {
  const [firstName, setFirstName] = useState(PrototypeForm.key1);
  const [lastName, setLastName] = useState(PrototypeForm.key2);
  const [email, setEmail] = useState(PrototypeForm.key3);
  const [whatHeLoves, setWhatHeLoves] = useState(PrototypeForm.key4);

  const [messageForName, setMessageForName] = useState('');
  const [messageForLastName, setMessageForLastName] = useState('');
  const [messageForEmail, setMessageForEmail] = useState('');
  const [messageForWhatHeLoves, setMessageForWhatHeLoves] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessageForName(`Your name is ${firstName}`);
    setMessageForLastName(`Your last name is ${lastName}`);
    setMessageForEmail(`Your Email is ${email}`);
    setMessageForWhatHeLoves(`What you love: ${whatHeLoves}`);
  };

  return (
    <form>
      <div>
        <label>
          Name: <br />
          <input
            className="register"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <br />Name: {firstName}
        </label>
      </div>
      <div>
        <label>
          <br />
          Last name
          <br />
          <input
            className="register"
            type="text"
            name="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <br />Last Name: {lastName}
        </label>
      </div>
      <div>
        <label>
          <br />
          Email: <br />
          <input
            className="register"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />Email: {email}
        </label>
      </div>
      <div>
        <label>
          <br />
          What he loves <br />
          <input
            className="register"
            type="text"
            name="text"
            value={whatHeLoves}
            onChange={(e) => setWhatHeLoves(e.target.value)}
          />
          <br />What He Loves: {whatHeLoves}
        </label>
      </div>
    </form>
  );
}
