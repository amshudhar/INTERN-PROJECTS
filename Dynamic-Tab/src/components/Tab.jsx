import React, { useState } from "react";

const Tab = () => {
  const [tabs, setTabs] = useState([
    { id: 1, title: "Tab 1", content: "💫WELCOME💫" },
  ]);
  const [activeTab, setActiveTab] = useState(1);
  

  const addTab = () => {
    const newId = tabs.length + 1;
    setTabs([...tabs, { id: newId, title: `Tab ${newId}`, content: `Content for Tab ${newId}` }]);
    setActiveTab(newId);
  };

  const removeTab = (id) => {
    if (tabs.length === 1) return;
    const newTabs = tabs.filter((tab) => tab.id !== id);
    setTabs(newTabs);
    if (activeTab === id) {
      setActiveTab(newTabs[0]?.id || 1);
    }
  };

  return (
    <div className="first">
    <div className="container-fluid">
      <div className="tabs">
        {tabs.map((tab) => (
          <div key={tab.id} className={`tab ${activeTab === tab.id ? "active" : ""}`} onClick={() => setActiveTab(tab.id)}>
            {tab.title} 
            {tabs.length > 1 && (
              <button className="close-btn" onClick={(e) => { e.stopPropagation(); removeTab(tab.id); }}>
                x
              </button>
            )}
          </div>
        ))}
        <button className="add-btn" onClick={addTab}>+</button>
      </div>
      <div className="tab-content">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
      
    </div>
    </div>
  );
};

export default Tab;