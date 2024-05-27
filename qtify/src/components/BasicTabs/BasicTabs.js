import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stylesheet from '../BasicTabs/BasicTabs.module.css';
import 'typeface-poppins';

function CustomTabPanel(props) {

    const { children, value, index, ...other } = props;

    return (
        <div
            role='tabpanel'
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    )
}

CustomTabPanel.prototype = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function allyProps(index) {
    return {
        
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
export default function BasicTabs({ filteredData }) {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        filteredData(newValue)
        setValue(newValue)
        //     console.log('new value is ' + newValue)
    }
    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label='basic tabs' TabIndicatorProps={{
                    style: { backgroundColor: "#34c94b" }
                }} textColor='#34c94b' className={Stylesheet.tabs}>
                    <Tab label="all" {...allyProps(0)} />
                    <Tab label="rock" {...allyProps(1)} />
                    <Tab label="pop" {...allyProps(2)} />
                    <Tab label="jazz" {...allyProps(3)} />
                    <Tab label="blues" {...allyProps(4)} />
                </Tabs>
            </Box>
        </Box>
    )
}