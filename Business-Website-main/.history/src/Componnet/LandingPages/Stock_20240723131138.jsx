import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const Stock = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [timeRange, setTimeRange] = useState('5d'); // Default to '5d'

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&outputsize=full&apikey=demo');
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [timeRange]);

  if (loading) return <div className="text-center text-gray-600">Loading...</div>;
  if (error) return <div className="text-center text-red-600">Error: {error.message}</div>;

  const timeSeries = data['Time Series (5min)'];
  const times = Object.keys(timeSeries).reverse();

  const filterTimes = (times) => {
    const now = new Date();
    let startTime;

    switch (timeRange) {
      case '1d':
        startTime = new Date(now.getTime() - 24 * 60 * 60 * 1000);
        break;
      case '1w':
        startTime = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        break;
      case '15d':
        startTime = new Date(now.getTime() - 15 * 24 * 60 * 60 * 1000);
        break;
      case '1m':
        startTime = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
        break;
      case '5d':
        startTime = new Date(now.getTime() - 5 * 24 * 60 * 60 * 1000);
        break;
      default:
        startTime = new Date(now.getTime() - 5 * 24 * 60 * 60 * 1000);
    }

    return times.filter(time => new Date(time) > startTime);
  };

  const filteredTimes = filterTimes(times);
  const openPrices = filteredTimes.map(time => parseFloat(timeSeries[time]['1. open']));
  const highPrices = filteredTimes.map(time => parseFloat(timeSeries[time]['2. high']));
  const lowPrices = filteredTimes.map(time => parseFloat(timeSeries[time]['3. low']));
  const closePrices = filteredTimes.map(time => parseFloat(timeSeries[time]['4. close']));

  const chartData = {
    labels: filteredTimes,
    datasets: [
      {
        label: 'Open Price',
        data: openPrices,
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        tension: 0.1,
      },
      {
        label: 'High Price',
        data: highPrices,
        fill: false,
        borderColor: 'rgba(255,99,132,1)',
        backgroundColor: 'rgba(255,99,132,0.2)',
        tension: 0.1,
      },
      {
        label: 'Low Price',
        data: lowPrices,
        fill: false,
        borderColor: 'rgba(54,162,235,1)',
        backgroundColor: 'rgba(54,162,235,0.2)',
        tension: 0.1,
      },
      {
        label: 'Close Price',
        data: closePrices,
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
        display: true,
        title: {
          display: true,
          text: 'Time',
          color: 'black',
          font: {
            size: 16,
            weight: 'bold',
          },
        },
        ticks: {
          color: 'black',
        },
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
      <h1 className="text-2xl font-bold mb-4 text-center m-10">IBM Intraday Stock Data</h1>
      <div className="mb-4 flex justify-center">
        <button className="mx-2 px-4 py-2 bg-black text-white rounded-xl" onClick={() => setTimeRange('1d')}>1 Day</button>
        <button className="mx-2 px-4 py-2 bg-black text-white rounded-xl" onClick={() => setTimeRange('1w')}>1 Week</button>
        <button className="mx-2 px-4 py-2 bg-black text-white rounded-xl" onClick={() => setTimeRange('15d')}>15 Days</button>
        <button className="mx-2 px-4 py-2 bg-black text-white rounded-xl" onClick={() => setTimeRange('1m')}>1 Month</button>
        <button className="mx-2 px-4 py-2 bg-black text-white rounded-xl" onClick={() => setTimeRange('5d')}>5 Days</button>
      </div>
      <div className="mb-8">
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default Stock;
