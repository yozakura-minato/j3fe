import type { PageProfileBase } from '$lib/type/type.js';

export type PageProfileListResponse = {
	hostPath: string;
	pageProfiles: PageProfileBase[] | null;
};
