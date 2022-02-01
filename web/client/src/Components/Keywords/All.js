import React, { useState, useEffect } from "react";
import MaterialTable from 'material-table';
import * as keywordService from "../../services/keyword"
import { addItemAction, editItemAction, deleteItemAction } from "../../utils/stateHelper"
import FilterListIcon from '@material-ui/icons/FilterList';




export default function Active({ deviceGroupLookup, animationGroupLookup, setError }) {
    const [activeKeywords, setActiveKeywords] = useState([]);

    const [filtering, setFiltering] = useState(false);

    //TODO implement pagination
    const [page, setPage] = useState(0);

    const activeColumns = [
        { title: 'ID', field: '_id' },
        { title: 'Words', field: 'words' },
        // { title: 'count', field: 'count', type: 'numeric' },
        { title: 'Animation group', field: 'animation_group', lookup: animationGroupLookup },
        { title: 'Device group', field: 'device_group', lookup: deviceGroupLookup },
        {
            title: 'Region', field: 'region_tag',
            render: rowData => <span>{rowData.region_tag || "Default"}</span>
        },
        { title: 'Domain', field: 'domain' },
        { title: 'TLD', field: 'tld' },
        { title: 'Last run', field: 'last_run', type: 'datetime', editable: 'never' }
    ];

    const handlePageChange = (newPage = 0) => {
        setPage(newPage);
    };

    const getKeywords = (query) => {
        return new Promise((resolve, reject) => {
            keywordService.getAll(query.page, query.pageSize, query?.orderBy?.field)
                .then(result => {
                    resolve({
                        data: result.keywords,
                        page: Number(result.page),
                        totalCount: result.count,
                    })
                }).catch(err=>{
                    console.log(err)
                })
        })
    }
    const onRowAdd = (data) => {
        return keywordService.createKeyword(data).then(({ keyword }) => {
            setActiveKeywords(addItemAction(keyword))
        }).catch(err => setError(err.toString()));
    }
    const onRowCopy = (data) => {
        return keywordService.createKeyword(data).then(({ keyword }) => {
            setActiveKeywords(addItemAction(keyword))
        }).catch(err => setError(err.toString()));
    }
    const onRowUpdate = (newData, oldData) => {
        return keywordService.editKeyword(newData).then(({ keyword }) => {
            setActiveKeywords(editItemAction(keyword, oldData))
        }).catch(err => setError(err.toString()));
    }
    const onRowDelete = (oldData) => {
        return keywordService.deleteKeyword(oldData._id).then(data => {
            setActiveKeywords(deleteItemAction(oldData))
        }).catch(err => setError(err.toString()));
    }
    return (<MaterialTable
        title="Active"
        columns={activeColumns}
        data={getKeywords}
        editable={{
            onRowAdd,
            onRowUpdate,
            onRowDelete,
        }}
        actions={[
            {
                icon: "add",
                tooltip: 'Copy this keyword',
                onClick: (event, data) => data.forEach(item => {
                    const copyData = { ...item }
                    delete copyData._id
                    onRowCopy(copyData)
                })
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