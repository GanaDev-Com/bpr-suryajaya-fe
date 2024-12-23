import { APP_NAME } from '$env/static/private';

import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
	return {
		props: {
			appName: APP_NAME
		}
	};
};
