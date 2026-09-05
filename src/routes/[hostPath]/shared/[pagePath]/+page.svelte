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
	<meta
		name="description"
		content={`[Shared by user #${data.data.hostPath}] ${data.data.pageProfile.description}`}
	/>
	<link rel="canonical" href="http://localhost:5173" />
</svelte:head>

<h1>
	<a href="/">Home > </a>
	<strong>{data.data.pageProfile.title}</strong>
</h1>
<hr />
<main>
	<section>
		<h2>{data.data.pageProfile.title}</h2>
		<p>Description: {data.data.pageProfile.description}</p>
		<p>Content:</p>
		<ol>
			{#each data.data.pageContents as pc, i}
				<li id={i}>{pc}</li>
			{/each}
		</ol>
	</section>
</main>
