import { useState, useEffect } from "react";
import { evaluate } from "mathjs";

function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    applyMode();
  }, [isDarkMode]);

  const applyMode = () => {
    document.body.className = isDarkMode ? "dark-mode" : "light-mode";
  };

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleclick = (value) => {
    if (value === "=") {
      try {
        setResult(evaluate(input).toString());
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "AC") {
      setInput("");
      setResult("");
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  return (
    <div className="calculator">
      <div className="header">
        <h1>Calculator</h1>
        <div className="toggle-switch">
          <span className="mode-label">
            {isDarkMode ? "Dark Mode" : "Light Mode"}
          </span>
          <label className="switch">
            <input
              type="checkbox"
              onChange={handleToggle}
              checked={isDarkMode}
            />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
      <div className="display">
        <div className="input">{input}</div>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        <button onClick={() => handleclick("7")}>7</button>
        <button onClick={() => handleclick("8")}>8</button>
        <button onClick={() => handleclick("9")}>9</button>
        <button onClick={() => handleclick("/")}>/</button>

        <button onClick={() => handleclick("4")}>4</button>
        <button onClick={() => handleclick("5")}>5</button>
        <button onClick={() => handleclick("6")}>6</button>
        <button onClick={() => handleclick("*")}>*</button>

        <button onClick={() => handleclick("1")}>1</button>
        <button onClick={() => handleclick("2")}>2</button>
        <button onClick={() => handleclick("3")}>3</button>
        <button onClick={() => handleclick("-")}>-</button>

        <button onClick={() => handleclick("0")}>0</button>
        <button className="equal" onClick={() => handleclick("=")}>
          =
        </button>
        <button onClick={() => handleclick("+")}>+</button>
        <button className="clear" onClick={() => handleclick("AC")}>
          AC
        </button>
      </div>
    </div>
  );
}

export default Calculator;
