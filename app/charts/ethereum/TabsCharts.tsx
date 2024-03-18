import Image from "next/image";
import { Tabs } from "@/components/ui/tabs";
import RenderBitcoin from "@/app/dictionary/RenderBitcoin"
import RenderFiat from "@/app/dictionary/RenderFiat"
import ActiveWindow from "@/components/chart-components/activeWindow";
import BitcoinPriceChart from "@/components/charts/bitcoin/btc-price";
import ProfitLossChart from "@/components/charts/bitcoin/ProfitLossChart";
import EthereumPriceChart from "@/components/charts/ethereum/eth-price";

export function TabsCharts() {

  const tabs = [
    {
      title: "Price",
      value: "price",
      content: (
        <div className="pb-32">
        <div className="w-full overflow-hidden relative h-auto border border-borange p-10 text-xl md:text-4xl font-bold  text-white bg-gradient-to-br bg-black ">
          {/* <p className="text-borange -mt-20 -mb-8 mx-auto translate-x-[400px] translate-y-16 z-10">Bitcoin</p> */}
          <div className="justify-center items-center flex">
            <BitcoinPriceChart />
          </div>
        </div>
        </div>
      ),
    },
    {
      title: "Profit & Loss",
      value: "pnl",
      content: (
        <div className="pb-32">
        <div className="w-full overflow-hidden relative h-auto border border-tgreen p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br bg-black">
          <p className="text-tgreen -mt-20 -mb-8 mx-auto translate-x-[400px] translate-y-16 z-10">Fiat</p>
          <div className="justify-center items-center flex">
            <EthereumPriceChart />
          </div>
        </div>
        </div>

      ),
    },
    {
      title: "Economics",
      value: "economics",
      content: (
        <div className="w-full overflow-hidden relative h-full border border-borange p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br bg-black">
          <p className="text-tblue -mt-4">Economics</p>
          asdasdasd
        </div>
      ),
    },
    {
      title: "Math",
      value: "math",
      link: "",
      content: (
        <div className="w-full overflow-hidden relative h-full border border-borange p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br bg-black">
          <p className="text-yellow-300 -mt-4">Math</p>
          asdasdasd
        </div>
      ),
    },
    {
      title: "Physics",
      value: "physics",
      content: (
        <div className="w-full overflow-hidden relative h-full border border-borange p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br bg-black">
          <p className="text-red-600 -mt-4">Physics</p>
          asdasdasd
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-row max-w-5xl mx-auto w-full  items-start justify-start ">
      <Tabs tabs={tabs} />
    </div>
  );
}