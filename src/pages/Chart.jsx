import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );

const Chart = () => {

    const [day, setDay] = useState();
    const chartParams = useParams();
    const historyURL = 'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30'; 
    useEffect(() => {
        axios.get(historyURL).then((res) => {
            setDay(res.data)
        }).catch((error) => {
          console.log('error')
        })
    },[])
    console.log(day)

    const options = {
    responsive: true,
    plugins: {
        legend: {
        position: 'top',
        },
        title: {
        display: true,
        text: 'Chart.js Line Chart',
        },
    },
    };
  

    const data = {
        labels:[
            'January', 'February', 'March', 'April', 'May',
        ],

        datasets: [
          {
            data: [1,2,3,1,4,2],
            label: chartParams.coinId,
            fill: true,
            borderColor: 'purple',
            backgroundColor: 'purple',
          },
        ],  
      };

  return (
    <div className='flex justify-center'>
        <Line options={options} data={data}/>
    </div>
  )
}

export default Chart
