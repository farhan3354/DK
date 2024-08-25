// App.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
imp// Import Tailwind CSS

const Stock = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
  const openPrices = times.map(time => parseFloat(timeSeries[time]['1. open']));
  const highPrices = times.map(time => parseFloat(timeSeries[time]['2. high']));
  const lowPrices = times.map(time => parseFloat(timeSeries[time]['3. low']));
  const closePrices = times.map(time => parseFloat(timeSeries[time]['4. close']));
  const volumes = times.map(time => parseFloat(timeSeries[time]['5. volume']));

  const chartData = {
    labels: times.reverse(),
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

  const rows = times.map(time => (
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
