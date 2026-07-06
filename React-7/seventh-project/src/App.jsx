import React, { useState } from "react";

const App = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const [submit, setSubmit] = useState(null);

  const clickButton = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleForm = (event) => {
    event.preventDefault();
    setSubmit(state);
    setSubmit({email: "",
    password: "",})
  };

  return (
    <div>
      <form onSubmit={handleForm}>
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          value={state.email}
          onChange={clickButton}
        />

        <br />
        <br />

        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          value={state.password}
          onChange={clickButton}
        />

        <br />
        <br />

        <button type="submit">Submit</button>
      </form>

      {submit && (
        <div>
          <h2>Form Submitted</h2>
          <p>Email: {submit.email}</p>
          <p>Password: {submit.password}</p>
        </div>
      )}
    </div>
  );
};

export default App;