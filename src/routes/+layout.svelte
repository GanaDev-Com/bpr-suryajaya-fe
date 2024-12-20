<script lang="ts">
	import Style from '../components/Style.svelte';
	import Script from '../components/Script.svelte';
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<Style />
<Navbar />
<div id="content">
	<slot />
	<a class="scroll-to-top-btn" href="#header" aria-label="Scroll to top"
		><i class="ph-bold ph-caret-up"></i>
	</a>
</div>
<Script />
<Footer />
