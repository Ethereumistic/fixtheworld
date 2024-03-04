import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const tipsArray = [
  { id: 1, name:'Market Cap', title:'Market Cap = Current Price x Circulating Supply', description: 'Refers to the total market value of a cryptocurrency’s circulating supply. It is similar to the stock market’s measurement of multiplying price per share by shares readily available in the market (not held & locked by insiders, governments)' },
  { id: 2, name:'Fully Diluted Valuation', title:'Fully Diluted Valuation (FDV) = Current Price x Total Supply', description: 'Fully Diluted Valuation (FDV) is the theoretical market capitalization of a coin if the entirety of its supply is in circulation, based on its current market price. The FDV value is theoretical as increasing the circulating supply of a coin may impact its market price. Also depending on the tokenomics, emission schedule or lock-up period of a coin(\')s supply, it may take a significant time before its entire supply is released into circulation.' },
  { id: 3, name:'24 Hour Trading Vol', title:'', description: 'A measure of a cryptocurrency trading volume across all tracked platforms in the last 24 hours. This is tracked on a rolling 24-hour basis with no open/closing times.' },
  { id: 4, name:'Circulating Supply', title:'', description: 'The amount of coins that are circulating in the market and are tradeable by the public. It is comparable to looking at shares readily available in the market (not held & locked by insiders, governments).' },
  { id: 5, name:'Total Supply', title:'Total Supply = Onchain supply - burned tokens', description: 'The amount of coins that have already been created, minus any coins that have been burned (removed from circulation). It is comparable to outstanding shares in the stock market.' },
  { id: 6, name:'Max Supply', title:'Max Supply = Theoretical maximum as coded', description: 'The maximum number of coins coded to exist in the lifetime of the cryptocurrency. It is comparable to the maximum number of issuable shares in the stock market.' },
  { id: 7, name:'Market Cap / FDV', title:'Market Cap / FDV', description: 'The proportion of current market capitalization compares to market capitalization when meeting max supply. The closer the Mkt Cap/FDV to 1, the closer the current market capitalization to its fully diluted valuation and vice versa.' },

  // Add more tips as needed
];

interface HoverInfoProps {
  id: number;
}

export function HoverInfo({ id }: HoverInfoProps) {
  const tip = tipsArray.find((tip) => tip.id === id);

  if (!tip) {
    return null; // Handle the case when the tip with the provided id is not found
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost">
            <p className="font-normal text-lg text-borange  justify-center items-center z-30">{tip.name}</p>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
            <h1 className='text-lg m-4'>{tip.title}</h1>
          <p className='text-md px-4 my-4'>{tip.description}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
