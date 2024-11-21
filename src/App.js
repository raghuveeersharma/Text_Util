import Alert from "./component/Alert";
import Navbar from "./component/Navbar";
import Textform from "./component/TextForm";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const toggle = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode is Enabled", "success");
    } else {
      document.body.style.backgroundColor = "#214071";
      setMode("dark");
      showAlert("Dark mode is Enabled", "success");
    }
  };
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <>
      <Navbar title="Text-Util" about="about" mode={mode} toggle={toggle} />
      <div className="container">
        <Alert alert={alert} />

        <Textform
          heading="Enter your text to Analyzeee"
          mode={mode}
          showAlert={showAlert}
        />
      </div>
    </>
  );
}

export default App;
