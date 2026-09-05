import type { PageServerLoad } from '../../../../.svelte-kit/types/src/routes/test/$types';
import { Api } from '$lib/ky/api.js';
import type { ApiResponse } from '$lib/type/type.js';
import type { PageProfileResponse } from './type.ts';

export const load: PageServerLoad = async ({ params, setHeaders }) => {
	setHeaders({
		'cache-control': 'private, max-age=30'
	});

	return await Api.get(`/pages/${params.pageId}`).json<ApiResponse<PageProfileResponse>>();
};
