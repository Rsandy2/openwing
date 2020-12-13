import React from "react";

function Name({ firstname, lastname }) {
  return (
    <h2>
      Hello, {firstname} {lastname}
    </h2>
  );
}

// export default (Hello, Last);
export { Name };
