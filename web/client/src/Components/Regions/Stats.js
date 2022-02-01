<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
=======
import React, { useEffect } from 'react';
>>>>>>> fe6ce9c5a653e331c9f3912ef5eabc35fdeeea6a
import Grid from '@material-ui/core/Grid';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import useStyles from "./styles"
import { useTheme } from "@material-ui/core/styles";
import Widget from "../Common/Widget/Widget"
import Dot from "../Common/Dot"
<<<<<<< HEAD
import { resetByRegion, getNotReachedDetailedData } from "../../services/keyword"
import { getRegionstats } from "../../services/keyword"
import * as XLSX from 'xlsx';

export default function StatItem({ id }) {
    const classes = useStyles();
    const theme = useTheme();
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getRegionData(id)
    }, [id]);

    function getRegionData(id) {
        return getRegionstats(id).then(region_data => {
            setLoading(false);
            setData({ ...region_data, name: id })
        })
    }
    
    const downloadNotReachedExcel = ()=>{
        return getNotReachedDetailedData(id).then((data)=>{
            const fileName = `region_${id}_keys.xlsx`;
            const ws = XLSX.utils.json_to_sheet(data);
            const wb = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, 'test');
            XLSX.writeFile(wb, fileName);
        })
    }
=======


export default function StatItem({ data }) {
    const classes = useStyles();
    const theme = useTheme();
>>>>>>> fe6ce9c5a653e331c9f3912ef5eabc35fdeeea6a

    const PieChartData = [
        { name: "Landed      ", value: data.landed, color: "success" },
        { name: "Free        ", value: data.free, color: "warning" },
        { name: "Running     ", value: data.running, color: "secondary" },
        // { name: "Captcha     ", value: data.captcha, color: "secondary" },
    ];
<<<<<<< HEAD

    const handle_resetKeywords = () => {
        setLoading(true);
        resetByRegion(data.name).then(data => {
            getRegionData(id)
        })
    }

    const handle_downloadNotReached = () => {
        setLoading(true);
        downloadNotReachedExcel(data.name).then(data => {
            getRegionData(id)
        })
    }

    return (loading ? <div>Loading...</div> :
        <Widget title={data.name} upperTitle className={classes.card} resetKeywords={handle_resetKeywords} downloadNotReached={handle_downloadNotReached} >
=======
    return (
        <Widget title={data.name} upperTitle className={classes.card}>
>>>>>>> fe6ce9c5a653e331c9f3912ef5eabc35fdeeea6a
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <ResponsiveContainer width="100%" height={144}>
                        <PieChart>
                            <Pie
                                data={PieChartData}
                                innerRadius={30}
                                outerRadius={40}
                                dataKey="value"
                            >
                                {PieChartData.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={theme.palette[entry.color].main}
                                    />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </Grid>
                <Grid item xs={6}>
                    <div className={classes.pieChartLegendWrapper}>
                        {PieChartData.map(({ name, value, color }, index) => (
                            <div key={color} className={classes.legendItemContainer}>
                                <Dot color={color} />
                                <span className="region-state-wrapper">
                                    <span className="region-state" >
                                        {name}
                                    </span>
                                    <span className="region-state-value">
                                        {value}
                                    </span>
                                </span>
                            </div>
                        ))}
                        <div key="error " className={classes.legendItemContainer}>
                            <Dot color="error" />
                            <span className="region-state-wrapper">
                                <span className="region-state" >
                                    Err
                                </span>
                                <span className="region-state-value">
                                    {data.total - (data.landed + data.free + data.running)}
                                </span>
                            </span>
                        </div>
                        <div key="primary" className={classes.legendItemContainer}>
                            <Dot color="primary" />
                            <span className="region-state-wrapper">
                                <span className="region-state" >
                                    Total
                                </span>
                                <span className="region-state-value">
                                    {data.total}
                                </span>
                            </span>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Widget>
    );
}