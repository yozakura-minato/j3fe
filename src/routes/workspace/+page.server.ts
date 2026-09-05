import type { PageServerLoad } from '../../../.svelte-kit/types/src/routes/test/$types';
import { Api } from '$lib/ky/api.js';
import type { PageProfileListResponse } from './type.ts';
import type { ApiResponse } from '$lib/type/type.js';

export const load: PageServerLoad = async ({ setHeaders }) => {
	setHeaders({
		'cache-control': 'private, max-age=30'
	});

	return await Api.get('/pages/all').json<ApiResponse<PageProfileListResponse>>();
};
