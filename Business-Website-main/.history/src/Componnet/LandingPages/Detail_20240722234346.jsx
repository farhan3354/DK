import React from 'react';
import Plot from 'react-plotly.js';
import fetch from 'node-fetch'; // Import node-fetch

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
    const pointerToThis = this;
    const API_KEY = 'HGJWFG4N8AQ66ICD';
    let StockSymbol = 'FB';
    let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;
    let stockChartXValuesFunction = [];
    let stockChartYValuesFunction = [];

    fetch(API_Call)
      .then(response => response.json())
      .then(data => {
        for (var key in data['Time Series (Daily)']) {
          stockChartXValuesFunction.push(key);
          stockChartYValuesFunction.push(data['Time Series (Daily)'][key]['1. open']);
        }

        pointerToThis.setState({
          stockChartXValues: stockChartXValuesFunction,
          stockChartYValues: stockChartYValuesFunction
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
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
              marker: {color: 'red'},
            }
          ]}
          layout={{width: 720, height: 440, title: 'Stock Price'}}
        />
      </div>
    );
  }
}

export default Stock;
