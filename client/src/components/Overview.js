import React from "react";
import Time from "./Time";
import Support from "./Support";

import "./Overview.css";

function Overview(props) {
  return (
    <div className="overview">
      <Time />
      <div className="overview-body">
        <Support />
        <input type="text" />
      </div>
    </div>
  );
}

export default Overview;
