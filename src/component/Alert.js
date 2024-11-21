import React from "react";

export default function Alert(props) {
  return (
    <div style={{ height: "40px", width: "100%" }}>
      {props.alert && (
        <div className="container">
          <div
            className={`alert alert-${props.alert.type} alert-dismissible fade show `}
            role="alert"
          >
            <strong>{props.alert.type}</strong> {props.alert.message}
          </div>
        </div>
      )}
    </div>
  );
}
