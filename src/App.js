import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";
import { v4 as uuidV4 } from "uuid";
function App() {
  const showEmployees = true;
  const [role, setRole] = useState("dev");
  const [employess, setEmployees] = useState([
    {
      name: "Caleb",
      role: "Developer",
      img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
    },
    {
      name: "Sal",
      role: "UI designer",
      img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg ",
    },
    {
      name: "Karan",
      role: "Security",
      img: "https://images.pexels.com/photos/2128807/pexels-photo-2128807.jpeg",
    },
    {
      name: "Kile",
      role: "Security",
      img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
    },
    {
      name: "Corey",
      role: "Manager",
      img: "https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg",
    },
    {
      name: "Pazani",
      role: "Director",
      img: "https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg",
    },
  ]);
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
          <div className="flex flex-wrap justify-center">
            {employess.map((employee) => {
              return (
                <Employee
                  id={uuidV4()}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                />
              );
            })}
          </div>
        </>
      ) : (
        <p>You can not see Employees</p>
      )}
    </div>
  );
}

export default App;
