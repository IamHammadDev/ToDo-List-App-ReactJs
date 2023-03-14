import React, { useState } from "react";

const App = () => {
  let time = new Date().toLocaleTimeString();
  const [cTime, setCtime] = useState(time);

  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };
  setInterval(UpdateTime, 1000);
  return (
    <>
      <h1> {cTime} </h1>
      {/* <button onClick={UpdateTime}>Get time</button> */}
    </>
  );
};
export default App;
