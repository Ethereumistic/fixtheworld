"use client";
import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

interface BitcoinPriceChartProps {}

const BitcoinPriceChart: React.FC<BitcoinPriceChartProps> = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const [chartSize, setChartSize] = useState({ width: 1000, height: 600 });

  useEffect(() => {
    const fetchData = async () => {
      // Example URL for fetching Bitcoin prices (replace with your data source)
      const url = 'https://api.coindesk.com/v1/bpi/historical/close.json';

      try {
        const response = await fetch(url);
        const data = await response.json();

        const dates = Object.keys(data.bpi);
        const prices = Object.values(data.bpi);

        const ctx = chartRef.current?.getContext('2d');
        
        if (ctx) {
          const chart = new Chart(ctx, {
            type: 'line',
            data: {
              labels: dates,
              datasets: [
                {
                  label: 'Bitcoin Price',
                  data: prices,
                  fill: false,
                  borderColor: 'rgb(75, 192, 192)',
                  tension: 0.1,
                },
              ],
            },
          });

          const updateChartSize = () => {
            setChartSize({
              width: chartRef.current?.parentElement?.offsetWidth || 1600,
              height: chartRef.current?.parentElement?.offsetHeight || 600,
            });
          };

          updateChartSize();
          window.addEventListener('resize', updateChartSize);

          return () => {
            window.removeEventListener('resize', updateChartSize);
            chart.destroy();
          };
        }
      } catch (error) {
        console.error('Error fetching Bitcoin prices:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2 className='text-center border-b border-borange items-center justify-center flex py-4 -translate-y-10'>Bitcoin Price Chart</h2>
      <canvas ref={chartRef} width={chartSize.width} height={chartSize.height}></canvas>
    </div>
  );
};

export default BitcoinPriceChart;
