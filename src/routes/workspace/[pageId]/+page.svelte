<script lang="ts">
	import type { PageProps } from '../../../.svelte-kit/types/src/routes/$types';
	import { toast } from 'svelte-sonner';

	let { data }: PageProps = $props();
	$effect(() => {
		if (data.error !== null) {
			toast.error(data.error);
		}
	});
</script>

<svelte:head>
	<title>{data.data.pageProfile.title}</title>
	<meta name="description" content={data.data.pageProfile.description} />
	<link rel="canonical" href="http://localhost:5173" />
</svelte:head>

{#snippet shareLink(hostPath: string, pagePath: string)}
	<p>
		Share link:
		<a
			href="http://localhost:5173/{hostPath}/shared/{pagePath}"
			target="_blank"
			rel="noopener noreferrer"
		>
			http://localhost:5173/{hostPath}/shared/{pagePath}</a
		>
	</p>
{/snippet}

<h1>
	<a href="/">Home > </a>
	<a href="/workspace">Workspace > </a>
	<strong>{data.data.pageProfile.title}</strong>
</h1>
<hr />
<main>
	<section>
		<h2>{data.data.pageProfile.title}</h2>
		<p>Description: {data.data.pageProfile.description}</p>
		<p>Access: {data.data.pageProfile.access}</p>
		{#if data.data.pageProfile.access === 'PUBLIC'}
			{@render shareLink(data.data.hostPath, data.data.pageProfile.displayPath)}
		{/if}
		<p>Content:</p>
		<ol>
			{#each data.data.pageContents as pc, i}
				<li id={i}>{pc}</li>
			{/each}
		</ol>
	</section>
</main>
