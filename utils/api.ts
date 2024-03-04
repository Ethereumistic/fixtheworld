import axios from 'axios';

const COINCAP_API_BASE_URL = 'https://api.coincap.io/v2/assets/bitcoin';

export const getBitcoinData = async () => {
    try {
      const response = await axios.get(`${COINCAP_API_BASE_URL}`);
      const bitcoinData = response.data.data;
  
      return {
        priceUsd: bitcoinData.priceUsd,
        maxSupply: bitcoinData.maxSupply,
        marketCapUsd: bitcoinData.marketCapUsd,
        supply: bitcoinData.supply,
        volumeUsd24Hr: bitcoinData.volumeUsd24Hr,
        
      };
    } catch (error) {
      console.error('Error fetching Bitcoin data:', error);
      return null;
    }
  };