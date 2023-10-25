import React, { useState } from "react";

function Button({ contents, handler }) {
  return (
    <button className="normal-button" onClick={() => handler(contents)}>
      {contents}
    </button>
  );
}

export default Button;
