import React, { useState } from 'react';
import styled from "styled-components";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import exportFromJSON from 'export-from-json';
import BarStats from './BarStats.js';
import DownloadIcon from '@mui/icons-material/Download';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    statsIcon: {
        '& svg': {
            fontSize: 200,
            color: 'black',
            margin: -12,
        }
    },
    textBack: {
        "&.MuiFilledInput-root": {
            background: "rgb(232, 241, 250)",
        }
    },
    root: {
        justifyContent: 'center'
    }
}));

const ButtonStyle = {
    borderRadius: 35,
    backgroundColor: "#B28F74",
    fontSize: "8px",
    fontWeight: "500",
    borderRadius: "8px",
    height: "52px",
}

const DownloadStyle = {
    backgroundColor: "#7e624d",
    fontSize: "8px",
    fontWeight: "500",
    borderRadius: "8px",
    borderRadius: 5,
    justifyContent: 'center',
}

const Home = (props) => {
    const [JSONData, parseJSONData] = useState({});
    const [showGraph, setGraph] = useState(false)

    const fileName = 'download';  
    const exportType = 'csv';
    const classes = useStyles();
    const years = 5;

    const institutions = ['nafa_diploma', 'ngee_ann_polytechnic', 'lasalle_degree', 'sit', 'temasek_polytechnic', 'nafa_degree', 'smu', 'ite', 'ntu', 'nus', 'sutd', 'suss', 'nie', 'nanyang_polytechnic', 'republic_polytechnic', 'singapore_polytechnic', 'lasalle_diploma']
    
    console.log("JSON Data: ", JSONData);
    console.log(showGraph);

    const handleDownload = async (event) => {
        event.preventDefault();
        const graduateUrl = "https://data.gov.sg/api/action/datastore_search?resource_id=2264a6ed-51f5-45d6-accb-1a980e32e632&q=MF";
        const intakeUrl = "https://data.gov.sg/api/action/datastore_search?resource_id=be05b06d-1042-45de-a35b-5a5e04e7c704&q=MF";
        const intakeResponse = await fetch(intakeUrl);
        const graduateResponse = await fetch(graduateUrl);
        const intake = await intakeResponse.json();
        const graduate = await graduateResponse.json();
        var intakeInfo = intake.result.records.slice(-years);
        var data = graduate.result.records.slice(-years);

        data.forEach((element, index) => {
            for (var name in data[index]) {
                if (institutions.includes(name)) {   
                    var column = "Percentage_Difference_for_" + name;  
                    var percentageDiff =  (intakeInfo[index][name] - data[index][name]); //Value indicate how many more people went into the institute compared to 
                    data[index][column] = percentageDiff;
                }
            }
        })

        parseJSONData(data);
        exportFromJSON({ data, fileName, exportType});
    }

    const handleGenerate = async (event) => {
        event.preventDefault();
        setGraph(true);
    }

    return (
        <Container>
            <LeftSection>
                <IconButton className={classes.statsIcon} disabled={true}>
                    <QueryStatsIcon />
                </IconButton>
                
                <span className='Description'>Analyze Dataset</span>

                <TextField
                    required
                    id="filled-required"
                    className={classes.textBack}
                    label="URL Required"
                    defaultValue="https://data.gov.sg/dataset/intake-enrolment-and-graduates-by-institutions?resource_id=be05b06d-1042-45de-a35b-5a5e04e7c704"
                    variant="filled"
                />

                <Buttons>
                    <Button variant="contained" size="medium" onClick={handleDownload} style={DownloadStyle}>
                        <DownloadIcon />
                    </Button>

                    <Button variant="contained" size="medium" onClick={handleGenerate} style={ButtonStyle}>
                        Generate Chart
                    </Button>
                </Buttons>
            </LeftSection>
            <RightSection>
                { showGraph ? (<BarStats />) : (<div></div>) }
            </RightSection>
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    overflow-x: hidden;
    display: flex;
    padding: calc(10vw + 5px);
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 472px;
    align-self: center;
    font: 60px;
`;

const LeftSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    Button {
        margin-bottom: 20px
    }

    span {
        align-self: center;
        font-weight: 600;
    }
`;

const RightSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 1000px !important;
`;

const Buttons = styled.div`
    display: flex;
    flex: column;
    justify-content: flex-end;
    margin-top: 24px;
    width: 300px !important;

    Button {
        margin-left: 12px;
    }
`;

export default Home