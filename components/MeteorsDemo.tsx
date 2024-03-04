import React from "react";
import { useState, useEffect } from "react";
import { Meteors } from "./ui/meteors";
import { FaBitcoin } from "react-icons/fa";
import { HoverInfo } from "./HoverInfo";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  import { Separator } from "@/components/ui/separator"
  import { getBitcoinData } from '@/utils/api'; // Assuming you have the utility function in utils/api.js

  interface BitcoinData {
    priceUsd: number; // Adjust the type according to the actual data type of priceUsd
    marketCapUsd: number;
    maxSupply: number;
    volumeUsd24Hr: number;
    supply: number;


}

export function MeteorsDemo() {
    const [bitcoinData, setBitcoinData] = useState<BitcoinData | null>(null);
    useEffect(() => {
        const fetchBitcoinData = async () => {
          const price = await getBitcoinData();
          setBitcoinData(price);

        };
    
        fetchBitcoinData();
      }, []);

      const calculateFDV = () => {
        if (!bitcoinData) return null;
        const fdv = bitcoinData.priceUsd * bitcoinData.maxSupply;
        return fdv.toFixed(2); // Round to two decimal places
      };
    
      const calculateMarketCapRatio = () => {
        if (!bitcoinData || !fdv) return null; // Early return to avoid errors
      
        // Ensure fdv is a number using type assertion or conversion
        const fdvAsNumber = Number(fdv);
      
        if (isNaN(fdvAsNumber)) {
          console.error("Error: FDV is not a valid number for calculation.");
          return null; // Handle the error gracefully
        }
      
        const ratio = bitcoinData.marketCapUsd / fdvAsNumber;
        return ratio.toFixed(4); // Round to four decimal places
      };
      
    
      const fdv = calculateFDV();
      const marketCapRatio = calculateMarketCapRatio();
    

  return (
    <div className="">
      <div className=" w-full relative max-w-3xl">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-orange-500 to-borange transform scale-[0.80] bg-borange rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-black border border-borange  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          {/* <div className="h-16 w-16 rounded-full border flex items-center justify-center mb-4 border-gray-500"> */}
          <FaBitcoin size={50} className="mb-4 text-white "/>

          {/* </div> */}
        <div className="flex">
          <h1 className="font-bold text-xl text-white mb-4 relative z-50">
            Bitcoin Metrics 
          </h1>
          <h1 className="font-bold text-xl mx-4 text-white mb-4 relative z-50">
            <p className="text-white">
            {bitcoinData !== null ? `$ ${Number(bitcoinData.priceUsd).toFixed(0)}` : 'Loading...'}
            </p>
          </h1>
        </div>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger>

                <div className="flex-row flex items-center justify-between">
                    <HoverInfo id={1} />
                    <div className="ml-20 text-white">
                    {bitcoinData !== null ? `$ ${Number(bitcoinData.marketCapUsd).toFixed(0)}` : 'Loading...'}
                    </div>
                </div>
                </AccordionTrigger>
                    <AccordionContent>
                    <div className="flex-row flex items-center justify-between">

                        <HoverInfo id={7}/>
                        {marketCapRatio}
                        </div>
                    </AccordionContent>
            </AccordionItem>
        </Accordion>

        <div className=" flex-col ">
          <div className="flex-row flex items-center justify-between">
          <HoverInfo id={2} />
          <p className="text-white">
            $ {fdv}
            </p>
          </div>
          <Separator />
          <div className="flex-row flex items-center justify-between">
          <HoverInfo id={3} />
          <p className="text-white">
          {bitcoinData !== null ? `$ ${Number(bitcoinData.volumeUsd24Hr).toFixed(0)}` : 'Loading...'}
          </p>
          </div>
          <Separator />

          <div className="flex-row flex items-center justify-between">
          <HoverInfo id={4} />
          <p className="text-white">
          {bitcoinData !== null ? `₿ ${Number(bitcoinData.supply).toFixed(0)}` : 'Loading...'}
          </p>
          </div>
          <Separator />
          <div className="flex-row flex items-center justify-between">
          <HoverInfo id={5} />
          <p className="text-white">
          {bitcoinData !== null ? `₿ ${Number(bitcoinData.maxSupply).toFixed(0)}` : 'Loading...'}
          </p>
          </div>
          <Separator />

          <div className="flex-row flex items-center justify-between">
          <HoverInfo id={6} />
          <p className="text-white">
          {bitcoinData !== null ? `₿ ${Number(bitcoinData.maxSupply).toFixed(0)}` : 'Loading...'}
          </p>
          </div>
        </div>
          

          <button className="border px-4 py-1 mt-1 rounded-lg  border-gray-500 text-gray-300">
            Explore
          </button>

          {/* Meaty part - Meteor effect */}
          <Meteors number={21} />
        </div>
      </div>
    </div>
  );
}