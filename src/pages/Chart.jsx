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
    
    // const [historyData, setHistoryData] = useState();
    // const [days, setDays] = useState(1);
    // const chartParams = useParams()

    // const chartYear = `https://api.coingecko.com/api/v3/coins/${chartParams.coinId}/market_chart?vs_currency=usd&days=365`;
    // useEffect(() => {
    //     axios.get(chartYear).then((response) => {
    //     setDays(response.data)
    //     }).catch((error) => {
    //     console.log(error)
    //     })
    // },[])

    // console.log(days)


  return (
    <div>
        <Line
            data={{
            labels: {},

            datasets: [
              
            ],
            }}
            options={{
                elements: {
                    point: {
                        radius: 1,
                    },
                },
            }}
        />

            {/*<Line
              data={{
                labels: historicData.map((coin) => {
                  let date = new Date(coin[0]);
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`;
                  return days === 1 ? time : date.toLocaleDateString();
                }),

                datasets: [
                  {
                    data: historicData.map((coin) => coin[1]),
                    label: `Price ( Past ${days} Days ) in ${currency}`,
                    borderColor: "#EEBC1D",
                  },
                ],
              }}
              options={{
                elements: {
                  point: {
                    radius: 1,
                  },
                },
              }}
            /> */}

    </div>
  )
}

export default Chart
