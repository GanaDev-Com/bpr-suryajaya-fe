<script lang="ts">
	import Style from '../components/Style.svelte';
	import Script from '../components/Script.svelte';
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
	import type { LayoutData } from './$types';
	import type { Snippet } from 'svelte';
	let { data, children }: { data: LayoutData; children: Snippet } = $props();
	let appName = data.props.appName;
</script>

<Style />
<Navbar />
<div id="content">
	{@render children()}
	<a class="scroll-to-top-btn" href="#header" aria-label="Scroll to top"
		><i class="ph-bold ph-caret-up"></i>
	</a>
</div>
<Script />
<Footer {appName} />
