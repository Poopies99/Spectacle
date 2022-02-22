import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import FileSaver from "file-saver";
import XLSX from "xlsx";

const useStyles = makeStyles((theme) => ({
    download: {
        "&.MuiButton-contained": {
            background: "rgb(232, 241, 250)"
        }
    }
}));

const fileType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
const fileExtension = ".xlsx";

const Heading = [
    {
      year: "First Name",
      sex: "Last Name",
      NUS: "Email",
      NTU: "Address",
      SMU: "Postcode"
    }
];

const exportToCSV = (csvData, fileName, wscols) => {
    const ws = XLSX.utils.json_to_sheet(Heading, {
      header: ["firstName", "lastName", "email", "address", "postcode"],
      skipHeader: true,
      origin: 0 //ok
    });
    ws["!cols"] = wscols;
    XLSX.utils.sheet_add_json(ws, csvData, {
      header: ["firstName", "lastName", "email", "address", "postcode"],
      skipHeader: true,
      origin: -1 //ok
    });
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
};

const ExportExcel = ({ csvData, fileName, wscols }) => {
    const classes = useStyles();

    return (
        <Button sx={classes.download} variant="contained" size="medium" onClick={e => exportToCSV(csvData, fileName, wscols)}>
            Download & Generate
        </Button>
    )
}

export default ExportExcel