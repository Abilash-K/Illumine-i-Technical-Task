import React, { useEffect, useState } from "react";
import { styles, formStyles } from "./CustomerFormsStyles";
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
  const [date, setDate] = useState("");
  useEffect(() => {
    const currentDate = new Date().toLocaleDateString() + "";
    setDate(currentDate);
  }, []);

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
      {fields.map((e, i) => {
        if (e.type === "select") {
          const selectValue = selectedValue[e.name] || "";
          return (
            <div style={styles.formElement} key={i}>
              <FormControl fullWidth>
                <InputLabel id={e.name}>{e.name}</InputLabel>
                <Select
                  sx={{ width: "100%" }}
                  labelId={e.name}
                  label={e.name}
                  onChange={handleSelectChange}
                  value={selectValue}
                  name={e.name}
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
                  onChange={handleInputChange}
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
                control={<Switch />}
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
      <button onClick={test}>Submit</button>
    </div>
  );
};

export default CustomerForms;
