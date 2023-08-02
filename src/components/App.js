import { useState } from "react";
import "./App.css";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setContact((prevVal) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevVal.lName,
          email: prevVal.email,
        };
      } else if (name === "lName") {
        return {
          fName: prevVal.fName,
          lName: value,
          email: prevVal.email,
        };
      } else if (name === "email") {
        return {
          fName: prevVal.fName,
          lName: prevVal.lName,
          email: value,
        };
      }
    });
  };

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={handleChange}
          value={contact.fName}
          name="fName"
          placeholder="First Name"
        />
        <input
          onChange={handleChange}
          value={contact.lName}
          name="lName"
          placeholder="Last Name"
        />
        <input
          onChange={handleChange}
          value={contact.email}
          name="email"
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
