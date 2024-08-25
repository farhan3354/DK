// App.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
//import './index.css'; // Import Tailwind CSS

const Stock = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [timeRange, setTimeRange] = useState('1d');

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
  }, []);

  if (loading) return <div className="text-center text-gray-600">Loading...</div>;
  if (error) return <div className="text-center text-red-600">Error: {error.message}</div>;

  const timeSeries = data['Time Series (5min)'];
  const times = Object.keys(timeSeries);

  const filterTimes = (times) => {
    const now = new Date();
    switch (timeRange) {
      case '1d':
        return times.filter(time => new Date(time) > new Date(now.getTime() - 24 * 60 * 60 * 1000));
      case '1w':
        return times.filter(time => new Date(time) > new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000));
      case '15d':
        return times.filter(time => new Date(time) > new Date(now.getTime() - 15 * 24 * 60 * 60 * 1000));
      case '1m':
        return times.filter(time => new Date(time) > new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000));
      default:
        return times;
    }
  };

  const filteredTimes = filterTimes(times);
  const openPrices = filteredTimes.map(time => parseFloat(timeSeries[time]['1. open']));
  const highPrices = filteredTimes.map(time => parseFloat(timeSeries[time]['2. high']));
  const lowPrices = filteredTimes.map(time => parseFloat(timeSeries[time]['3. low']));
  const closePrices = filteredTimes.map(time => parseFloat(timeSeries[time]['4. close']));
  const volumes = filteredTimes.map(time => parseFloat(timeSeries[time]['5. volume']));

  const chartData = {
    labels: filteredTimes.reverse(),
    datasets: [
      {
        label: 'Open Price',
        data: openPrices.reverse(),
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      },
      {
        label: 'High Price',
        data: highPrices.reverse(),
        fill: false,
        borderColor: 'rgba(255,99,132,1)',
        tension: 0.1,
      },
      {
        label: 'Low Price',
        data: lowPrices.reverse(),
        fill: false,
        borderColor: 'rgba(54,162,235,1)',
        tension: 0.1,
      },
      {
        label: 'Close Price',
        data: closePrices.reverse(),
        fill: false,
        borderColor: 'rgba(153,102,255,1)',
        tension: 0.1,
      }
    ],
  };

  const rows = filteredTimes.map(time => (
    <tr key={time} className="hover:bg-gray-100">
      <td className="border px-4 py-2">{time}</td>
      <td className="border px-4 py-2">{timeSeries[time]['1. open']}</td>
      <td className="border px-4 py-2">{timeSeries[time]['2. high']}</td>
      <td className="border px-4 py-2">{timeSeries[time]['3. low']}</td>
      <td className="border px-4 py-2">{timeSeries[time]['4. close']}</td>
      <td className="border px-4 py-2">{timeSeries[time]['5. volume']}</td>
    </tr>
  ));

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">IBM Intraday Stock Data</h1>
      <div className="mb-4 flex justify-center">
        <button className="mx-2 px-4 py-2 bg-blue-500 text-white rounded" onClick={() => setTimeRange('1d')}>1 Day</button>
        <button className="mx-2 px-4 py-2 bg-blue-500 text-white rounded" onClick={() => setTimeRange('1w')}>1 Week</button>
        <button className="mx-2 px-4 py-2 bg-blue-500 text-white rounded" onClick={() => setTimeRange('15d')}>15 Days</button>
        <button className="mx-2 px-4 py-2 bg-blue-500 text-white rounded" onClick={() => setTimeRange('1m')}>1 Month</button>
      </div>
      <div className="mb-8">
        <Line data={chartData} />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-gray-200 font-bold uppercase text-sm text-gray-600">Time</th>
              <th className="py-2 px-4 bg-gray-200 font-bold uppercase text-sm text-gray-600">Open</th>
              <th className="py-2 px-4 bg-gray-200 font-bold uppercase text-sm text-gray-600">High</th>
              <th className="py-2 px-4 bg-gray-200 font-bold uppercase text-sm text-gray-600">Low</th>
              <th className="py-2 px-4 bg-gray-200 font-bold uppercase text-sm text-gray-600">Close</th>
              <th className="py-2 px-4 bg-gray-200 font-bold uppercase text-sm text-gray-600">Volume</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Stock;
