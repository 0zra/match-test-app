import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { useQuery, UseQueryOptions, QueryKey } from 'react-query';
import { domains } from '../config/domains';
import { GetUsersResponseInterface } from './interfaces';



export const getUsersData = async () => {
	return await axios
		.get<GetUsersResponseInterface>(
			`${domains.API_URL_BASE}/users`,
		)
		.then(response => {
			return Promise.resolve(response.data);
		})
		.catch(error => {
			console.error('Error GET users', error);
			return Promise.reject(error);
		});
};

export function useGetUsersDataQuery(
	options?: any
) {
	return useQuery(
		['users'] as QueryKey,
		() => getUsersData(),
		options
	);
}