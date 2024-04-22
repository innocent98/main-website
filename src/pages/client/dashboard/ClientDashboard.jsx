import React, { useState } from 'react';
import "./dashboard.scss"
import { BiSearch } from 'react-icons/bi';
import Button from '../../../atomic/atoms/button/Button';
import Dashboard from './dashboardtab/Dashboard';
import Jobs from './jobs/Jobs';

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (

    <div className='client-dashboard_wrapper'>
    <div className='welcome_wrapper'>
      <h1>Welcome Solomon</h1>
      <div className='search'>
        <div className='left'>
        <BiSearch/>
          <input className='input' placeholder='Search for jobs, talents' />
        </div>
          <Button className="search-btn">Search</Button>
      </div>  
    </div>

    <div className="tabs">
      <div className="tab-headers">
        {React.Children.map(children, (child, index) => (
          <div
            key={index}
            className={`tab-header ${index === activeTab ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            {child.props.title}
          </div>
        ))}
      </div>
      <div className="tab-content">
        {React.Children.toArray(children)[activeTab]}
      </div>
    </div>

    </div>
  );
};

const Tab = ({ children }) => {
  return <div className="tab">
    {children}</div>;
};

// Usage
const App = () => {
  return (
    <Tabs>
      <Tab title="Dashboard">
          <Dashboard/>
      </Tab>
      <Tab title="Jobs">
        <Jobs/>
      </Tab>
      <Tab title="Discover Talent">

      </Tab>
      <Tab title="Wallet">
        <h2>Tab 4 Content</h2>
        <p>This is the content of Tab 3.</p>
      </Tab>
    </Tabs>


  );
};

export default App;
