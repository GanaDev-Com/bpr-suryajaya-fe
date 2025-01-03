<script lang="ts">
	import Header from '$lib/components/term-and-policy/Header.svelte';
	import Privacy from '$lib/components/term-and-policy/Privacy.svelte';
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();
	let pageName = data.props.pageName;
</script>

<!-- Header Here -->
<Header {pageName} />
<!-- End Header -->

<!-- Term Policy Here -->
<Privacy />
<!-- End Term Policy -->
