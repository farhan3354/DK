import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const Stock = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [timeRange, setTimeRange] = useState('5d');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo');
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="text-center text-gray-600">Loading...</div>;
  if (error) return <div className="text-center text-red-600">Error: {error.message}</div>;

  const timeSeries = data['Time Series (5min)'];
  const times = Object.keys(timeSeries).reverse(); // Reversed to have the latest time first

  const getRecentData = () => {
    const recentTime = times[0]; // Most recent time
    const recentData = timeSeries[recentTime];
    return {
      time: recentTime,
      open: parseFloat(recentData['1. open']),
      high: parseFloat(recentData['2. high']),
      low: parseFloat(recentData['3. low']),
      close: parseFloat(recentData['4. close']),
    };
  };

  const recentData = getRecentData();

  const chartData = {
    labels: [recentData.time], // Single label for the most recent data point
    datasets: [
      {
        label: 'Open Price',
        data: [recentData.open],
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        tension: 0.1,
      },
      {
        label: 'High Price',
        data: [recentData.high],
        fill: false,
        borderColor: 'rgba(255,99,132,1)',
        backgroundColor: 'rgba(255,99,132,0.2)',
        tension: 0.1,
      },
      {
        label: 'Low Price',
        data: [recentData.low],
        fill: false,
        borderColor: 'rgba(54,162,235,1)',
        backgroundColor: 'rgba(54,162,235,0.2)',
        tension: 0.1,
      },
      {
        label: 'Close Price',
        data: [recentData.close],
        fill: false,
        borderColor: 'rgba(153,102,255,1)',
        backgroundColor: 'rgba(153,102,255,0.2)',
        tension: 0.1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'black',
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        backgroundColor: 'rgba(0,0,0,0.7)',
        titleColor: 'white',
        bodyColor: 'white',
        borderColor: 'rgba(0,0,0,0.1)',
        borderWidth: 1,
        cornerRadius: 4,
        caretSize: 6,
        xPadding: 10,
        yPadding: 10,
      },
    },
    scales: {
      x: {
        display: false, // Hide the X-axis
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Price (USD)',
          color: 'black',
          font: {
            size: 16,
            weight: 'bold',
          },
        },
        ticks: {
          color: 'black',
        },
        grid: {
          color: 'rgba(0,0,0,0.1)',
        },
      },
    },
    layout: {
      padding: {
        left: 10,
        right: 10,
        top: 10,
        bottom: 10,
      },
    },
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">IBM Intraday Stock Data</h1>
      <div className="mb-4 flex justify-center">
        <button className="mx-2 px-4 py-2 bg-blue-500 text-white rounded" onClick={() => setTimeRange('1d')}>1 Day</button>
        <button className="mx-2 px-4 py-2 bg-blue-500 text-white rounded" onClick={() => setTimeRange('1w')}>1 Week</button>
        <button className="mx-2 px-4 py-2 bg-blue-500 text-white rounded" onClick={() => setTimeRange('15d')}>15 Days</button>
        <button className="mx-2 px-4 py-2 bg-blue-500 text-white rounded" onClick={() => setTimeRange('1m')}>1 Month</button>
        <button className="mx-2 px-4 py-2 bg-blue-500 text-white rounded" onClick={() => setTimeRange('1y')}>1 Year</button>
      </div>
      <div className="mb-8">
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default Stock;
