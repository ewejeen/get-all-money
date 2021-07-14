import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import React, { Component } from 'react';

class BankList extends Component {
    render() {
        return (
            <Tabs isFitted variant="enclosed">
                <TabList mb="1em">
                    <Tab>시중은행</Tab>
                    <Tab>저축은행</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <p>ss</p>
                    </TabPanel>
                    <TabPanel>
                        <p>bb</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        );
    }
}

export default BankList;