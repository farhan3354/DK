// LiveChart.js
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const Detail = () => {
  const [data, setData] = useState({
    labels: [], // X-axis labels
    datasets: [
      {
        label: 'Live Data',
        data: [], // Y-axis data
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  });

  // Function to generate random data
  const generateData = () => Math.floor(Math.random() * 100);

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prevData => {
        const newLabels = [...prevData.labels, new Date().toLocaleTimeString()];
        const newData = [...prevData.datasets[0].data, generateData()];

        // Keep the last 10 data points
        if (newLabels.length > 10) {
          newLabels.shift();
          newData.shift();
        }

        return {
          labels: newLabels,
          datasets: [
            {
              ...prevData.datasets[0],
              data: newData,
            },
          ],
        };
      });
    }, 1000); // Update every second

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <div>
      <h2>Live Chart</h2>
      <Line data={data} />
    </div>
  );
};

export default Detail;
