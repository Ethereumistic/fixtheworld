"use client"
import React, { useState } from 'react';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Sidebar from "./sidebar";
import BitcoinPriceChart from "../charts/bitcoin/btc-price";
import ActiveWindow from "./activeWindow";

interface PlaygroundProps {}

export const Playground: React.FC<PlaygroundProps> = () => {
  const [activeChart, setActiveChart] = useState('bitcoin');

  const handleSwitchChart = (chartType: string) => {
    setActiveChart(chartType);
  };

  return (
    <ResizablePanelGroup direction="horizontal" className="max-w border">
      <ResizablePanel defaultSize={14} maxSize={15} minSize={3}>
        <div className="flex h-screen p-1">
          <span className="font-semibold">
            <Sidebar onSwitchChart={handleSwitchChart} />
          </span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />

      <ResizablePanel defaultSize={50}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={25}>
            <div className="flex h-full items-center justify-center p-6 bg-transparent z-10">
              <span className="font-semibold">
                <ActiveWindow activeChart={activeChart} />
              </span>
            </div>
          </ResizablePanel>

          <ResizableHandle withHandle />
          
          <ResizablePanel defaultSize={8}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Three</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};
