import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "Sylvia",
    lastName: "Woods",
    admin: false,
    })
  // const [firstName, setFirstName] = useState("John");
  // const [lastName, setLastName] = useState("Henry");

  // function handleFirstNameChange(event) {
  //   setFormData({
  //     ...formData, firstName: event.target.value,
  //   })
  //   // setFirstName(event.target.value);
  // }

  // function handleLastNameChange(event) {
  //   setFormData({
  //     ...formData, lastName: event.target.value,
  //   })
  //   // setLastName(event.target.value);
  // }
  function handleChange(event) {
    // name is the KEY in the formData object we're trying to update
    const name = event.target.name;
    let value = event.target.value;

    if (event.target.type === "checkbox") {
      value = event.target.checked;
    }
  
    setFormData({
      ...formData,
      [name]: value,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text"name='firstName'onChange={handleChange} value={formData.firstName} />
      <input type="text" name='lastName' onChange={handleChange} value={formData.lastName} />
      <input
        type="checkbox"
        name="admin"
        onChange={handleChange}
        checked={formData.admin}
      />
      <button type="submit">Submit</button> 
    </form>
  );
}

export default Form;
