import React, { useState, useEffect } from "react";
import TopBar from "../components/TopBar/TopBar";
import CustomerForms from "../components/CustomerForms/CustomerForms";
import { db } from "../config/Firebase";
import { getDocs, collection, addDoc } from "firebase/firestore";
import Footer from "../components/Footer/Footer";
import { Snackbar } from "@mui/material";

const HomeScreen = () => {
  const [formFieldsData, setFormFieldsData] = useState([]);
  const [toastMsg, setToastMsg] = useState({
    showError: false,
    missingFields: [],
  });
  const [active, setActive] = useState(false);
  const [details, setDetails] = useState({});
  const getDb = collection(db, "formData");
  const getData = async () => {
    try {
      const data = await getDocs(getDb);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setFormFieldsData(filteredData[0].fields);
    } catch (err) {
      console.error(err);
    }
  };
  const handleFormData = (data) => {
    setDetails(data);
  };
  const validateDetails = () => {
    const requiredFields = ["Customer Name", "Unit Number"];
    const missingFields = [];
    for (const field of requiredFields) {
      if (!details[field]) {
        missingFields.push(field);
      }
    }
    if (missingFields.length === 0) {
      setToastMsg((prev) => ({
        ...prev,
        showError: false,
      }));
    } else {
      setToastMsg({
        showError: true,
        missingFields: missingFields,
      });
    }
    console.log(toastMsg);
  };
  const handleToast = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setToastMsg({
      showError: false,
    });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <TopBar headerMessage={active} />
      <CustomerForms fields={formFieldsData} handleFormData={handleFormData} />
      <Footer saveData={validateDetails} />
      <Snackbar
        autoHideDuration={6000}
        open={toastMsg.showError}
        onClose={handleToast}
        message={`Please fill ${toastMsg.missingFields}`}
      />
    </div>
  );
};

export default HomeScreen;
