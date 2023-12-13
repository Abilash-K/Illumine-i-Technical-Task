export const styles = {
  customerForms: {
    display: "flex",
    flexWrap: "wrap",
    borderRadius: "1rem",
    marginTop: "50px",
    elevation: 1,
    // boxShadow: "8.0px 16.0px 16.0px hsl(0deg 0% 0% / 0.25)",

    // boxShadow:
    //   "0 1px 1px hsl(0deg 0% 0% / 0.075),0 2px 2px hsl(0deg 0% 0% / 0.075),0 4px 4px hsl(0deg 0% 0% / 0.075),0 8px 8px hsl(0deg 0% 0% / 0.075),0 16px 16px hsl(0deg 0% 0% / 0.075)",
    boxShadow: "0px 0px 16px 16px #eee",
    alignItems: "center",
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
      width: "60%",
      height: "20rem",
    };
  }
};
