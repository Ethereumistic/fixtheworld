import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-5 -translate-y-12">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Physical vs Digital",
    description:
      "Explore the contrast between traditional physical money and the digital nature of Bitcoin.",
    link: "https://stripe.com",
  },
  {
    title: "Software vs Protocol",
    description:
      "Learn about the 'method' that powers Bitcoin and the underlying set of instructions that govern its operation.",
    link: "https://netflix.com",
  },
  {
    title: "Centralization vs Decentralization",
    description:
      "Discover the concept of decentralization and how it removes the need for a central authority in Bitcoin.",
    link: "https://google.com",
  },
  {
    title: "Mining",
    description:
      "Uncover the process of mining and how it creates new Bitcoins and secures the network.",
    link: "https://meta.com",
  },
  {
    title: "Network Effect",
    description:
      "Explore the network effect and how it contributes to the value and stability of Bitcoin.",
    link: "https://amazon.com",
  },
  {
    title: "Price",
    description:
      "Understand the factors that influence the price of Bitcoin and its ever-evolving nature.",
    link: "https://microsoft.com",
  },
];
