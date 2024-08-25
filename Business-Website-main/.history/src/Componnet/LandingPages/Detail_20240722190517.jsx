// src/LiveChart.js
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const LiveChart = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('https://api.cgecko.com/api/v3/coins/bitcoin/market_chart', {
          params: {
            vs_currency: 'usd',
            days: '1',
            interval: 'minute'
          }
        });
        const data = result.data.prices;

        const labels = data.map(point => new Date(point[0]).toLocaleTimeString());
        const values = data.map(point => point[1]);

        setChartData({
          labels: labels,
          datasets: [
            {
              label: 'Bitcoin Price (USD)',
              data: values,
              borderColor: 'rgba(75,192,192,1)',
              borderWidth: 2,
              fill: false
            }
          ]
        });
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Live Bitcoin Price Chart</h2>
      {chartData.labels ? <Line data={chartData} /> : <p>Loading...</p>}
    </div>
  );
};

export default LiveChart;
