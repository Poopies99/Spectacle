import React, { useState, useEffect } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import styled from "styled-components";
import Chart from 'chart.js/auto';

const BarStats = () => {
    const [chartData, setChartData] = useState();
    
    //let nus = [], ntu = [], smu = [], sutd = [], sit = [], suss = [], nie = [], sp = [], np = [], tp = [], nyp = [], rp = [], ldip = [], ldeg = [], nafdip = [], nafdeg = [], ite = [];

    const data =  ({
        labels: ['2016', '2017', '2018', '2019', '2020'],
        datasets: [{
          label: 'Graduates from NUS',
          backgroundColor: 'rgb(51, 55, 69, 0.8)',
          borderColor: 'rgb(0, 0, 0)',
          borderWidth: 1,
          data: ['6305', '6446', '6700', '6631', '6885']
        },{
          label: 'Graduates from NTU',
          backgroundColor: 'rgb(230, 52, 98, 0.8)',
          borderColor: 'rgb(0, 0, 0)',
          borderWidth: 1,
          data: ['5856', '6174', '5990', '5997', '5840']
        },{
          label: 'Graduates from SMU',
          backgroundColor: 'rgb(254, 95, 85, 0.8)',
          borderColor: 'rgb(0, 0, 0)',
          borderWidth: 1,
          data: ['1804', '1779', '1887', '1842', '1883']
        },{
          label: 'Graduates from SUTD',
          backgroundColor: 'rgb(199, 239, 207, 0.8)',
          borderColor: 'rgb(0, 0, 0)',
          borderWidth: 1,
          data: ['246', '267', '334', '431', '373']
        },{
          label: 'Graduates from SIT',
          backgroundColor: 'rgb(238, 245, 219, 0.8)',
          borderColor: 'rgb(0, 0, 0)',
          borderWidth: 1,
          data: ['1285', '1494', '1744', '1759', '2172']
        },{
          label: 'Graduates from SUSS',
          backgroundColor: 'rgb(251, 245, 243, 0.8)',
          borderColor: 'rgb(0, 0, 0)',
          borderWidth: 1,
          data: ['-', '-', '168', '251', '381']
        },{
          label: 'Graduates from NIE',
          backgroundColor: 'rgb(226, 132, 19, 0.8)',
          borderColor: 'rgb(0, 0, 0)',
          borderWidth: 1,
          data: ['1628', '1292', '1153', '1339', '1390']
        },{
          label: 'Graduates from Singapore Polytechnic',
          backgroundColor: 'rgb(0, 0, 34, 0.8)',
          borderColor: 'rgb(0, 0, 0)',
          borderWidth: 1,
          data: ['5007', '4924', '4380', '4389', '4619']
        },{
          label: 'Graduates from Ngee Ann Polytechnic',
          backgroundColor: 'rgb(222, 60, 75, 0.8)',
          borderColor: 'rgb(0, 0, 0)',
          borderWidth: 1,
          data: ['5258', '4886', '4687', '4484', '4583']
        },{
          label: 'Graduates from Temasek Polytechnic',
          backgroundColor: 'rgb(196, 40, 71, 0.8)',
          borderColor: 'rgb(0, 0, 0)',
          borderWidth: 1,
          data: ['5064', '5012', '4556', '4305', '4610']
        },{
          label: 'Graduates from Nanyang Polytechnic',
          backgroundColor: 'rgb(10, 9, 8, 0.8)',
          borderColor: 'rgb(0, 0, 0)',
          borderWidth: 1,
          data: ['5161', '4999', '4584', '4288', '4434']
        },{
          label: 'Graduates from Republic Polytechnic',
          backgroundColor: 'rrgb(73, 17, 28, 0.8)',
          borderColor: 'rgb(0, 0, 0)',
          borderWidth: 1,
          data: ['4614', '4389', '4407', '4066', '4014']
        },{
          label: 'Graduates from Lasalle (Diploma)',
          backgroundColor: 'rgb(242, 244, 243, 0.8)',
          borderColor: 'rgb(0, 0, 0)',
          borderWidth: 1,
          data: ['331', '331', '333', '331', '398']
        },{
          label: 'Graduates from Lasalle (Degree)',
          backgroundColor: 'rgb(169, 146, 125, 0.8)',
          borderColor: 'rgb(0, 0, 0)',
          borderWidth: 1,
          data: ['407', '466', '429', '487', '456']
        },{
          label: 'Graduates from NAFA (Diploma)',
          backgroundColor: 'rgb(94, 80, 63, 0.8)',
          borderColor: 'rgb(0, 0, 0)',
          borderWidth: 1,
          data: ['527', '591', '668', '735', '694']
        },{
          label: 'Graduates from NAFA (Degree)',
          backgroundColor: 'rgb(116, 167, 178, 0.8)',
          borderColor: 'rgb(0, 0, 0)',
          borderWidth: 1,
          data: ['25', '34', '15', '19', '22']
        },{
          label: 'Graduates from ITE',
          backgroundColor: 'rgb(87, 115, 153, 0.8)',
          borderColor: 'rgb(0, 0, 0)',
          borderWidth: 1,
          data: ['12516', '12858', '13421', '12595', '13144']
        }]
    });

    const chart = () => {
        // let nus = ['6305', '6446', '6700', '6631', '6885'];
        // let ntu = ['5856', '6174', '5990', '5997', '5840'];
        // let smu = ['1804', '1779', '1887', '1842', '1883'];
        // let sutd = ['246', '267', '334', '431', '373'];
        // let sit = ['1285', '1494', '1744', '1759', '2172'];
        // let suss = ['-', '-', '168', '251', '381'];
        // let nie = ['1628', '1292', '1153', '1339', '1390'];
        // let sp = ['5007', '4924', '4380', '4389', '4619'];
        // let np =['5258', '4886', '4687', '4484', '4583'];
        // let tp = ['5064', '5012', '4556', '4305', '4610'];
        // let nyp = ['5161', '4999', '4584', '4288', '4434'];
        // let rp = ['4614', '4389', '4407', '4066', '4014'];
        // let ldip = ['331', '331', '333', '331', '398'];
        // let ldeg = ['407', '466', '429', '487', '456'];
        // let nafdip = ['527', '591', '668', '735', '694'];
        // let nafdeg = ['25', '34', '15', '19', '22'];
        // let ite = ['12516', '12858', '13421', '12595', '13144'];

        let nus = [], ntu = [], smu = [], sutd = [], sit = [], suss = [], nie = [], sp = [], np = [], tp = [], nyp = [], rp = [], ldip = [], ldeg = [], nafdip = [], nafdeg = [], ite = [];

        // for (let index = 0; props.stats.length > index; index++) {
        //     for (var name in props.stats[index]) {
        //         switch(name) {
        //             case "nus":
        //                 nus[index] = props.stats[index][name];
        //                 break;
        //             case "ntu":
        //                 ntu[index] = props.stats[index][name];
        //                 break;
        //             case "smu":
        //                 smu[index] = props.stats[index][name];
        //                 break;
        //             case "sutd":
        //                 sutd[index] = props.stats[index][name];
        //                 break;
        //             case "sit":
        //                 sit[index] = props.stats[index][name];
        //                 break;
        //             case "suss":
        //                 suss[index] = props.stats[index][name];
        //                 break;  
        //             case "nie":
        //                 nie[index] = props.stats[index][name];
        //                 break;
        //             case "singapore_polytechnic":
        //                 sp[index] = props.stats[index][name];
        //                 break;
        //             case "ngee_ann_polytechnic":
        //                 np[index] = props.stats[index][name];
        //                 break;
        //             case "temasek_polytechnic":
        //                 tp[index] = props.stats[index][name];
        //                 break;
        //             case "nanyang_polytechnic":
        //                 nyp[index] = props.stats[index][name];
        //                 break;
        //             case "republic_polytechnic":
        //                 rp[index] = props.stats[index][name];
        //                 break;   
        //             case "lasalle_diploma":
        //                 ldip[index] = props.stats[index][name];
        //                 break;
        //             case "lasalle_degree":
        //                 ldeg[index] = props.stats[index][name];
        //                 break;
        //             case "nafa_diploma":
        //                 nafdip[index] = props.stats[index][name];
        //                 break;
        //             case "nafa_degree":
        //                 nafdeg[index] = props.stats[index][name];
        //                 break;
        //             case "ite":
        //                 ite[index] = props.stats[index][name];
        //                 break;  
        //             default:
        //                 continue;
        //         }
        //     }
        // }
        
        setChartData({
            labels: ['2016', '2017', '2018', '2019', '2020'],
            datasets: [{
              label: 'Graduates from NUS',
              backgroundColor: 'rgb(51, 55, 69, 0.2)',
              borderColor: 'rgb(51, 55, 69)',
              borderWidth: 2,
              data: ['6305', '6446', '6700', '6631', '6885']
            },{
              label: 'Graduates from NTU',
              backgroundColor: 'rgba(255, 159, 64, 0.2)',
              borderColor: 'rgb(255, 159, 64)',
              borderWidth: 2,
              data: ['5856', '6174', '5990', '5997', '5840']
            },{
              label: 'Graduates from SMU',
              backgroundColor: 'rgba(255, 205, 86, 0.2)',
              borderColor: 'rgb(255, 205, 86)',
              borderWidth: 2,
              data: ['1804', '1779', '1887', '1842', '1883']
            },{
              label: 'Graduates from SUTD',
              backgroundColor: 'rgba(75,192,192,1)',
              borderColor: 'rgba(0,0,0,1)',
              borderWidth: 2,
              data: ['246', '267', '334', '431', '373']
            },{
              label: 'Graduates from SIT',
              backgroundColor: 'rgba(75,192,192,1)',
              borderColor: 'rgba(0,0,0,1)',
              borderWidth: 2,
              data: ['1285', '1494', '1744', '1759', '2172']
            },{
              label: 'Graduates from SUSS',
              backgroundColor: 'rgba(75,192,192,1)',
              borderColor: 'rgba(0,0,0,1)',
              borderWidth: 2,
              data: ['-', '-', '168', '251', '381']
            },{
              label: 'Graduates from NIE',
              backgroundColor: 'rgba(75,192,192,1)',
              borderColor: 'rgba(0,0,0,1)',
              borderWidth: 2,
              data: ['1628', '1292', '1153', '1339', '1390']
            },{
              label: 'Graduates from Singapore Polytechnic',
              backgroundColor: 'rgba(75,192,192,1)',
              borderColor: 'rgba(0,0,0,1)',
              borderWidth: 2,
              data: ['5007', '4924', '4380', '4389', '4619']
            },{
              label: 'Graduates from Ngee Ann Polytechnic',
              backgroundColor: 'rgba(75,192,192,1)',
              borderColor: 'rgba(0,0,0,1)',
              borderWidth: 2,
              data: ['5258', '4886', '4687', '4484', '4583']
            },{
              label: 'Graduates from Temasek Polytechnic',
              backgroundColor: 'rgba(75,192,192,1)',
              borderColor: 'rgba(0,0,0,1)',
              borderWidth: 2,
              data: ['5064', '5012', '4556', '4305', '4610']
            },{
              label: 'Graduates from Nanyang Polytechnic',
              backgroundColor: 'rgba(75,192,192,1)',
              borderColor: 'rgba(0,0,0,1)',
              borderWidth: 2,
              data: ['5161', '4999', '4584', '4288', '4434']
            },{
              label: 'Graduates from Republic Polytechnic',
              backgroundColor: 'rgba(75,192,192,1)',
              borderColor: 'rgba(0,0,0,1)',
              borderWidth: 2,
              data: ['4614', '4389', '4407', '4066', '4014']
            },{
              label: 'Graduates from Lasalle (Diploma)',
              backgroundColor: 'rgba(75,192,192,1)',
              borderColor: 'rgba(0,0,0,1)',
              borderWidth: 2,
              data: ['331', '331', '333', '331', '398']
            },{
              label: 'Graduates from Lasalle (Degree)',
              backgroundColor: 'rgba(75,192,192,1)',
              borderColor: 'rgba(0,0,0,1)',
              borderWidth: 2,
              data: ['407', '466', '429', '487', '456']
            },{
              label: 'Graduates from NAFA (Diploma)',
              backgroundColor: 'rgba(75,192,192,1)',
              borderColor: 'rgba(0,0,0,1)',
              borderWidth: 2,
              data: ['527', '591', '668', '735', '694']
            },{
              label: 'Graduates from NAFA (Degree)',
              backgroundColor: 'rgba(75,192,192,1)',
              borderColor: 'rgba(0,0,0,1)',
              borderWidth: 2,
              data: ['25', '34', '15', '19', '22']
            },{
              label: 'Graduates from ITE',
              backgroundColor: 'rgba(75,192,192,1)',
              borderColor: 'rgba(0,0,0,1)',
              borderWidth: 2,
              data: ['12516', '12858', '13421', '12595', '13144']
            }]
        });
    }

    useEffect(() => {
        chart();
    }, []);

    return (
        <div>
            <Content>
                <Bar
                    data={data}
                    options = {{
                        plugins: {
                            legend: {
                            display: true,
                            },
                            title: {
                                display: true,
                                text: 'Graduates',
                                size: 60,
                                color: 'black',
                                position: 'top',
                                margin: -20,
                                font: {
                                    size: 24,
                                }
                            },
                        },
                        scales: {
                            x: {  // <-- axis is not array anymore, unlike before in v2.x: '[{'
                              grid: {
                                color: 'rgba(0,0,0,0.5)',
                              },
                              ticks: {
                                color: "rgb(0,0,0)",
                                font: {
                                    size: 16,
                                }
                              },
                            },
                            y: {  // <-- axis is not array anymore, unlike before in v2.x: '[{'
                              grid: {
                                color: 'rgba(0,0,0,0.5)',
                              },
                              ticks: {
                                color: "rgb(0,0,0)",
                                font: {
                                    size: 16,
                                }
                              },
                            },
                            color: 'black'
                        }
                    }}
                />
            </Content>
        </div>
    )
}

const Content = styled.div`
    display: flex;
    justify-content: center;
    padding-left: 64px;
    width: 900px;
`;

export default BarStats