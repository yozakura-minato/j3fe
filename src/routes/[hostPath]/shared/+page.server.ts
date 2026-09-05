import { Api } from '$lib/ky/api.js';
import type { ApiResponse } from '$lib/type/type.js';
import type { PageServerLoad } from '../../../../.svelte-kit/types/src/routes/workspace/$types';
import type { PageProfileListResponse } from '../../workspace/type.ts';

export const load: PageServerLoad = async ({ params, setHeaders }) => {
	setHeaders({
		'cache-control': 'max-age=30'
	});

	return await Api.get(`/pages/all/public?host=${params.hostPath}`).json<
		ApiResponse<PageProfileListResponse>
	>();
};
