import React from "react";

function DisplayStatus({ type, message }) {
  return (
    <div style={{ color: type === "success" ? "green" : "red", marginTop: "10px" }}>
      {message}
    </div>
  );
}

export default DisplayStatus;