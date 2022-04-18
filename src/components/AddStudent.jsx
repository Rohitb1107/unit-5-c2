import "../App.css";
import { useState } from "react";

export const AddStudent = () => {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
    age: "",
    tenth_score: "",
    twelth_score: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(form);
    fetch("http://localhost:8080/students", {
      method: "POST",
      body: JSON.stringify(form),
    });
  };

  return (
    <form className="addstudent" onSubmit={handleSubmit}>
      <div className="f-name">
        Firstname:{" "}
        <input
          onChange={handleChange}
          type="text"
          name="first_name"
          className="first_name"
          placeholder="Enter first name"
        />
      </div>
      <div className="f-name">
        {" "}
        Last Name:
        <input
          onChange={handleChange}
          type="text"
          name="last_name"
          className="last_name"
          placeholder="Enter last name"
        />
      </div>
      <div className="f-name">
        {" "}
        Email:
        <input
          onChange={handleChange}
          type="email"
          name="email"
          className="email"
          placeholder="Enter email"
        />
      </div>

      <div className="gender">
        Gender: {/* NOTE: radio boxes only work when they have same `name`. */}
        <div>
          Male
          <input
            onChange={handleChange}
            name="gender"
            className="male"
            type="radio"
            value={"male"}
          />{" "}
          Female{" "}
          <input
            onChange={handleChange}
            name="gender"
            className="female"
            type="radio"
            value={"female"}
          />
        </div>
      </div>
      <div className="f-name">
        Age{" "}
        <input
          onChange={handleChange}
          type="number"
          name="age"
          className="age"
          placeholder="Enter age"
        />
      </div>
      <div className="f-name">
        Tenth Score:{" "}
        <input
          onChange={handleChange}
          type="number"
          name="tenth_score"
          className="tenth_score"
          placeholder="Enter 10th score"
        />{" "}
      </div>
      <div className="f-name">
        Twelth Score:{" "}
        <input
          onChange={handleChange}
          type="number"
          name="twelth_score"
          className="twelth_score"
          placeholder="Enter 12th score"
        />{" "}
      </div>
      <div className="last-part">
        <select 
          value={""} // select dropdown needs both value and onChange attributes
          name="preferred_branch"
          className="preferred_branch"
        >
          <option value="law">law</option>
          <option value="commerce">commerce</option>
          <option value="science">science</option>
          <option value="sports">sports</option>
          <option value="arts">arts</option>
          <option value="acting">acting</option>
        </select>
      </div>

      <input id="submit-btn" className="submit" type="submit" value="Submit" />

      {
        // <div className="error"></div>
        // show this div with proper error before submitting form, if there's anything not provided
        // eg: first name missing, age cannot be greater than 100 etc
      }
    </form>
  );
};
