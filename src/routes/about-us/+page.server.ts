import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		props: {
			active: 'about-us'
		}
	};
};
