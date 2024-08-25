// src/LiveChart.js
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const LiveChart = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('https://www.coingecko.com/', {
          params: {
            vs_currency: 'usd',
            days: '1',
            interval: 'minute'
          }
        });
        const data = result.data.prices;

        // Assume the API returns an array of data points
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
    const interval = setInterval(fetchData, 60000); // Update every 1 minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Live Bitcoin Price Chart</h2>
      <Line data={chartData} />
    </div>
  );
};

export default LiveChart;
