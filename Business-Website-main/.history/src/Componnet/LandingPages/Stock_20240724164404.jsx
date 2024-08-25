import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import YahooFinance from 'yahoo-finance2';

const Stock = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [timeRange, setTimeRange] = useState('5d'); // Default to '5d'

  useEffect(() => {
    const fetchData = async () => {
      try {
        const now = new Date();
        const endDate = now.toISOString().split('T')[0];
        const startDate = new Date(now.getTime() - getTimeRange(timeRange)).toISOString().split('T')[0];

        // Fetch data using Yahoo Finance API
        const response = await YahooFinance.historical('IBM', {
          period1: startDate,
          period2: endDate,
          interval: '5m', // 5-minute intervals
        });

        setData(response);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [timeRange]);

  const getTimeRange = (range) => {
    switch (range) {
      case '1d':
        return 24 * 60 * 60 * 1000; // 1 day
      case '1w':
        return 7 * 24 * 60 * 60 * 1000; // 1 week
      case '15d':
        return 15 * 24 * 60 * 60 * 1000; // 15 days
      case '1m':
        return 30 * 24 * 60 * 60 * 1000; // 1 month
      default:
        return 5 * 24 * 60 * 60 * 1000; // Default to 5 days
    }
  };

  if (loading) return <div className="text-center text-gray-600">Loading...</div>;
  if (error) return <div className="text-center text-red-600">Error: {error.message}</div>;

  const times = data.map(item => item.date).reverse();
  const openPrices = data.map(item => item.open).reverse();
  const highPrices = data.map(item => item.high).reverse();
  const lowPrices = data.map(item => item.low).reverse();
  const closePrices = data.map(item => item.close).reverse();

  const chartData = {
    labels: times,
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
    <div className="bg-gradient-to-b from-yellow-100 via-white to-yellow-100 pt-10 pl-16 pr-20">
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center">
        IBM Intraday Stock Data
      </h1>
      <div className="mb-4 flex flex-wrap justify-center gap-2">
        <button
          className="px-4 py-2 bg-black text-white rounded-md text-sm sm:text-base hover:bg-gray-800 transition-colors duration-300"
          onClick={() => setTimeRange('1d')}
        >
          Today
        </button>
        <button
          className="px-4 py-2 bg-black text-white rounded-md text-sm sm:text-base hover:bg-gray-800 transition-colors duration-300"
          onClick={() => setTimeRange('1w')}
        >
          1 Week
        </button>
        <button
          className="px-4 py-2 bg-black text-white rounded-md text-sm sm:text-base hover:bg-gray-800 transition-colors duration-300"
          onClick={() => setTimeRange('15d')}
        >
          15 Days
        </button>
        <button
          className="px-4 py-2 bg-black text-white rounded-md text-sm sm:text-base hover:bg-gray-800 transition-colors duration-300"
          onClick={() => setTimeRange('1m')}
        >
          1 Month
        </button>
      </div>
      <div className="pb-8">
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default Stock;
