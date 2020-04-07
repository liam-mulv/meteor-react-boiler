import React from "react";

function Icon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path
        d="M0 192v272a48 48 0 0048 48h352a48 48 0 0048-48V192zm192 176a16 16 0 01-16 16H80a16 16 0 01-16-16v-96a16 16 0 0116-16h96a16 16 0 0116 16zm112-240h32a16 16 0 0016-16V16a16 16 0 00-16-16h-32a16 16 0 00-16 16v96a16 16 0 0016 16zm-192 0h32a16 16 0 0016-16V16a16 16 0 00-16-16h-32a16 16 0 00-16 16v96a16 16 0 0016 16z"
        className="fa-secondary"
      ></path>
      <path
        d="M448 112v80H0v-80a48 48 0 0148-48h48v48a16 16 0 0016 16h32a16 16 0 0016-16V64h128v48a16 16 0 0016 16h32a16 16 0 0016-16V64h48a48 48 0 0148 48z"
        className="fa-primary"
      ></path>
    </svg>
  );
}

export default Icon;
