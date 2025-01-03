<script lang="ts">
	import Header from '$lib/components/term-and-policy/Header.svelte';
	import TermCondition from '$lib/components/term-and-policy/TermCondition.svelte';
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();
	let pageName = data.props.pageName;
</script>

<!-- Header Here -->
<Header {pageName} />
<!-- End Header -->

<!-- Term Policy Here -->
<TermCondition />
<!-- End Term Policy -->
