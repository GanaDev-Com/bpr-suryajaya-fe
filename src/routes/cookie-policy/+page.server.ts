import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return await {
		props: {
			pageName: 'Kebijakan Cookie'
		}
	};
};