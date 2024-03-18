'use client';
import React from 'react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { FaBitcoin } from 'react-icons/fa';
import { MdCurrencyExchange } from 'react-icons/md';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible";
  import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  

  const BitcoinButton = ({  }) => {
    const [categories, setCategories] = useState([
        'Distribution',
        'Exchanges',
        'Long/Short term hodlers',    
      ]);

  return (
    <div className=''>
    <Collapsible className=''>
      <CollapsibleTrigger>
        <Button className="w-64 flex items-center mb-2 justify-center">
          <FaBitcoin size={24} className='mr-auto'/>Bitcoin
          {categories.length > 0 && (
            <span className="ml-auto rounded-full bg-gray-500 text-white p-1 text-xs">
              {categories.length}
            </span>
          )}
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        {/* Bitcoin categories */}
        {/* {categories.map((category, index) => (
          <Button key={index} className='m-2 flex w-[200px]'>
            <MdCurrencyExchange className="mr-8 h-4 w-4" />
            {category}
          </Button>
        ))} */}

{/* Distribution */}
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger className='ml-8' >Distribution</AccordionTrigger>
    <AccordionContent className='ml-12'>
      Address Cohorts
    </AccordionContent>
  </AccordionItem>
</Accordion>

{/* Exchanges */}
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger className='ml-8'>Exchanges</AccordionTrigger>
    <AccordionContent className='ml-12'>
      Exchanges
    </AccordionContent>
    <AccordionContent className='ml-12'>
      Bitcoin ETF Product
    </AccordionContent>
  </AccordionItem>
</Accordion>

{/* Long/Short term hodlers */}
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger className='ml-8'>Long/Short Term Hodlers</AccordionTrigger>
    <AccordionContent className='ml-12'>
    Long/Short Term Hodlers
    </AccordionContent>
  </AccordionItem>
</Accordion>
        

      </CollapsibleContent>
    </Collapsible>
    </div>
  );
};

export default BitcoinButton;

