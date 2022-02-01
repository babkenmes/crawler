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
import * as contanerService from "../services/container"
import * as groupService from "../services/group"
import { addItemAction, editItemAction, deleteItemAction } from "../utils/stateHelper"
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import FilterListIcon from '@material-ui/icons/FilterList';


const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));


export default function Containers() {
    const classes = useStyles();
    const [containers, setContainers] = useState([]);

    //TODO implement pagination
    const [page, setPage] = useState(1);
    const [error, setError] = useState(false);

    const columns = [
        { title: 'Name', field: 'name' },
        { title: 'VPN', field: 'vpn_name' },
        { title: 'Region', field: 'current_region' },
        { title: 'Location', field: 'geo_location' },
        { title: 'Last region change', field: 'last_region_change', type: 'datetime' }
    ];

    const [filtering, setFiltering] = useState(false);


    useEffect(() => {
        getContainers();
    }, [page]);

    const getContainers = () => {
        return contanerService.getAll().then(data => setContainers(data)).catch(err => setError(err.toString()));
    }
    const changeRegion = (id) => {
        return contanerService.changeRegion(id).then(data => getContainers()).catch(err => setError(err.toString()));
    }

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
            title="Containers"
            columns={columns}
            data={containers}
            actions={[
                {
                    icon: "Change region",
                    tooltip: 'Change the region',
                    onClick: (event, data) => changeRegion(data._id)
                },
                {
                    icon: FilterListIcon,
                    tooltip: 'Enable filtering',
                    isFreeAction: true,
                    onClick: (event) => setFiltering(!filtering)
                }
            ]}
            options={{
                filtering: filtering,
                pageSize:20
            }}
        />
    </Grid>

}