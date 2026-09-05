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
	<title>Workspace</title>
	<meta name="description" content="Personal workspaces with texts and links." />
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
	<strong>Workspace</strong>
</h1>
<hr />
<main>
	<ol>
		{#each data.data.pageProfiles as pp}
			<li id={pp.id}>
				<h2><a href={`/workspace/${pp.id}`}>{pp.title}</a></h2>
				<p>Description: {pp.description}</p>
				<p>Access: {pp.access}</p>
				{#if pp.access === 'PUBLIC'}
					{@render shareLink(data.data.hostPath, pp.displayPath)}
				{/if}
			</li>
		{/each}
	</ol>
</main>
