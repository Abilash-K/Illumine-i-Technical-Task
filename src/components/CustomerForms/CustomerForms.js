import React, { useState } from "react";
import { styles } from "./CustomerFormsStyles";
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  TextField,
  FormControlLabel,
  Switch,
} from "@mui/material";

const CustomerForms = ({ fields }) => {
  const [currentData, setCurrentData] = useState({});
  const [selectedValue, setSelectedValue] = useState({});

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setSelectedValue((prevSelectValues) => ({
      ...prevSelectValues,
      [name]: value,
    }));
    setCurrentData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const test = () => {
    console.log(currentData);
  };

  return (
    <div style={styles.customerForms}>
      {/* <div style={styles.formItems}>
        <p>Text</p>
      </div> */}
      {fields.map((e, i) => {
        if (e.type === "select") {
          const selectValue = selectedValue[e.name] || "";
          return (
            <div style={styles.formItems} key={i}>
              <FormControl fullWidth>
                <InputLabel id={e.name}>{e.name}</InputLabel>
                <Select
                  sx={{ width: "250px" }}
                  labelId={e.name}
                  label={e.name}
                  onChange={handleSelectChange}
                  value={selectValue}
                  name={e.name}
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
            <div key={i} style={styles.formItems}>
              <FormControl>
                <TextField
                  name={e.name}
                  label={e.name}
                  onChange={handleInputChange}
                ></TextField>
              </FormControl>
            </div>
          );
        } else if (e.type === "checkbox") {
          return (
            <div key={i} style={styles.formItems}>
              <FormControlLabel
                name={e.name}
                required
                control={<Switch />}
                label={e.name}
              />
            </div>
          );
        }
        return null;
      })}
      <button onClick={test}>Submit</button>
    </div>
  );
};

export default CustomerForms;
