import React, { useCallback, useState } from "react";
import FormController from "../components/form-controller";
import "../styles/customer-registration.css";
import axiosInstance from "../api/axios-instance";

// initial values
const intialFormValues = {
  first_name: "",
  last_name: "",
  residence: "",
  post_code: "",
  town: "",
  address_1: "",
  address_2: "",
  country_code: "",
  telphone_number: "",
  country_of_birth: "",
};

const CustomerRegistration = () => {
  // to set form values
  const [formValues, setFormValues] = useState(intialFormValues);
  // to handle form
  const handler = useCallback(
    (e) => {
      const { value, name } = e.target;
      setFormValues({
        ...formValues,
        [name]: value,
      });
    },
    [formValues]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    axiosInstance.post("/customer-regitration").then((res)=>{
        console.log("res", res);
    }).catch((err)=>{
        console.log("err", err);
    })
  };

  const renderOptionsList = (list = []) => {
    return (
      list?.length > 0 &&
      list.map(({ value, displayname }, index) => (
        <option value={value} key={index}>
          {displayname}
        </option>
      ))
    );
  };

//   integrate options list with Api's
  const optionsList = [
    { value: "IN", displayname: "India" },
    { value: "UK", displayname: "United Kingdom" },
  ];

  const codesList = [
    {value: "+44", displayname: "United Kingdom (+44)"},
    {value: "+91", displayname: "India (+91)"}
  ];

  const countriesList = [
    {value: "IN", displayname: "India"},
    {value: "UK", displayname:"United Kingdom"}
  ]
  

  return (
    <div className="customer-registration">
      <h1>Customer Registration</h1>
      <div className="container">
        <div className="title">Customer Details</div>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="col-2">
              <FormController
                control="input"
                type="text"
                name="first_name"
                label={"First Name(s)"}
                required={true}
                onChange={handler}
                value={formValues?.first_name}
              />
              <FormController
                control="input"
                type="text"
                name="last_name"
                label={"Last Name(s)"}
                required={true}
                onChange={handler}
                value={formValues?.last_name}
              />
              <FormController
                control="select"
                name="residence"
                label={"Country of Residence"}
                required={true}
                onChange={handler}
                value={formValues?.residence}
              >
                {renderOptionsList(optionsList)}
              </FormController>
              <FormController
                control="input"
                type="text"
                name="post_code"
                label={"Postcode"}
                required={true}
                onChange={handler}
                value={formValues?.post_code}
              />
              <FormController
                control="input"
                type="text"
                name="town"
                label={"Town"}
                required={true}
                onChange={handler}
                value={formValues?.town}
              />
              <FormController
                control="input"
                type="text"
                name="address_1"
                label={"Address 1"}
                required={true}
                onChange={handler}
                value={formValues?.address_1}
              />
              <FormController
                control="input"
                type="text"
                name="address_2"
                label={"Address 2"}
                required={false}
                onChange={handler}
                value={formValues?.address_2}
              />
              <FormController
                control="select"
                name="country_code"
                label={"Country Code"}
                required={false}
                onChange={handler}
                value={formValues?.country_code}
              >
                {renderOptionsList(codesList)}
              </FormController>
              <FormController
                control="input"
                type="text"
                name="telphone_number"
                label={"Telephone Number"}
                required={true}
                onChange={handler}
                value={formValues?.telphone_number}
              />
              <FormController
                control="select"
                name="country_of_birth"
                label={"Country Of Birth"}
                required={true}
                value={formValues?.country_of_birth}
                onChange={handler}
              >
                {renderOptionsList(countriesList)}
              </FormController>
            </div>
            <div className="submit-btn">
              <input type="submit" value={"Register"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CustomerRegistration;
