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
import { makeStyles } from '@material-ui/core/styles';
import MaterialTable from 'material-table';
import * as deviceService from "../services/device"
import * as groupService from "../services/group"
import { addItemAction, editItemAction, deleteItemAction } from "../utils/stateHelper"
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';


const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));


export default function Devices() {
    const classes = useStyles();
    const [devices, setDevices] = useState([]);
    const [creationData, setCreationData] = useState({ type: "", name: "" });
    //TODO implement pagination
    const [page, setPage] = useState(1);
    const [error, setError] = useState(false);
    const [groups, setGroups] = useState([]);


    const grouLookup = {};
    groups.forEach(group=>{
        grouLookup[group._id] = group.name;
    })

    const columns = [
        { title: 'Name', field: 'name' },
        { title: 'User Agent', field: 'user_agent' },
        { title: 'Window Size', field: 'window_size' },
        { title: 'Is Mobile', field: 'mobile', type: 'boolean' },
        { title: 'Group', field: 'group', lookup: grouLookup }
    ];

    useEffect(() => {
        getAllDevices();
        getAllGroups();
    }, [page]);

    const getAllGroups = () => {
        return groupService.getDeviceGroups().then(({groups}) => setGroups(groups)).catch(err => setError(err.toString()));
    }

    const getAllDevices = () => {
        return deviceService.getAll().then(data => setDevices(data)).catch(err => setError(err.toString()));
    }
    const onRowAdd = (data) => {
        return deviceService.createDevice(data).then(({device}) => {
            setDevices(addItemAction(device))
        }).catch(err => setError(err.toString()));
    }

    const onRowUpdate = (newData, oldData) => {
        return deviceService.editDevice(newData).then(({device}) => {
            setDevices(editItemAction(device, oldData))
        }).catch(err => setError(err.toString()));
    }
    const onRowDelete = (oldData) => {
        return deviceService.deleteDevice(oldData._id).then(data => {
            setDevices(deleteItemAction(oldData))
        }).catch(err => setError(err.toString()));
    }
    const nameChange = (event) => {
        const name = event.target.value;
        setCreationData({ ...creationData, name })
    }
    const typeChange = (event) => {
        const type = event.target.value;
        setCreationData({ ...creationData, type })
    }
    const { name, type } = creationData || {};

    return <Grid item xs={10} className="productType-container">
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
        <MaterialTable
            title="Devices"
            columns={columns}
            data={devices}
            editable={{
                onRowAdd,
                onRowUpdate,
                onRowDelete,
            }}
        />
    </Grid>

}