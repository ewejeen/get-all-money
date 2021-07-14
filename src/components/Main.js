import React from 'react';
import './Main.css';
import { NavLink } from 'react-router-dom';
import { SimpleGrid,Center,Button } from '@chakra-ui/react'
const Main = () => {
    return (
        <Center className="centered">
            <SimpleGrid columns={2} spacing={5}>
                <Button size="lg">
                    <NavLink to="/bank">은행별 예적금</NavLink>
                </Button>
                <Button size="lg">
                    <NavLink to="/interest">금리별 예적금</NavLink>
                </Button>
            </SimpleGrid>
        </Center>
    );
};

export default Main;