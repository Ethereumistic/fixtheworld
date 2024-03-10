import { HoverEffect } from "./ui/card-hover-effect-what-is-bitcoin";

export function CardHoverEffectWhatIsBitcoin() {
  return (
    <div className="max-w-5xl mx-auto px-5 -translate-y-12">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
    {
    title: "Barter",
    description:"Discover the origins of trade as we delve into the simplicity and complexity of barter systems. From ancient marketplaces to modern economic insights, explore the fundamental concept of exchanging goods and services without the need for a common currency.",
    link: "https://stripe.com",
    
    borderColor:"border-[#C79A66]",
    bgColors: "bg-[#C79A66]",
    titleColors: "text-[#C79A66]",
    iconColors: "group-hover:text-[#C79A66]",
    icons: "FaExchangeAlt",
    },
    {
    title: "Gold",
    description: "Uncover the timeless allure of gold, a symbol of wealth transcending centuries. Trace its historical significance from ancient civilizations to contemporary investment, understanding why gold remains (not for long) a steadfast store of value.",
    link: "https://stripe.com",

    borderColor:"border-yellow-500",
    bgColors: "bg-yellow-400",
    titleColors: "text-yellow-400",
    iconColors: "group-hover:text-yellow-400",
    icons: "GiGoldBar",
    },
    {
    title: "Bitcoin",
    description: "Enter the decentralized world of Bitcoin, a groundbreaking digital currency challenging traditional systems. Explore its blockchain technology and disruptive potential, redefining the concept of money and fostering financial inclusion.",
    link: "https://stripe.com",

    borderColor:"border-borange",
    bgColors: "bg-borange",
    titleColors: "text-borange",
    iconColors: "group-hover:text-borange",
    icons: "IoLogoBitcoin",
  },
  {
    title: "Fiat",
    description: "Navigate the intricacies of fiat currencies, exploring the foundations of modern money issued by governments. Understand the challenges of a system where value is derived from trust and government decree.",
    link: "https://netflix.com",

    borderColor:"border-tgreen",
    bgColors: "bg-tgreen",
    titleColors: "text-tgreen",
    iconColors: "group-hover:text-tgreen",
    icons: "FaRegMoneyBill1",
  },
  {
    title: "Altcoins",
    description: "Explaining the distinction between Bitcoin, the first and most established cryptocurrency, and the vast landscape of alternative cryptocurrencies (altcoins).",
    link: "https://google.com",

    borderColor:"border-eth",
    bgColors: "bg-eth",
    titleColors: "text-eth",
    iconColors: "group-hover:text-eth",
    icons: "FaEthereum",
  },
  {
    title: "CBDCs",
    description: "Explore the emerging landscape of Central Bank Digital Currencies (CBDCs). Uncover the motivations behind this shift and examine the potential impact on monetary policy, financial systems, and individual transactions.",
    link: "https://meta.com",

    borderColor:"border-tblue",
    bgColors: "bg-tblue",
    titleColors: "text-tblue",
    iconColors: "group-hover:text-tblue",
    icons: "SiWebmoney",
  },
  {
    title: "War",
    description: "Draw parallels between the revolutionary nature of Bitcoin and the historical significance of gunpowder in warfare. Analyze how Bitcoin reshapes power dynamics, challenging traditional financial structures and funding of warfare.",
    link: "https://amazon.com",

    borderColor:"border-red-600",
    bgColors: "bg-red-600",
    titleColors: "text-red-600",
    iconColors: "group-hover:text-red-600",
    icons: "GiPistolGun",
  },
  {
    title: "Time",
    description: "Embark on a philosophical journey inspired by DerGigi's 'Bitcoin is Time' article. Explore the concept of time as a valuable resource within the context of Bitcoin's scarcity.",
    link: "https://microsoft.com",

    borderColor:"border-yellow-500",
    bgColors: "bg-yellow-300",
    titleColors: "text-yellow-300",
    iconColors: "group-hover:text-yellow-300",
    icons: "ImHourGlass",
  },
  {
    title: "Game Theory",
    description: "Engage in the strategic complexities of game theory within the realm of cryptocurrencies and economic decision-making. Delve into the rational choices and interactions that define this intricate field.",
    link: "https://microsoft.com",

    borderColor:"border-purple-500",
    bgColors: "bg-purple-500",
    titleColors: "text-purple-500",
    iconColors: "group-hover:text-purple-500",
    icons: "IoGameControllerOutline",
  },
];
