import { BitcoinTermType, columns } from "./bitcoinColumns"
import { DataTable } from "./BitcoinTable"

async function getData(): Promise<BitcoinTermType[]> {
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