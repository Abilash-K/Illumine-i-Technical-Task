import React, { Suspense, lazy } from "react";
import Loading from "./components/Loading/Loading.js";
// import HomeScreen from "./screens/HomeScreen";

const HomeScreen = lazy(
  () =>
    // Simulate a delay of 6 seconds before loading the component
    new Promise((resolve) =>
      setTimeout(() => resolve(import("./screens/HomeScreen.js")), 2000)
    )
);
const App = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <HomeScreen />
      </Suspense>
    </>
  );
};

export default App;
