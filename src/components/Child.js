import React from "react";

const Child = (props) => {
  return (
    <div className="child">
      <button onClick={() => props.handleChange("Nick")}>Change Name</button>
      <button onClick={() => props.reverseChange("Parent")}>
        Reverse Name
      </button>
    </div>
  );
};

export default Child;
