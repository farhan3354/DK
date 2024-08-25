import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const StockChart = () => {
  const [chartData, setChartData] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&outputsize=compact&apikey=D7SOZP46NQSTENC0'
        );
        const timeSeries = response.data['Time Series (5min)'];

        if (timeSeries) {
          const labels = Object.keys(timeSeries);
          const data = Object.values(timeSeries).map((entry) => parseFloat(entry['4. close']));

          setChartData({
            labels: labels,
            datasets: [
              {
                label: 'IBM Stock Price',
                data: data,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: false,
              },
            ],
          });
        } else {
          setError('No data available');
        }
      } catch (error) {
        setError('Error fetching data');
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">IBM Stock Price Chart (5min Interval)</h1>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="chart-container">
          <Line data={chartData} options={{
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              tooltip: {
                callbacks: {
                  label: function (context) {
                    return `Price: $${context.raw}`;
                  },
                },
              },
            },
            scales: {
              x: {
                beginAtZero: true,
              },
              y: {
                beginAtZero: true,
              },
            },
          }} />
        </div>
      )}
    </div>
  );
};

export default StockChart;
