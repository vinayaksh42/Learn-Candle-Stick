import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import LeaderSlot from '../leaderSlot/leaderSlot';

const leaderboardData = [
    {
        "name": "John Doe",
        "score": "100",
        "image": "https://source.unsplash.com/random/100x100"
    },
    {
        "name": "Jane Doe",
        "score": "200",
        "image": "https://source.unsplash.com/random/100x100"
    },
    {
        "name": "John Doe",
        "score": "300",
        "image": "https://source.unsplash.com/random/100x100"
    },
]

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
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
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (

        <Box sx={{ width: '100%' }}>
            <h1>LeaderBoard</h1>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
                    <Tab label="7 Days" {...a11yProps(0)} />
                    <Tab label="One Month" {...a11yProps(1)} />
                    <Tab label="All Time" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                {
                    leaderboardData.map((leader, index) => {
                        return (
                            <LeaderSlot key={index} image={leader.image} score={leader.score} name={leader.name} />
                        )
                    })
                    
                }
                
            </TabPanel>


            <TabPanel value={value} index={1}>
            {
                    leaderboardData.map((leader, index) => {
                        return (
                            <LeaderSlot key={index} image={leader.image} score={leader.score} name={leader.name} />
                        )
                    })
                }
                

            </TabPanel>
            <TabPanel value={value} index={2}>
            {
                    leaderboardData.map((leader, index) => {
                        return (
                            <LeaderSlot key={index} image={leader.image} score={leader.score} name={leader.name} />
                        )
                    })
                }
                

            </TabPanel>

        </Box>
    );
}
