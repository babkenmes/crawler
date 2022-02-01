import React, { useState, useEffect } from "react";
import Grid from '@material-ui/core/Grid';
import * as groupService from "../services/group"
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';

import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import All from "./Keywords/All"
import Running from "./Keywords/Running"
import Landed from "./Keywords/Landed"

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}


function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
    }
}));

export default function Keywords() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    //TODO implement pagination
    const [page, setPage] = useState(1);
    const [error, setError] = useState(false);
    const [animationGroups, setAnimationGroups] = useState([]);
    const [deviceGroups, setDeviceGroups] = useState([]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    const animationGroupLookup = {};
    animationGroups.forEach(group => {
        animationGroupLookup[group._id] = group.name;
    })

    const deviceGroupLookup = {};
    deviceGroups.forEach(group => {
        deviceGroupLookup[group._id] = group.name;
    })

    useEffect(() => {
        getAnimationGroups();
        getDeviceGroups();
    }, [page]);

    const getAnimationGroups = () => {
        return groupService.getAnimationGroups().then(({ groups }) => setAnimationGroups(groups)).catch(err => setError(err.toString()));
    }

    const getDeviceGroups = () => {
        return groupService.getDeviceGroups().then(({ groups }) => setDeviceGroups(groups)).catch(err => setError(err.toString()));
    }

    return (
        <div className={classes.root}>
            <Collapse in={error}>
                <Alert
                    severity="error"
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setError(false);
                            }}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                >
                    {error}
                </Alert>
            </Collapse>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="All" {...a11yProps(0)} />
                    <Tab label="Running" {...a11yProps(1)} />
                    <Tab label="Landed" {...a11yProps(2)} />

                    {/* <Tab label="Finished keywords" {...a11yProps(1)} /> */}
                    {/* <Tab label="Keyword with error" {...a11yProps(2)} /> */}
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <Grid item xs={12} className="productType-container">
                        <All deviceGroupLookup={deviceGroupLookup} animationGroupLookup={animationGroupLookup} setError={setError} />
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <Grid item xs={12} className="productType-container">
                        <Running deviceGroupLookup={deviceGroupLookup} animationGroupLookup={animationGroupLookup} setError={setError} />
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    <Grid item xs={12} className="productType-container">
                        <Landed deviceGroupLookup={deviceGroupLookup} animationGroupLookup={animationGroupLookup} setError={setError} />
                    </Grid>
                </TabPanel>
               
            </SwipeableViews>
            <Grid item xs={12} className="productType-container">
                <Running deviceGroupLookup={deviceGroupLookup} animationGroupLookup={animationGroupLookup} setError={setError} />
            </Grid>
        </div>
    );
}