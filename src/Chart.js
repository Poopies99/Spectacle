import React from 'react';
import styled from "styled-components";
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto'
import { useState } from "react"

const Diagram = ({stats}) => {  

  var nus = [], ntu = [], smu = [], sutd = [], sit = [], suss = [], nie = [], sp = [], np = [], tp = [], nyp = [], rp = [],ldip = [], ldeg = [], nafdip = [], nafdeg = [], ite = [];
  
  for (const index = 0; stats.length > index; index++) {
      for (var name in stats[index]) {
        switch(name) {
          case "nus":
              nus[index] = stats[index][name];
            break;
          case "ntu":
              ntu[index] = stats[index][name];
            break;
          case "smu":
              smu[index] = stats[index][name];
            break;
          case "sutd":
              sutd[index] = stats[index][name];
            break;
          case "sit":
              sit[index] = stats[index][name];
            break;
          case "suss":
              suss[index] = stats[index][name];
            break;  
          case "nie":
            nie[index] = stats[index][name];
            break;
          case "singapore_polytechnic":
              sp[index] = stats[index][name];
            break;
          case "ngee_ann_polytechnic":
              np[index] = stats[index][name];
            break;
          case "temasek_polytechnic":
              tp[index] = stats[index][name];
            break;
          case "nanyang_polytechnic":
              nyp[index] = stats[index][name];
            break;
          case "republic_polytechnic":
              rp[index] = stats[index][name];
            break;   
          case "lasalle_diploma":
              ldip[index] = stats[index][name];
            break;
          case "lasalle_degree":
              ldeg[index] = stats[index][name];
            break;
          case "nafa_diploma":
              nafdip[index] = stats[index][name];
            break;
          case "nafa_degree":
              nafdeg[index] = stats[index][name];
            break;
          case "ite":
              ite[index] = stats[index][name];
            break;  
          default:
            continue;
        }
      }
  }

  console.log(nus);

  // var data = {
  //   labels: ['2016', '2017', '2018', '2019', '2020'],
  //   datasets: [{
  //     label: 'Graduates from NUS',
  //     backgroundColor: 'rgba(255, 99, 132, 0.2)',
  //     borderColor: 'rgb(255, 99, 132)',
  //     borderWidth: 2,
  //     data: nus
  //   },{
  //     label: 'Graduates from NTU',
  //     backgroundColor: 'rgba(255, 159, 64, 0.2)',
  //     borderColor: 'rgb(255, 159, 64)',
  //     borderWidth: 2,
  //     data: ntu
  //   },{
  //     label: 'Graduates from SMU',
  //     backgroundColor: 'rgba(255, 205, 86, 0.2)',
  //     borderColor: 'rgb(255, 205, 86)',
  //     borderWidth: 2,
  //     data: smu
  //   },{
  //     label: 'Graduates from SUTD',
  //     backgroundColor: 'rgba(75,192,192,1)',
  //     borderColor: 'rgba(0,0,0,1)',
  //     borderWidth: 2,
  //     data: sutd
  //   },{
  //     label: 'Graduates from SIT',
  //     backgroundColor: 'rgba(75,192,192,1)',
  //     borderColor: 'rgba(0,0,0,1)',
  //     borderWidth: 2,
  //     data: sit
  //   },{
  //     label: 'Graduates from SUSS',
  //     backgroundColor: 'rgba(75,192,192,1)',
  //     borderColor: 'rgba(0,0,0,1)',
  //     borderWidth: 2,
  //     data: suss
  //   },{
  //     label: 'Graduates from NIE',
  //     backgroundColor: 'rgba(75,192,192,1)',
  //     borderColor: 'rgba(0,0,0,1)',
  //     borderWidth: 2,
  //     data: nie
  //   },{
  //     label: 'Graduates from Singapore Polytechnic',
  //     backgroundColor: 'rgba(75,192,192,1)',
  //     borderColor: 'rgba(0,0,0,1)',
  //     borderWidth: 2,
  //     data: sp
  //   },{
  //     label: 'Graduates from Ngee Ann Polytechnic',
  //     backgroundColor: 'rgba(75,192,192,1)',
  //     borderColor: 'rgba(0,0,0,1)',
  //     borderWidth: 2,
  //     data: np
  //   },{
  //     label: 'Graduates from Temasek Polytechnic',
  //     backgroundColor: 'rgba(75,192,192,1)',
  //     borderColor: 'rgba(0,0,0,1)',
  //     borderWidth: 2,
  //     data: tp
  //   },{
  //     label: 'Graduates from Nanyang Polytechnic',
  //     backgroundColor: 'rgba(75,192,192,1)',
  //     borderColor: 'rgba(0,0,0,1)',
  //     borderWidth: 2,
  //     data: nyp
  //   },{
  //     label: 'Graduates from Republic Polytechnic',
  //     backgroundColor: 'rgba(75,192,192,1)',
  //     borderColor: 'rgba(0,0,0,1)',
  //     borderWidth: 2,
  //     data: rp
  //   },{
  //     label: 'Graduates from Lasalle (Diploma)',
  //     backgroundColor: 'rgba(75,192,192,1)',
  //     borderColor: 'rgba(0,0,0,1)',
  //     borderWidth: 2,
  //     data: ldip
  //   },{
  //     label: 'Graduates from Lasalle (Degree)',
  //     backgroundColor: 'rgba(75,192,192,1)',
  //     borderColor: 'rgba(0,0,0,1)',
  //     borderWidth: 2,
  //     data: ldeg
  //   },{
  //     label: 'Graduates from NAFA (Diploma)',
  //     backgroundColor: 'rgba(75,192,192,1)',
  //     borderColor: 'rgba(0,0,0,1)',
  //     borderWidth: 2,
  //     data: nafdip
  //   },{
  //     label: 'Graduates from NAFA (Degree)',
  //     backgroundColor: 'rgba(75,192,192,1)',
  //     borderColor: 'rgba(0,0,0,1)',
  //     borderWidth: 2,
  //     data: nafdeg
  //   },{
  //     label: 'Graduates from ITE',
  //     backgroundColor: 'rgba(75,192,192,1)',
  //     borderColor: 'rgba(0,0,0,1)',
  //     borderWidth: 2,
  //     data: ite
  //   }]
  // };
  
  return (
    <div>
      <Content>
        {/* <Bar
          data={}
          options={{
            title:{
              display:true,
              text:'Average',
              fontSize: 30
            },
            legend:{
              display:true,
            }
          }}
        /> */}
      </Content>
    </div>
  );
}

const Content = styled.div`
    display: flex;
    justify-content: center;
    width: 1300px;
    padding-left: 64px;
`;

export default Diagram;