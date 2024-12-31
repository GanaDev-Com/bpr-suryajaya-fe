<script lang="ts">
	import Header from '../../components/term-and-policy/Header.svelte';
	import TermPolicy from '../../components/term-and-policy/TermPolicy.svelte';
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();
	let pageName = data.props.pageName;
</script>

<!-- Header Here -->
<Header {pageName} />
<!-- End Header -->

<!-- Term Policy Here -->
<TermPolicy />
<!-- End Term Policy -->
