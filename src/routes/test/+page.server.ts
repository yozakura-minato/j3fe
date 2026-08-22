import type { PageServerLoad } from './$types';
import { Api } from '$lib/ky/api.js';

export const load: PageServerLoad = async () => {
	return await Api.get('/test').json<{ message: string }>();
};
