import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StockData = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&outputsize=full&apikey=D7SOZP46NQSTENC0'
        );
        const timeSeries = response.data['Time Series (5min)'];
        const formattedData = Object.keys(timeSeries).map((key) => ({
          time: key,
          ...timeSeries[key],
        }));
        setData(formattedData);
      } catch (error) {
        setError('Error fetching data');
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">IBM Stock Data (5min Interval)</h1>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Time</th>
                <th className="px-4 py-2">Open</th>
                <th className="px-4 py-2">High</th>
                <th className="px-4 py-2">Low</th>
                <th className="px-4 py-2">Close</th>
                <th className="px-4 py-2">Volume</th>
              </tr>
            </thead>
            <tbody>
              {data.map((entry, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="border px-4 py-2">{entry.time}</td>
                  <td className="border px-4 py-2">{entry['1. open']}</td>
                  <td className="border px-4 py-2">{entry['2. high']}</td>
                  <td className="border px-4 py-2">{entry['3. low']}</td>
                  <td className="border px-4 py-2">{entry['4. close']}</td>
                  <td className="border px-4 py-2">{entry['5. volume']}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default StockData;
