import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment/moment';
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

    const [chart, setChart] = useState([]);

    const chartParams = useParams();

    // const historyURL = `https://api.coingecko.com/api/v3/coins/${chartParams.coinId}/market_chart?vs_currency=usd&days=1`; 

    // useEffect(() => {
    //     axios.get(historyURL).then((res) => {
    //         const data = res.data
    //         const chartData = data.prices.map(value=>({
    //             x: value[0],
    //             y: value[1].toFixed(2)
    //         }));
    //         setChart(chartData)
    //     }).catch((error) => {
    //       console.log('error')
    //     })
    // },[])
    const fetchData = (days) => {
        const historyURL = `https://api.coingecko.com/api/v3/coins/${chartParams.coinId}/market_chart?vs_currency=usd&days=${days}`;
        axios
          .get(historyURL)
          .then((res) => {
            const data = res.data;
            const chartData = data.prices.map((value) => ({
              x: moment(value[0]).format('MMM DD, HH:mm'),
              y: value[1].toFixed(2),
            }));
            setChart(chartData);
          })
          .catch((error) => {
            console.log('error', error);
          });
      };
    
      useEffect(() => {
    
        fetchData(1);
      }, []);


    const options = {
    responsive: true,
    elements: {
        point: {
          radius: 1,
        },
      },
    plugins: {
        legend: {
        position: 'top',
        },
        title: {
        display: true,
        },
    },
    };
    
    const data = {
     
        labels: chart.map(value=>moment(value.x).format('MMMDD')),
        
        datasets: [
          {
         
            data: chart.map(val => val.y),
            label: chartParams.coinId,
            fill: true,
            borderColor: 'purple',
            backgroundColor: 'indigo',
          },
        ],  
      };
     
    

  return (
    <div className='chart flex justify-center flex-col'>
        <Line options={options} data={data}/>
        <div className='chart__buttons flex justify-between mt-10'>
            <button className='border-2 p-2 rounded-xl hover:bg-indigo-600 hover:bg-opacity-50'
            onClick={()=> fetchData(1)}>24 hours</button>

            <button className='border-2 p-2 rounded-xl hover:bg-indigo-600 hover:bg-opacity-50'
            onClick={()=> fetchData(30)}>30 days</button>

            <button className='border-2 p-2 rounded-xl hover:bg-indigo-600 hover:bg-opacity-50'
            onClick={()=> fetchData(90)}>3 months</button>

            <button className='border-2 p-2 rounded-xl hover:bg-indigo-600 hover:bg-opacity-50'
            onClick={()=> fetchData(365)}>1 year</button>

        </div>
    </div>
  )
}

export default Chart
