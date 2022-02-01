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
import * as service from "../services/group"
import { addItemAction, editItemAction, deleteItemAction } from "../utils/stateHelper"
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';

const ANIMATYION_TYPE = "Animation"
const DEVICE_TYPE = "Device"

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));


const COLUMNS = [
    { title: 'Name', field: 'name' },
    { title: 'Type', field: 'type', lookup: { [ANIMATYION_TYPE]: ANIMATYION_TYPE, [DEVICE_TYPE]: DEVICE_TYPE } }
]


export default function Groups() {
    const classes = useStyles();
    const [groups, setGroups] = useState([]);
    const [creationData, setCreationData] = useState({ type: "", name: "" });
    //TODO implement pagination
    const [page, setPage] = useState(1);
    const [error, setError] = useState(false);

    useEffect(() => {
        getAllGroups();
    }, [page]);


    const getAllGroups = () => {
        return service.getAll().then(data => setGroups(data)).catch(err => setError(err.toString()));
    }
    const onRowAdd = (data) => {
        return service.createGroup(data).then(({group}) => {
            setGroups(addItemAction(group))
        }).catch(err => setError(err.toString()));
    }

    const onRowUpdate = (newData, oldData) => {
        return service.editGroup(newData).then(({group}) => {
            setGroups(editItemAction(group, oldData))
        }).catch(err => setError(err.toString()));
    }
    const onRowDelete = (oldData) => {
        return service.deleteGroup(oldData._id).then(data => {
            setGroups(deleteItemAction(oldData))
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
            title="Groups"
            pageSize={50}
            columns={COLUMNS}
            data={groups}
            editable={{
                onRowAdd,
                onRowUpdate,
                onRowDelete,
            }}
        />
    </Grid>

}