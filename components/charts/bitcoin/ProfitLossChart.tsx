"use client";
// Import necessary modules
import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts'; // Import ApexOptions
import { ApexOptions } from 'apexcharts';

interface OHLCDataItem {
  x: number;
  y: number[];
}

const EthereumPriceChart: React.FC = () => {
  const [candlestickData, setCandlestickData] = useState<OHLCDataItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace 'YOUR_COINGECKO_API_ENDPOINT' with the actual endpoint
        const response = await fetch('https://api.coingecko.com/api/v3/coins/ethereum/ohlc?vs_currency=usd&days=max');
        const data = await response.json() as OHLCDataItem[]; // Type assertion for data

        // Extract OHLC data from the API response
        const ohlcData = data.map((entry: OHLCDataItem) => ({ // Explicit type for entry
          x: new Date(entry.x).getTime(), 
          y: entry.y, // Use entry.y directly for OHLC values
        }));

        setCandlestickData(ohlcData);
      } catch (error) {
        console.error('Error fetching OHLC data:', error);
      }
    };

    fetchData();
  }, []);

  const options: ApexOptions = { // Define options with correct type
    chart: {
      type: 'candlestick', // Set chart type explicitly as 'candlestick'
    },
    xaxis: {
      type: 'datetime',
    },
  };

  return (
    <ReactApexChart
      options={options}
      series={[
        { name: 'Candlestick', data: candlestickData },
      ]}
      type="candlestick" // Correct chart type for candlesticks
      height={800}
      width={1600}
    />
  );
};

export default EthereumPriceChart;
