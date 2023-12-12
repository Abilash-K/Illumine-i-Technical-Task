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
  const [saveToast, setSaveToast] = useState(false);
  const getDb = collection(db, "formData");
  const detailsDb = collection(db, "enquiryDetails");
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
  const handleActiveStatus = (data) => {
    setActive(data);
  };
  const submitData = async () => {
    try {
      await addDoc(detailsDb, {
        details,
      });
    } catch (err) {
      console.error(err);
    }
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
      if (active) {
        submitData();
        setSaveToast(true);
      }
    } else {
      setToastMsg({
        showError: true,
        missingFields: missingFields,
      });
    }
    console.log(toastMsg);
  };
  const handleSave = () => {
    setSaveToast(false);
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
      <CustomerForms
        fields={formFieldsData}
        handleFormData={handleFormData}
        handleActiveStatus={handleActiveStatus}
      />
      <Footer saveData={validateDetails} />
      <Snackbar
        autoHideDuration={6000}
        open={toastMsg.showError}
        onClose={handleToast}
        message={`Please fill ${toastMsg.missingFields}`}
      />
      <Snackbar
        autoHideDuration={6000}
        message="Save Successful"
        open={saveToast}
        onClose={handleSave}
      />
    </div>
  );
};

export default HomeScreen;
