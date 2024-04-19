import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const TabbedInterfaceMolecule = ({ tabs, tabPanels }) => {
    return (
        <Tabs>
            <TabList>
                {tabs.map((tab, index) => (
                    <Tab key={index}>{tab}</Tab>
                ))}
            </TabList>
            {tabPanels.map((panel, index) => (
                <TabPanel key={index}>{panel}</TabPanel>
            ))}
        </Tabs>
    );
};

export default TabbedInterfaceMolecule;
