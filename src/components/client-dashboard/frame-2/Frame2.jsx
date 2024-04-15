import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const TabbedInterface = () => {
    return (
        <Tabs>
            <TabList>
                <Tab>Tab 1</Tab>
                <Tab>Tab 2</Tab>
                <Tab>Tab 3</Tab>
                <Tab>Tab 4</Tab>
            </TabList>
            <TabPanel>
                <h2>Content for Tab 1</h2>
            </TabPanel>
            <TabPanel>
                <h2>Content for Tab 2</h2>
            </TabPanel>
            <TabPanel>
                <h2>Content for Tab 3</h2>
            </TabPanel>
            <TabPanel>
                <h2>Content for Tab 4</h2>
            </TabPanel>
        </Tabs>
    );
};

export default TabbedInterface;
