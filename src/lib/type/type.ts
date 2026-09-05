import type { UUID } from 'node:crypto';

export type ApiResponse<T> = {
	data: T | null;
	error: string | null;
};

export enum PageAccess {
	PUBLIC = 'PUBLIC',
	PRIVATE = 'PRIVATE'
}

export type PageProfileBase = {
	id: UUID;
	displayPath: string;
	title: string;
	description?: string;
	access: PageAccess;
};
