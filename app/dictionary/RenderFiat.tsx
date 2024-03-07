import { FiatTermType, columns } from "./fiatColumns"
import { DataTable } from "./FiatTable"

async function getData(): Promise<FiatTermType[]> {
    // Fetch data from your API here.
    return [
        {
            type: "Acronym",
            term: "BTC",
            description: "Bitcoin, the first and most well-known cryptocurrency."
          },
          {
            type: "Word",
            term: "Blockchain",
            description: "A decentralized and distributed ledger technology used in cryptocurrencies."
          },
          {
            type: "Tech",
            term: "Mining",
            description: "The process of validating transactions and adding them to the blockchain."
          },
          {
            type: "Security",
            term: "Private Key",
            description: "A cryptographic key that allows the owner to access and control their cryptocurrency."
          },
          {
            type: "Transaction",
            term: "Confirmations",
            description: "The number of times a transaction has been verified by the network, indicating its security."
          },
          {
            type: "Wallet",
            term: "Hardware Wallet",
            description: "A physical device designed to securely store and manage cryptocurrency keys."
          },
          {
            type: "Market",
            term: "HODL",
            description: "A misspelling of 'hold,' expressing the strategy of holding onto cryptocurrency rather than selling it."
          },
          {
            type: "Regulatory",
            term: "KYC",
            description: "Know Your Customer, a process used by financial institutions to verify the identity of their customers."
          },
          {
            type: "Community",
            term: "Satoshi Nakamoto",
            description: "The pseudonymous creator of Bitcoin, whose identity remains unknown."
          },
          {
            type: "Misc",
            term: "Fork",
            description: "A divergence in the blockchain, leading to the existence of two separate chains with a shared history."
          },
          {
            type: "Word",
            term: "Altcoin",
            description: "Any cryptocurrency other than Bitcoin; alternative coins."
          },
          {
            type: "Tech",
            term: "Smart Contract",
            description: "Self-executing contracts with the terms of the agreement directly written into code."
          },
          {
            type: "Security",
            term: "Two-Factor Authentication (2FA)",
            description: "An additional layer of security requiring a second form of identification, usually beyond a password."
          },
          {
            type: "Transaction",
            term: "Wallet Address",
            description: "A unique alphanumeric identifier used to receive cryptocurrency."
          },
          {
            type: "Wallet",
            term: "Software Wallet",
            description: "A digital wallet that stores private keys on a device, such as a computer or smartphone."
          },
          {
            type: "Market",
            term: "Bear Market",
            description: "A market characterized by declining prices, pessimism, and a lack of investor confidence."
          },
          {
            type: "Regulatory",
            term: "SEC",
            description: "U.S. Securities and Exchange Commission, a regulatory body overseeing securities and investments."
          },
          {
            type: "Community",
            term: "FUD",
            description: "Fear, Uncertainty, and Doubt; spreading negative information to influence perception."
          },
          {
            type: "Misc",
            term: "Halving",
            description: "An event where the reward for mining new blocks is halved, occurring approximately every four years for Bitcoin."
          }
          

    ]
  }
   
  export default async function DemoPage() {
    const data = await getData()
   
    return (
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    )
  }