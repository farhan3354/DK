import React from 'react';
import Plot from 'react-plotly.js';

class Stock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stockChartXValues: [],
      stockChartYValues: []
    };
  }

  componentDidMount() {
    this.fetchStock();
  }

  fetchStock() {
    const API_KEY = 'YOUR_API_KEY_HERE';
    let StockSymbol = 'FB';
    let API_Call = `(link unavailable);

    fetch(API_Call)
      .then(response => response.json())
      .then(data => {
        const xValues = [];
        const yValues = [];

        for (var key in data['Time Series (Daily)']) {
          xValues.push(key);
          yValues.push(data['Time Series (Daily)'][key]['1. open']);
        }

        this.setState({
          stockChartXValues: xValues,
          stockChartYValues: yValues
        });
      });
  }

  render() {
    return (
      <div>
        <h1>Stock Market</h1>
        <Plot
          data={[
            {
              x: this.state.stockChartXValues,
              y: this.state.stockChartYValues,
              type: 'scatter',
              mode: 'lines+markers',
              marker: { color: 'red' }
            }
          ]}
          layout={{
            width: 720,
            height: 440,
            title: 'A Fancy Plot'
          }}
        />
      </div>
    );
  }
}

export default  Stock