import React from 'react';
import Menu from '../components/Menu'
import {
    Box,
    Table, Thead, Tbody, Tr, Th, Td,
    Tabs, TabList, TabPanels, Tab, TabPanel
  } from "@chakra-ui/react"

// 적금 데이터 리스트
const savingsList = [
    {
        id: 1,
        bank: '신한은행',
        rate: '2.3%',
        max: '월 10만원'
    },
    {
        id: 2,
        bank: '하나은행',
        rate: '2.0%',
        max: '월 20만원'
    },
    {
        id: 3,
        bank: '국민은행',
        rate: '2.1%',
        max: '월 30만원'
    },
    {
        id: 4,
        bank: '우리은행',
        rate: '1.9%',
        max: '월 10만원'
    }
];
// 적금 리스트 render
const renderSavings = savingsList.map(item => {
    return (
        <Tr key={item.id}>
            <Td>{item.bank}</Td>
            <Td isNumeric>{item.rate}</Td>
            <Td isNumeric>{item.max}</Td>
            <Td>계산</Td>
            <Td>보기</Td>
        </Tr>
    )
})

// 예금 데이터 리스트
const depositList = [
    {
        id: 1,
        bank: '신한은행2',
        rate: '2.3%',
        max: '월 10만원'
    },
    {
        id: 2,
        bank: '하나은행2',
        rate: '2.0%',
        max: '월 20만원'
    },
    {
        id: 3,
        bank: '국민은행2',
        rate: '2.1%',
        max: '월 30만원'
    },
    {
        id: 4,
        bank: '우리은행2',
        rate: '1.9%',
        max: '월 10만원'
    }
];
// 예금 리스트 render
const renderDeposit = depositList.map(item => {
    return (
        <Tr key={item.id}>
            <Td>{item.bank}</Td>
            <Td isNumeric>{item.rate}</Td>
            <Td isNumeric>{item.max}</Td>
            <Td>계산</Td>
            <Td>보기</Td>
        </Tr>
    )
})

const interest = () => {
    return (
        <div id="wrap">
            <Box>
                <Menu />
            </Box>
            <div id="inner">
                <Tabs isFitted variant="enclosed">
                    <TabList mb="1em">
                        <Tab>적금</Tab>
                        <Tab>예금</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <p>적금금리</p>
                            <Table variant="simple">
                                <Thead>
                                    <Tr>
                                        <Th>은행명</Th>
                                        <Th isNumeric>금리</Th>
                                        <Th isNumeric>최대불입액</Th>
                                        <Th>이자미리보기</Th>
                                        <Th>보러가기</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {renderSavings}
                                </Tbody>
                            </Table>
                        </TabPanel>
                        <TabPanel>
                            <p>예금금리</p>
                            <Table variant="simple">
                                <Thead>
                                    <Tr>
                                        <Th>은행명</Th>
                                        <Th isNumeric>금리</Th>
                                        <Th isNumeric>최대불입액</Th>
                                        <Th>이자미리보기</Th>
                                        <Th>보러가기</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {renderDeposit}
                                </Tbody>
                            </Table>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </div>
        </div>
    );
};

export default interest;