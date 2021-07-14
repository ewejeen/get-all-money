import { Box } from '@chakra-ui/react';
import React from 'react';
import Menu from '../components/Menu'


const bank = ({search, banklist}) => {
    return (
        <div className="bank-template">
            <Menu />
            <Box mb={4}>
                {search}
            </Box>
            <Box>
                {banklist}
            </Box>
        </div>
    );
};

export default bank;