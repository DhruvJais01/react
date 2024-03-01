import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";

function App() {
  const showEmployees = true;
  const [role, setRole] = useState("dev");
  return (
    <div className="App">
      {showEmployees ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          />
          <Employee name="John" role="intern" />
          <Employee name="Jabe" role={role} />
          <Employee name="Kile" />
        </>
      ) : (
        <p>You can not see Employees</p>
      )}
    </div>
  );
}

export default App;
