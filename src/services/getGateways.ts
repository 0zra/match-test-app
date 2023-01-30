import axios from 'axios';
import { useQuery, QueryKey } from 'react-query';
import { domains } from '../config/domains';
import { GetGatewaysResponseInterface } from './interfaces';



export const getGatewaysData = async () => {
	return await axios
		.get<GetGatewaysResponseInterface>(
			`${domains.API_URL_BASE}/gateways`,
		)
		.then(response => {
			return Promise.resolve(response.data);
		})
		.catch(error => {
			console.error('Error GET Gateways', error);
			return Promise.reject(error);
		});
};

export function useGetGatewaysDataQuery(
	options?: any
) {
	return useQuery(
		['gateways'] as QueryKey,
		() => getGatewaysData(),
		options
	);
}