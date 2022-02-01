import React, { useState, useEffect } from "react";
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Grid from '@material-ui/core/Grid';
import MaterialTable from 'material-table';
import * as keywordService from "../../services/keyword"
import * as groupService from "../../services/group"
import { addItemAction, editItemAction, deleteItemAction } from "../../utils/stateHelper"
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import FilterListIcon from '@material-ui/icons/FilterList';

import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';





export default function Error({ deviceGroupLookup, animationGroupLookup, setError}) {

    const [keywordsWithError, setKeywordsWithError] = useState([]);
    const [filtering, setFiltering] = useState(false);
    //TODO implement pagination
    const [page, setPage] = useState(1);



    const errorColumns = [
        { title: 'ID', field: '_id' },
        { title: 'Words', field: 'words' },
        { title: 'Animation group', field: 'animation_group', lookup: animationGroupLookup },
        { title: 'Device group', field: 'device_group', lookup: deviceGroupLookup },
        { title: 'Created', field: 'created', type: 'datetime' },
        {
            title: 'Region', field: 'region_tag',
            render: rowData => <span>{rowData.region_tag || "Default"}</span>
        },
        { title: 'Domain', field: 'domain' },
        { title: 'TLD', field: 'tld' },
        { title: 'Message', field: 'message' },
        { title: 'Error Message', field: 'errorMessage' }
    ];

    useEffect(() => {
        getKeywordsWithError();
    }, [page]);

    const getKeywordsWithError = () => {
        return keywordService.getWithErrors().then(({ keywords }) => setKeywordsWithError(keywords)).catch(err => setError(err.toString()));
    }
    const onRowCopy = (data) => {
        return keywordService.createKeyword(data).then(({ keyword }) => {
            // setActiveKeywords(addItemAction(keyword))
        }).catch(err => setError(err.toString()));
    }
    const onRowDelete = (oldData) => {
        return keywordService.deleteKeyword(oldData._id).then(data => {
            // setActiveKeywords(deleteItemAction(oldData))
        }).catch(err => setError(err.toString()));
    }
    return (
        <MaterialTable
            title="Keywords with error"
            columns={errorColumns}
            data={keywordsWithError}
            actions={[
                {
                    icon: "add",
                    tooltip: 'Copy this keyword to active',
                    onClick: (event, rowData) => {
                        const copyData = { ...rowData, done: false, hasError: false, errorMessage: "", message: "" }
                        delete copyData._id
                        onRowCopy(copyData)
                    }
                },
                {
                    icon: FilterListIcon,
                    tooltip: 'Enable filtering',
                    isFreeAction: true,
                    onClick: (event) => setFiltering(!filtering)
                },
                {
                    tooltip: 'Remove All Selected Users',
                    icon: 'delete',
                    onClick: (evt, data) => data.forEach(item => onRowDelete(item))
                }
            ]}
            options={{
                selection: true,
                filtering: filtering
            }}
        />
    );
}