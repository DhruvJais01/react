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
