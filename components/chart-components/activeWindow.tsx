// activeWindow.tsx
import React from 'react';
import BitcoinPriceChart from '../charts/bitcoin/btc-price';
import EthereumPriceChart from '../charts/ethereum/eth-price';

interface ActiveWindowProps {
  activeChart: string;
}

const ActiveWindow: React.FC<ActiveWindowProps> = ({ activeChart }) => {
  return (
    <div className='w-[1504px] h-[608px] border border-borange translate-x-[10px] -translate-y-[20px]'>
      {activeChart === 'bitcoin' && <BitcoinPriceChart />}
      {activeChart === 'ethereum' && <EthereumPriceChart />}
    </div>
  );
};

export default ActiveWindow;
