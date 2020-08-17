import apisauce from 'apisauce';
import keys from '../alpaca-api';

const alpacaApi = (baseUrl = keys.BASE_URL) => {
	const api = apisauce.create({
		baseURL : keys.BASE_URL,
		headers : {
			'APCA-API-KEY-ID'     : keys.ALPACA_API_KEY_ID,
			'APCA-API-SECRET-KEY' : keys.ALPACA_API_SECRET_KEY
		},
		timeout : 5000
	});

	const getAccount = () => api.get('v2/account');

	const getPositions = () => api.get('v2/positions');

	return {
		getAccount,
		getPositions
	};
};

export default alpacaApi;
