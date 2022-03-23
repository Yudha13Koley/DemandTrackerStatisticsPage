import { Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Box } from '@mui/system'
import React from 'react'
import BarChart from './BarChart'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PieChart from './PieChart'

const useStyles = makeStyles(theme => ({
    boxStyles: {
        height: '80px',
        backgroundColor: '#5654a4',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        borderRadius: '5%',
        justifyContent: 'center',
        marginLeft: '5px',

        "&:hover": {
            backgroundColor: '#2e9fff'
        }
    },
    closed: {
        backgroundColor: 'grey'
    },
    inProgress: {
        backgroundColor: 'yellow'
    },
    onHold: {
        backgroundColor: 'red'
    },
    withdrawn: {
        backgroundColor: 'blue'
    },

    gridContainerStyles: {
        border: '1px solid blue',
        margin: '8px',
        justifyContent: 'center',
        width: '100%',
        height: '101px'
    },

    gridChartContainerStyles: {
        border: '1px solid blue',
        margin: '8px',
        width: '100%',

    },

    gridPieChartContainerStyles: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },

    gridBarChartContainerStyles: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },

    gridItemStyles: {
        alignItems: 'center'
    },

    fontStyles: {
        fontWeight: 'bold',
        fontSize: '1.5rem',
        marginLeft: '5%',
        color: 'white'
    },

    numberStyles: {
        marginLeft: '5%',
        color: 'white'
    },

    monthFontStyles: {
        marginLeft: '5%',
        color: 'white'
    },
}))

export default function BodyComponent() {

    const classes = useStyles()

    const [month, setMonth] = React.useState('Mar');

    const handleChange = (event) => {
        setMonth(event.target.value);
    }

    const [year, setYear] = React.useState(2022);

    const handleYearChange = (event) => {
        setYear(event.target.value);
    }

    const [cluster, setCluster] = React.useState('DSI : Digital Selling & Integration');

    const handleClusterChange = (event) => {
        setCluster(event.target.value);
    }

    return (
        <div>
            <Grid className={classes.gridContainerStyles} container spacing={1}>
                <Grid item className={classes.gridItemStyles} xs={12} md={2.4}>
                    <Box className={classes.boxStyles}>
                        <div className={classes.fontStyles}>Open</div>
                        <div className={classes.numberStyles}>23</div>
                        <div className={classes.monthFontStyles}>In March</div>
                    </Box>
                </Grid>
                <Grid item className={classes.gridItemStyles} xs={12} md={2.4}>
                    <Box className={classes.boxStyles}>
                        <div className={classes.fontStyles}>In Progress</div>
                        <div className={classes.numberStyles}>15</div>
                        <div className={classes.monthFontStyles}>In March</div>
                    </Box>
                </Grid>
                <Grid item className={classes.gridItemStyles} xs={12} md={2.4}>
                    <Box className={classes.boxStyles}>
                        <div className={classes.fontStyles}>On Hold</div>
                        <div className={classes.numberStyles}>11</div>
                        <div className={classes.monthFontStyles}>In March</div>
                    </Box>
                </Grid>
                <Grid item className={classes.gridItemStyles} xs={12} md={2.4}>
                    <Box className={classes.boxStyles}>
                        <div className={classes.fontStyles}>Closed</div>
                        <div className={classes.numberStyles}>3</div>
                        <div className={classes.monthFontStyles}>In March</div>
                    </Box>
                </Grid>
                <Grid item className={classes.gridItemStyles} xs={12} md={2.4}>
                    <Box className={classes.boxStyles}>
                        <div className={classes.fontStyles}>Withdrawn</div>
                        <div className={classes.numberStyles}>9</div>
                        <div className={classes.monthFontStyles}>In March</div>
                    </Box>
                </Grid>
            </Grid>
            <Grid className={classes.gridChartContainerStyles} container spacing={2}>
                <Grid item sm={6} md={8} >
                    <Grid className={classes.gridBarChartContainerStyles} container spacing={2}>
                        <Grid item>
                            <Box sx={{
                                minWidth: 120,
                                width: '300px',
                                height: '60px'
                            }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Cluster</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={cluster}
                                        label="cluster"
                                        onChange={handleClusterChange}
                                    >
                                        <MenuItem value={'DSI : Digital Selling & Integration'}>DSI : Digital Selling & Integration</MenuItem>
                                        <MenuItem value={'R & S : Range & Supply'}>R & S : Range & Supply</MenuItem>
                                        <MenuItem value={'R & E'}>R & E</MenuItem>
                                        <MenuItem value={'Multi - Channel'}>Multi - Channel</MenuItem>
                                        <MenuItem value={'R & S - Supply Execution'}>R & S - Supply Execution</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                        <Grid item>
                            <Box sx={{
                                minWidth: 120,
                                width: '150px',
                                height: '60px'
                            }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Year</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={year}
                                        label="year"
                                        onChange={handleYearChange}
                                    >
                                        <MenuItem value={2021}>2021</MenuItem>
                                        <MenuItem value={2022}>2022</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                    </Grid>
                    <BarChart cluster={cluster} year={year} />
                </Grid>
                <Grid className={classes.gridPieChartContainerStyles} item sm={6} md={4}>
                    <Box sx={{
                        minWidth: 120,
                        width: '200px',
                        height: '100px'
                    }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Month</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={month}
                                label="month"
                                onChange={handleChange}
                            >
                                <MenuItem value={'Jan'}>January</MenuItem>
                                <MenuItem value={'Feb'}>February</MenuItem>
                                <MenuItem value={'Mar'}>March</MenuItem>
                                <MenuItem value={'Apr'}>April</MenuItem>
                                <MenuItem value={'May'}>May</MenuItem>
                                <MenuItem value={'Jun'}>June</MenuItem>
                                <MenuItem value={'Jul'}>July</MenuItem>
                                <MenuItem value={'Aug'}>August</MenuItem>
                                <MenuItem value={'Sep'}>September</MenuItem>
                                <MenuItem value={'Oct'}>October</MenuItem>
                                <MenuItem value={'Nov'}>November</MenuItem>
                                <MenuItem value={'Dec'}>December</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <PieChart month={month} />
                </Grid>
            </Grid>
        </div >
    )
}
