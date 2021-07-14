import React, { Component } from 'react';

import { Grid, GridItem, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import {
    Search2Icon
} from '@chakra-ui/icons'
import { NavLink } from 'react-router-dom';

class Search extends Component {
    render() {
        return (
            <Grid templateColumns="repeat(4, 1fr)" gap={5} alignItems="center" > 
                <GridItem colSpan={2}>
                    <InputGroup>
                        <InputRightElement children={<Search2Icon color="gray.500" />} />
                        <Input placeholder="검색"/>
                    </InputGroup>
                </GridItem>       
                <GridItem colStart={3} colEnd={5} display="flex" alignItems="center" justifyContent="space-between">
                    <NavLink to="/special" >특판 구경가기</NavLink>
                </GridItem>        
            </Grid>
        );
    }
}

export default Search;