import React, { useState } from "react";
import TabNavItem from "../TabItem/TabNavItem";
import TabContent from "../TabItem/TabContent";
import { GraphSection } from "../GraphSection/GraphSection";
 
const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
 
  return (
    <div className="Tabs">
      <ul className="nav">
        <TabNavItem title="Edu Crypto" id="educrypto" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="Home" id="home" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="News" id="news" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="Learning Resources" id="resources" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="Graphs" id="graphs" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="Sign Up" id="signup" activeTab={activeTab} setActiveTab={setActiveTab}/>
      </ul>
 
      <div className="outlet">
        <TabContent id="educrypto" activeTab={activeTab}>
          <p>Home Page</p>
        </TabContent>
        <TabContent id="home" activeTab={activeTab}>
          <p>Home Page</p>
        </TabContent>
        <TabContent id="news" activeTab={activeTab}>
          <p>News Page</p>
        </TabContent>
        <TabContent id="resources" activeTab={activeTab}>
          <p>Resources Page</p>
        </TabContent>
        <TabContent id="graphs" activeTab={activeTab}>
          <p>GraphSection</p>
        </TabContent>
        <TabContent id="signup" activeTab={activeTab}>
          <p>Sign Up Page</p>
        </TabContent>
      </div>
    </div>
  );
};
 
export default Tabs;
