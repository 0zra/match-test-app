import { QueryClient } from 'react-query';

export const reactQueryConfig = (): QueryClient => {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				retry: 0,
				refetchOnWindowFocus: false,
				refetchOnReconnect: false
			}
		}
	});
	return queryClient;
};