<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	$inspect(data);
</script>

<h1>Message from <strong><a href="/">JOHO3</a></strong></h1>
<p><em>"{data.message}"</em></p>
