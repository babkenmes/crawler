import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import StatItem from "../Regions/Stats"
import { getRegionstats } from "../../services/keyword"
import { getgRegionTags } from "../../services/container"

export default function Dashboard() {

    const [regionStats, setRegionStats] = useState([]);
<<<<<<< HEAD
    const [regionTags, setRegionTags] = useState([]);
    useEffect(() => {
        getgRegionTags().then(data => {
            setRegionTags(data);
            
=======
    useEffect(() => {
        getgRegionTags().then(data => {
            const allStats = []
            Promise.all(data.map(element =>
                getRegionstats(element._id).then(region_data => {
                    allStats.push({ ...region_data, name: element._id })
                })
            )).then(() => {
                setRegionStats(allStats.sort(function (a, b) {
                    if (a.name > b.name) {
                        return -1;
                    }
                    if (b.name > a.name) {
                        return 1;
                    }
                    return 0;
                }))
            });
>>>>>>> fe6ce9c5a653e331c9f3912ef5eabc35fdeeea6a
        })
    }, []);
    return (
        <div>
            <Grid container spacing={4}>
                {
<<<<<<< HEAD
                    regionTags && regionTags.map(item => <Grid item lg={3} md={4} sm={6} xs={12}><StatItem id={item._id}  key={item.name} data={item} /></Grid>)
=======
                    regionStats && regionStats.map(item => <Grid item lg={3} md={4} sm={6} xs={12}><StatItem key={item.name} data={item} /></Grid>)
>>>>>>> fe6ce9c5a653e331c9f3912ef5eabc35fdeeea6a
                }
            </Grid>
        </div>
    );
}