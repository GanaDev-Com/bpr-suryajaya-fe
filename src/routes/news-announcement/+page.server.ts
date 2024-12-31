import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return await {
		props: {
			active: 'news-announcement'
		}
	};
};
