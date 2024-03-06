
import Image from "next/image";
import { Tabs } from "./ui/tabs";
import RenderBitcoin from "@/app/dictionary/RenderBitcoin"

export function TabsDemo() {
  const tabs = [
    {
      title: "Bitcoin",
      value: "bitcoin",
      content: (
        <div className="w-full overflow-hidden relative h-auto border border-borange p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br bg-black ">
          <p className="text-borange">Bitcoin</p>
          <div className="justify-center items-center flex">
            <RenderBitcoin />
          </div>
        </div>
      ),
    },
    {
      title: "Fiat",
      value: "fiat",
      content: (
        <div className="w-full overflow-hidden relative h-full border border-borange p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br bg-black">
          <p className="text-tgreen">Fiat</p>
          asdasdasd
        </div>
      ),
    },
    {
      title: "Economics",
      value: "economics",
      content: (
        <div className="w-full overflow-hidden relative h-full border border-borange p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br bg-black">
          <p className="text-tblue">Economics</p>
          asdasdasd
        </div>
      ),
    },
    {
      title: "Math",
      value: "math",
      content: (
        <div className="w-full overflow-hidden relative h-full border border-borange p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br bg-black">
          <p className="text-yellow-300">Math</p>
          asdasdasd
        </div>
      ),
    },
    {
      title: "Physics",
      value: "physics",
      content: (
        <div className="w-full overflow-hidden relative h-full border border-borange p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br bg-black">
          <p className="text-red-600">Physics</p>
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
