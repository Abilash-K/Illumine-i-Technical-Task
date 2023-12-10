import React, { useState, useEffect } from "react";
import TopBar from "../components/TopBar/TopBar";
import CustomerForms from "../components/CustomerForms/CustomerForms";
import { db } from "../config/Firebase";
import { getDocs, collection } from "firebase/firestore";

const HomeScreen = () => {
  const [formFieldsData, setFormFieldsData] = useState([]);
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
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <TopBar />
      <CustomerForms fields={formFieldsData} />
    </div>
  );
};

export default HomeScreen;
