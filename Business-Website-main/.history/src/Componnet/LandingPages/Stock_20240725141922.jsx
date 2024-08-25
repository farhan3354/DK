import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const Stock = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [timeRange, setTimeRange] = useState('5d'); // Default to '5d'
  const [latestPrice, setLatestPrice] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://www.alphavantage.co/query', {
          params: {
            function: 'TIME_SERIES_INTRADAY',
            symbol: 'IBM',
            interval: '5min',
            outputsize: 'full',
            apikey: 'demo', // Using demo API key
          },
        });
        setData(response.data);

        const timeSeries = response.data['Time Series (5min)'];
        const latestTime = Object.keys(timeSeries)[0];
        const latestPrice = timeSeries[latestTime]['4. close'];
        setLatestPrice(latestPrice);

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
        fill: true,
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        tension: 0.1,
      },
      {
        label: 'High Price',
        data: highPrices,
        fill: true,
        borderColor: 'rgba(255,99,132,1)',
        backgroundColor: 'rgba(255,99,132,0.2)',
        tension: 0.1,
      },
      {
        label: 'Low Price',
        data: lowPrices,
        fill: true,
        borderColor: 'rgba(54,162,235,1)',
        backgroundColor: 'rgba(54,162,235,0.2)',
        tension: 0.1,
      },
      {
        label: 'Close Price',
        data: closePrices,
        fill: true,
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
            size: 12,
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
            size: 14,
            weight: 'bold',
          },
        },
        ticks: {
          color: 'black',
          maxRotation: 45,
          minRotation: 30,
          autoSkip: true,
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Price (USD)',
          color: 'black',
          font: {
            size: 14,
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
    <div className="p-4 sm:p-6 lg:p-8 m-2 sm:m-4 lg:m-0 bg-yellow-100 shadow-lg rounded-lg">
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-center">
        <a href="/">IBM Intraday Stock Data</a>
      </h1>
      <div className="text-center mb-4">
        <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-700">
          Latest Price: ${latestPrice}
        </p>
      </div>
      <div className="mb-4 flex flex-wrap justify-center gap-2">
        <button className="px-8 py-2 bg-yellow-500 text-black rounded-md text-sm sm:text-base transition-colors duration-300" onClick={() => setTimeRange('1d')}>Today</button>
        <button className="px-8 py-2 bg-yellow-500 text-black rounded-md text-sm sm:text-base transition-colors duration-300" onClick={() => setTimeRange('1w')}>1 Week</button>
        <button className="px-8 py-2 bg-yellow-500 text-black rounded-md text-sm sm:text-base transition-colors duration-300" onClick={() => setTimeRange('15d')}>15 Days</button>
        <button className="px-8 py-2 bg-yellow-500 text-black rounded-md text-sm sm:text-base transition-colors duration-300" onClick={() => setTimeRange('1m')}>1 Month</button>
      </div>
      <div className="mb-8">
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default Stock;
