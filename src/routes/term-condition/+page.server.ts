import type { PageServerLoad } from './$types';
import termsContent from '../../components/term-and-policy/md/terms-condition.md';
export const load: PageServerLoad = async () => {
	return await {
		props: {
			pageName: 'Syarat dan Ketentuan',
			termsContent: termsContent
		}
	};
};
