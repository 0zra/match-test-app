import axios from 'axios';
import { useQuery, QueryKey } from 'react-query';
import { domains } from '../config/domains';
import { GetProjectsResponseInterface } from './interfaces';



export const getProjectsData = async () => {
	return await axios
		.get<GetProjectsResponseInterface>(
			`${domains.API_URL_BASE}/projects`,
		)
		.then(response => {
			return Promise.resolve(response.data);
		})
		.catch(error => {
			console.error('Error GET projects', error);
			return Promise.reject(error);
		});
};

export function useGetProjectsDataQuery(
	options?: any
) {
	return useQuery(
		['projects'] as QueryKey,
		() => getProjectsData(),
		options
	);
}