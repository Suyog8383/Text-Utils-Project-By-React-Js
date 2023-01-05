import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import { Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("dark");
  const [btnText, setBtnText] = useState("Enable light mode");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      setBtnText("Enable Dark mode");
      showAlert("light mode enable", "success");
    } else {
      setMode("dark");
      setBtnText("Enable Light mode");
      showAlert("dark mode enable", "success");
    }
  };
  return (
    <>
      <>
        <Navbar
          title={"TextUtils"}
          mode={mode}
          btnText={btnText}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <Routes>
          <Route
            path="/"
            element={
              <TextForm
                heading="Enter your text to analyse"
                mode={mode}
                displayAlert={showAlert}
              />
            }
          />
          <Route path="about" element={<About />} />
        </Routes>
      </>
    </>
  );
}

export default App;
