import React from 'react';
import styled from "styled-components";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import XLSX from "xlsx";
import exportFromJSON from 'export-from-json'  

const useStyles = makeStyles((theme) => ({
    statsIcon: {
        '& svg': {
            fontSize: 250,
            width: 500,
            color: 'black',
            margin: 20,
        }
    },
    textBack: {
        "&.MuiFilledInput-root": {
            background: "rgb(232, 241, 250)"
        }
    },
    download: {
        "&.MuiButton-contained": {
            background: "rgb(232, 241, 250)"
        }
    }
}));



const Home = (props) => {

    const fileName = 'download';  
    const exportType = 'csv';

    const classes = useStyles();

    const years = 10;

    const handleDownload = async (event) => {
        event.preventDefault();
        const url = "https://data.gov.sg/api/action/datastore_search?resource_id=2264a6ed-51f5-45d6-accb-1a980e32e632";
        const response = await fetch(url);
        var data = await response.json();
        data = data.result.records.slice(-years).filter((element, index) => {
            return index % 2 === 0;
        });

        exportFromJSON({ data, fileName, exportType});
        console.log(data);

        // const ws = XLSX.utils.json_to_sheet(data);
        // const wb = XLSX.utils.book_new();
        // XLSX.utils.book_append_sheet(wb, ws, "SheetJS");
        // /* generate XLSX file and send to client */
        // XLSX.writeFile(wb, "sheetjs.xlsx");

        // const replacer = (key, value) => value === null ? '' : value // specify how you want to handle null values here
        // const header = Object.keys(data[0])
        // const csv = [
        // header.join(','), // header row first
        // ...data.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','))
        // ].join('\r\n')

        // console.log(csv)
    }

    // const handleDownload = () => {
    //     var data = {
    //         resource_id: '2264a6ed-51f5-45d6-accb-1a980e32e632', // the resource id
    //         limit: 5, // get 5 results
    //         q: 'jones' // query for 'jones'
    //     };
    //     $.ajax({
    //         url: 'https://data.gov.sg/api/action/datastore_search',
    //         data: data,
    //         dataType: 'jsonp',
    //         success: function(data) {
    //           alert('Total results found: ' + data.result.total)
    //         }
    //     });
    // }

    return (
        <Container>
            <LeftSection>
                <IconButton className={classes.statsIcon}>
                    <QueryStatsIcon />
                </IconButton>
                
                <TextField
                    required
                    id="filled-required"
                    className={classes.textBack}
                    label="URL Required"
                    defaultValue="https://data.gov.sg/dataset/intake-enrolment-and-graduates-by-institutions?resource_id=be05b06d-1042-45de-a35b-5a5e04e7c704"
                    variant="filled"
                />

                <Button sx={classes.download} variant="contained" size="medium" onClick={handleDownload}>
                    Download & Generate
                </Button>
            </LeftSection>
            <RightSection>
                <span>Chart</span>
            </RightSection>
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: flex;
    top: 72px;
    padding: 0 calc(10vw + 5px);
    display: flex;
    flex-direction: row;

    div {
        margin-bottom: 10px;
    }
`;

const LeftSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const RightSection = styled.div`
    width: 100%;
`;

export default Home