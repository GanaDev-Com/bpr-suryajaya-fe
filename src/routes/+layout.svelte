<script lang="ts">
	import { ChevronUp } from 'svelte-bootstrap-icons';
	import Style from '$lib/components/Style.svelte';
	import Script from '$lib/components/Script.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import type { LayoutData } from './$types';
	import type { Snippet } from 'svelte';
	import Meta from '$lib/components/Meta.svelte';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();
	let appName = data.props.appName;
</script>

<!-- Meta Here -->
<Meta />
<!-- End Meta -->

<!-- Style Here -->
<Style />
<!-- End Style -->

<!-- Navbar Here -->
<Navbar />
<!-- End Navbar -->
<div id="content">
	<!-- Render Children -->
	{@render children()}
	<!-- End Render Children -->

	<!-- Scroll To Top Here -->
	<a class="scroll-to-top-btn" href="#header" aria-label="Scroll to top"
		><ChevronUp class="text-white" />
	</a>
	<!-- End Scroll To Top -->
</div>
<!-- Script Here -->
<Script />
<!-- End Script -->

<!-- Footer Here -->
<Footer {appName} />
<!-- End Footer -->
