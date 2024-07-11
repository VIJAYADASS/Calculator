import React, { Suspense } from "react";
import "./App.css";
const MyComponent = React.lazy(() => import("./assets/Calculator"));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <MyComponent />
      </Suspense>
      {/* <ToggleSwitch /> */}
    </div>
  );
}

export default App;
