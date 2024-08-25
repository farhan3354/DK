// App.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Stock.css'
const Stock = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const timeSeries = data['Time Series (5min)'];
  const rows = Object.keys(timeSeries).map(time => (
    <tr key={time}>
      <td>{time}</td>
      <td>{timeSeries[time]['1. open']}</td>
      <td>{timeSeries[time]['2. high']}</td>
      <td>{timeSeries[time]['3. low']}</td>
      <td>{timeSeries[time]['4. close']}</td>
      <td>{timeSeries[time]['5. volume']}</td>
    </tr>
  ));

  return (
    <div className="container">
      <h1>IBM Intraday Stock Data</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Time</th>
            <th>Open</th>
            <th>High</th>
            <th>Low</th>
            <th>Close</th>
            <th>Volume</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default Stock;
