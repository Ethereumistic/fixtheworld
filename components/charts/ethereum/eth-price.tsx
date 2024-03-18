'use client';
import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

interface OHLCDataItem {
  x: number;
  y: number[];
  Open: number;
  High: number;
  Low: number;
  Close: number;
}

const EthereumPriceChart: React.FC = () => {
  const [candlestickData, setCandlestickData] = useState<OHLCDataItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/btc-price');
        const data = await response.json();
        console.log('Data Type:', typeof data); // Check data type (should be 'object')

        if (Array.isArray(data)) {
          const ohlcData = data.map((entry) => ({
            x: new Date(entry.Date).getTime(), // Assuming 'Date' is the timestamp property
            y: [entry.Open, entry.High, entry.Low, entry.Close],
            Open: entry.Open,  // Ensure these properties exist in your API response
            High: entry.High,
            Low: entry.Low,
            Close: entry.Close,
          }));
          setCandlestickData(ohlcData);
        } else {
          console.error('Invalid data structure received from API');
        }
      } catch (error) {
        console.error('Error fetching OHLC data:', error);
      }
    };
    

    fetchData();
  }, []);

  const options: ApexOptions = {
    chart: {
      type: 'candlestick',
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
      type="candlestick"
      height={800}
      width={1600}
    />
  );
};

export default EthereumPriceChart;

