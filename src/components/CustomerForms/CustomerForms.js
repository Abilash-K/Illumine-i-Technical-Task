import React from "react";
import "./CustomerForms.css";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";

const CustomerForms = () => {
  return (
    <div className="customerForms-container">
      <div className="form-items">
        <FormControl fullWidth>
          <InputLabel id="yard">Yard</InputLabel>
          <Select sx={{ width: "250px" }} labelId="yard" label="Select">
            <MenuItem value="optio1">Option 1</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default CustomerForms;
