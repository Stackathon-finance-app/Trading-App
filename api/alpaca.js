import apisauce from 'apisauce';
import keys from '../alpaca-api';

const alpacaApi = (baseUrl = keys.ALPACA_URL) => {
	const api = apisauce.create({
		baseURL : keys.ALPACA_URL,
		headers : {
			'APCA-API-KEY-ID'     : keys.ALPACA_API_KEY_ID,
			'APCA-API-SECRET-KEY' : keys.ALPACA_API_SECRET_KEY
		},
		timeout : 5000
	});

	const getAccount = () => api.get('v2/account');

	const getPositions = () => api.get('v2/positions');

	const getActivity = () => api.get('v2/account/activities');

	return {
		getAccount,
		getPositions,
		getActivity
	};
};

export default alpacaApi;
