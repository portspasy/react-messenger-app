import React from "react";

import "./App.css";

// Components
import HomePage from "./pages/homepage/homepage.component";
import SignInSignUpPage from "./pages/sign-in/sign-in-and-sign-up.component";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HomePage />
        <SignInSignUpPage />
      </header>
    </div>
  );
}

export default App;
