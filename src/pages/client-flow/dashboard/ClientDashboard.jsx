import React, { useState } from 'react';
import "./dashboard.scss"
import { BiSearch } from 'react-icons/bi';
import Button from '../../../atomic/atoms/button/Button';
import Dashboard from './dashboardtab/Dashboard';
import Jobs from './jobs/Jobs';
import EnhancedNavbar from '../../../organisms/navbar/EnhancedNavbar';
import Alert from './notification/Alert';


const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
    <EnhancedNavbar/>
    <div className='client-dashboard_wrapper'>
      <Alert/>
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
    </>
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
          Discover Talent
      </Tab>
      <Tab title="Wallet">
          Wallet
      </Tab>
    </Tabs>


  );
  
};

export default App;
