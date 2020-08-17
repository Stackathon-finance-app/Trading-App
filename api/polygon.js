import apisauce from 'apisauce';
import keys from '../alpaca-api';

const polygonApi = (baseUrl = keys.POLYGON_URL) => {
	const api = apisauce.create({
		baseURL : keys.POLYGON_URL,
		timeout : 5000
	});

	const params = {
		apiKey : keys.ALPACA_API_KEY_ID
	};

	const getQuote = (symbol) => {
		api.get(`v2/snapshot/locale/us/markets/stocks/tickers/${symbol}`, params);
	};

	return { getQuote };
};

export default polygonApi;
