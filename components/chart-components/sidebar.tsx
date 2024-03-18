import React from 'react';
import { FaBitcoin, FaEthereum } from 'react-icons/fa';
import { MdCandlestickChart, MdOutlineShowChart, MdCurrencyExchange } from 'react-icons/md';
import { HiMiniVideoCamera } from 'react-icons/hi2';
import { BsDiagram3Fill } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import BitcoinButton from './buttons/BitcoinButton';
import EthereumButton from './buttons/EthereumButton';
import DefiButton from './buttons/DefiButton';
import DeriButton from './buttons/DeriButton';
import MarketButton from './buttons/MarketButton';
import SignalsButton from './buttons/SignalsButton';

interface SidebarProps {
  onSwitchChart: (chartType: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onSwitchChart }) => {
  return (
    <>
      <div className="">
        <div onClick={() => onSwitchChart('bitcoin')}>
          <BitcoinButton />
        </div>

        <div onClick={() => onSwitchChart('ethereum')}>
          <EthereumButton />
        </div>

        <DefiButton />
        <DeriButton />
        <MarketButton />
        <SignalsButton />
        <Button />
      </div>
    </>
  );
};

export default Sidebar;
