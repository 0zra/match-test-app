import axios, { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { domains } from '../config/domains';



export const postReportRequest = async (postReportRequestData: {
  from?: string;
  to?: string;
	projectId?: string;
	gatewayId?: string;
}) => {
	return await axios
		.post(
			`${domains.API_URL_BASE}/report`,
			postReportRequestData
		)
		.then(response => {
			return Promise.resolve(response.data);
		})
		.catch(error => {
			return Promise.reject(error);
		});
};

export const usePostReportRequestMutation = (
	successHandler?: (data?: any) => void,
	errorHander?: (data?: any) => boolean
) => {
	return useMutation(postReportRequest, {
		onSuccess: data => {
			successHandler && successHandler(data);
		},
		onError: (error: AxiosError) => {
			errorHander &&
				errorHander(error) 
		}
	});
};
