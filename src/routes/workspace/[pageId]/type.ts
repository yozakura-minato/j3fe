import type { PageProfileBase } from '$lib/type/type.js';

export type PageProfileResponse = {
	hostPath: string;
	pageProfile: PageProfileBase;
	pageContents: string[] | null;
};
