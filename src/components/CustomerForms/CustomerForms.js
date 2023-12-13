import React, { useEffect, useState } from "react";
import { styles, formStyles } from "./CustomerFormsStyles";
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  TextField,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

const CustomerForms = ({
  handleCheckBoxData,
  fields,
  handleFormData,
  handleActiveStatus,
  currentData,
  handleInput,
}) => {
  // State hooks to manage form data and selected values
  const [date, setDate] = useState("");

  // useEffect to set the current date when the component mounts
  useEffect(() => {
    const currentDate = new Date().toLocaleDateString() + "";
    setDate(currentDate);
  }, []);

  // Handler for select input changes
  const handleSelectChange = (e) => {
    handleInput(e);
  };

  // Handler for text input changes
  const handleInputChange = (e) => {
    handleInput(e);
  };

  // Handler for checkbox changes
  const handleCheckBox = (e) => {
    handleCheckBoxData(e);
  };

  // Determines the input type based on field name
  const inputFieldType = (fieldName) => {
    if (fieldName === "Size" || fieldName === "UOM") {
      return "number";
    }
    if (fieldName === "Amount" || fieldName === "Unit Number") {
      return "text";
    }

    return "text";
  };

  // Checks if payment type needs to be disabled based on certain conditions
  const paymentHandle = (fieldName) => {
    if (fieldName === "Agent") {
      if (
        currentData["Yard"] === "HK" &&
        currentData["Customer Name"] === "JACK"
      ) {
        return true;
      } else {
        return false;
      }
    }
    if (fieldName === "Payment Type") {
      if (!currentData["Amount"] || currentData["Amount"] === "") {
        return true;
      } else {
        return false;
      }
    }
    return false;
  };
  // Rendering the form elements based on the provided 'fields' prop
  return (
    <div style={styles.customerForms}>
      {fields.map((e, i) => {
        if (e.type === "select") {
          const selectValue = currentData[e.name] || "";
          return (
            <div style={styles.formElement} key={i}>
              <FormControl fullWidth>
                <InputLabel id={e.name}>{e.name}</InputLabel>
                <Select
                  sx={{ width: "100%" }}
                  labelId={e.name}
                  label={e.name}
                  onChange={handleSelectChange}
                  value={paymentHandle(e.name) ? "Not Applicable" : selectValue}
                  name={e.name}
                  disabled={paymentHandle(e.name)}
                  required
                >
                  {Array.isArray(e.options) && e.options.length > 0 ? (
                    e.options.map((option, optionIndex) => (
                      <MenuItem key={optionIndex} value={option}>
                        {option}
                      </MenuItem>
                    ))
                  ) : (
                    <MenuItem value="">No options available</MenuItem>
                  )}
                </Select>
              </FormControl>
            </div>
          );
        } else if (e.type === "input") {
          return (
            <div key={i} style={styles.formElement}>
              <FormControl sx={{ width: "100%" }}>
                <TextField
                  style={formStyles(i)}
                  name={e.name}
                  label={e.name}
                  multiline={e.name === "Remarks" ? true : false}
                  rows={4}
                  type={inputFieldType(e.name)}
                  onChange={handleInputChange}
                  value={currentData[e.name] || ""}
                  inputProps={
                    e.name === "Amount"
                      ? {
                          maxLength: 10,
                        }
                      : {}
                  }
                ></TextField>
              </FormControl>
            </div>
          );
        } else if (e.type === "checkbox") {
          return (
            <div key={i} style={styles.formElement}>
              <FormControlLabel
                name={e.name}
                required
                control={
                  <Checkbox
                    checked={currentData[e.name] || false}
                    onChange={handleCheckBox}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                }
                label={e.name}
              />
            </div>
          );
        } else if (e.type === "date") {
          return (
            <div key={i} style={styles.formElement}>
              <FormControl sx={{ width: "100%" }}>
                <TextField
                  style={formStyles(i)}
                  name={e.name}
                  label={e.name}
                  disabled
                  defaultValue={date}
                ></TextField>
              </FormControl>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default CustomerForms;
