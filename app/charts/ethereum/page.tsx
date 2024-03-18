import { TracingBeam } from '@/components/ui/tracing-beam';
import { TabsCharts } from './TabsCharts';
import EthereumPriceChart from '@/components/charts/ethereum/eth-price';

const Ethereum = () => {


  return (
      <TracingBeam className=''>
        <div className=''>
            {/* <TabsCharts /> */}

            <EthereumPriceChart />
            <EthereumPriceChart />

        </div>
      </TracingBeam>
      
  );
};

export default Ethereum;