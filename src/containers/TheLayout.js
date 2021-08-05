import React from "react";
import { TheContent, TheSidebar, TheFooter, TheHeader } from "./index";
// import Leads from "./Leads";

const TheLayout = () => {
  return (
    <div className="c-app c-default-layout">
      <TheSidebar />
      <div className="c-wrapper">
        <TheHeader />
        <div className="c-body">
          <TheContent />
          {/* <Leads /> */}
        </div>
        <TheFooter />
      </div>
    </div>
  );
};

export default TheLayout;
