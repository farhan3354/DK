import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const Detail = () => {
  const [chartData, setChartData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBitcoinData = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart', {
          params: {
            vs_currency: 'usd',
            days: '1',
            interval: 'minute'
          }
        });

        console.log(response.data);  // Debug: log response data

        const prices = response.data.prices;
        const labels = prices.map(price => new Date(price[0]).toLocaleTimeString());
        const data = prices.map(price => price[1]);

        setChartData({
          labels,
          datasets: [
            {
              label: 'Bitcoin Price (USD)',
              data,
              borderColor: 'rgba(75, 192, 192, 1)',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              fill: true,
              tension: 0.1
            }
          ]
        });
        setLoading(false);
      } catch (error) {
        console.error(error);  // Debug: log error
        setError(error.message);
        setLoading(false);
      }
    };

    fetchBitcoinData();

    const intervalId = setInterval(fetchBitcoinData, 60000); // Fetch data every 60 seconds

    return () => clearInterval(intervalId);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={{ width: '80%', margin: '0 auto' }}>
      <h2>Bitcoin Price Chart</h2>
      <Line data={chartData} />
    </div>
  );
};

export default Detail;
