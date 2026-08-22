import ky from 'ky';
import { J3BE_BASE_URL } from '$env/static/private';

export const Api = ky.create({
	prefix: J3BE_BASE_URL,
	timeout: 10_000,
	headers: {
		'Content-Type': 'application/json'
	}
});
