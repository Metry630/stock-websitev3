import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';
import { Scatter } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);


export const optionsScatter = {
  plugins: {
    title: {
      display: true,
      text: "Scatter Graph",
      color: "#422e50"
    }
  },
  maintainAspectRatio: true,
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};


export const dataScatter = {
  datasets: [
    {
      label: 'Selling Prices',
      data: Array.from({ length: 100 }, () => ({
        x: faker.datatype.number({ min: -100, max: 100 }),
        y: faker.datatype.number({ min: -100, max: 100 }),
      })),
      backgroundColor: '#422e50',
    },
  ],
};

export const optionsStacked = {
  plugins: {
    title: {
      display: true,
      text: 'Projections vs Actuals',
      color: '#3f2431'
    },
  },
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    x: {
      stacked: true,
      color: '#3f2431'
    },
    y: {
      stacked: true,
      color: '#3f2431'
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const labelsLine = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
export const dataStacked = {
  labels,
  datasets: [
    {
      label: 'Projections',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      backgroundColor: '#c987b9',
    },
    {
      label: 'Actuals',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: '#a8c6da',
    },
  ],
};


export const optionsLine = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Revenue',
    },
  },
};

export const dataLine = {
  labels,
  datasets: [
    {
      label: 'Current Week',
      data: labelsLine.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: '#1d1c1c',
      backgroundColor: '#1d1c1c',
      SVGPreserveAspectRatio: 'True',
      
    },
    {
      label: 'Previous Week',
      data: labelsLine.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: '#a7c5da',
      backgroundColor: '#a7c5da',
      SVGPreserveAspectRatio: 'True'
    },
  ],
};


const GraphSection = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent:'space-around', rowGap: '5vh', alignItems: 'center'}}>
      <div style={{display:'flex', justifyContent: 'space-around', height: '300px', width: '100%', columnGap: '5vh', flex: '1 1 0'}}>
        <div style={{flex: "1 1 0", display: 'flex', backgroundColor: '#638acc', borderRadius: '30px', aspectRatio: '2'}}>
          <Line option={optionsLine} data={dataLine} style={{flexGrow:'1', flexBasis: '100px'}}/>
        </div>
        <div style={{flex: "1 1 0", display: 'flex', backgroundColor: '#eb4896', borderRadius: '30px', aspectRatio: '2'}}>
          <Bar options={optionsStacked} data={dataStacked} style={{flexGrow: '1', flexBasis:'100px'}}/>
        </div>
      </div>
      <div style={{flex: "1 1 0", backgroundColor: '#9a5cc9', borderRadius: '30px', display: 'flex', height: '325px', width: '70%', justifyContent: 'center', alignContent: 'center'}}>
          <Scatter option={optionsScatter} data={dataScatter} style={{flexGrow:'1', height: '300px'}}/>
      </div>
    </div>
  )
}

export default GraphSection