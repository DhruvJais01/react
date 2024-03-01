# First Component

```javascript
function Employee() {
  return <h3>Here is an Employee</h3>;
}
export default Employee;
```

```javascript
function App() {
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
        <>
          <Employee />
          <Employee />
          <Employee />
        </>
      ) : (
        <p>You can not see Employees</p>
      )}
    </div>
  );
}
```

# props

```javascript
    <Employee name="John" role="intern" />
    <Employee name="Jabe" />
    <Employee name="Kile" />
```

```javascript
<>
  <h3>Here is an {props.name}</h3>
  <p>{props.role ? props.role : "No role"}</p>
  {props.role ? (
    <p class="role">{props.role}</p>
  ) : (
    <p class="no role">No role</p>
  )}
  // by this we can display different styles for both
</>
```

Note: props cant be changed inside child elements, we change its values using state

# useState hook

```javascript
const showEmployees = true;
let role = "dev";
//-------
<input
    type="text"
    onChange={(e) => {
    console.log(e.target.value);
    role = e.target.value;
    }}
/>
<Employee name="John" role="intern" />
<Employee name="Jabe" role={role} />
<Employee name="Kile" />
```

doing this is not displaying the changing values. To show changes with variables we use state

```javascript
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
```

# installing tailwind

https://tailwindcss.com/docs/installation

# added cardbox for employees

# Creating an array to provide data for employee

- react keep track of each element so it needs id, we can provide in manually but there is bettter way to create id

```bash
npm install uuid
```

```javascript
import { v4 as uuidV4 } from "uuid";

//before return
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
]);
// inside return
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
</div>;
```
