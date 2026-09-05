<script lang="ts">
	import type { PageProps } from '../../../../.svelte-kit/types/src/routes/$types';
	import { toast } from 'svelte-sonner';

	let { data }: PageProps = $props();
	$effect(() => {
		if (data.error !== null) {
			toast.error(data.error);
		}
	});
</script>

<svelte:head>
	<title>Shared pages</title>
	<meta name="description" content={`Shared pages of user #${data.data.hostPath}`} />
	<link rel="canonical" href="http://localhost:5173" />
</svelte:head>

<h1>
	<a href="/">Home > </a>
	<strong>User #{data.data.hostPath} Shared Pages</strong>
</h1>
<hr />
<main>
	<ol>
		{#each data.data.pageProfiles as pp}
			<li id={pp.id}>
				<h2><a href={`shared/${pp.displayPath}`}>{pp.title}</a></h2>
				<p>Description: {pp.description}</p>
			</li>
		{/each}
	</ol>
</main>
