import React from 'react';
import TabbedInterfaceMolecule from '../../../molecules/TabbedInterfaceMolecule/TabbedInterfaceMolecule';
import Dashboard from './Tab-contents/Dashboard/Dashboard';

const App = () => {
    const tabs = ['Tab 1', 'Tab 2', 'Tab 3' ,'Tab 4'];
    const tabPanels = [
        <h2 key="1"><Dashboard/></h2>,
        <h2 key="2">Content for Tab 2</h2>,
        <h2 key="3">Content for Tab 3</h2>,
        <h2 key="3">Content for Tab 3</h2>
    ];

    return (
        <div>
        
            <TabbedInterfaceMolecule tabs={tabs} tabPanels={tabPanels} />
        </div>
    );
};

export default App;
