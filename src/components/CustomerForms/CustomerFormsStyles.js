export const styles = {
  customerForms: {
    display: "flex",
    flexWrap: "wrap",
  },
  formElement: {
    padding: "1rem",
    flex: "1 0 21%",
  },
};

export const formStyles = (index) => {
  if (index === 4 || index === 5) {
    return {
      width: "50%",
    };
  }
  if (index === 16) {
    return {
      width: "100vh",
    };
  }
};
