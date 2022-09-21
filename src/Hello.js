import React, { useState } from "react";

export default function Hello() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {" "}
        {show ? "Hide the text below" : "Show the text below"}
      </button>{" "}
      <br /> <br />
      {show && <div> Hi, I am here </div>}
    </div>
  );
}
