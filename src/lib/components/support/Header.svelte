<script lang="ts">
	import { ChevronDoubleRight } from 'svelte-bootstrap-icons';
	import Banner from '$lib/images/banner/banner.webp';
</script>

<div class="slider-sub">
	<div class="bg-img">
		<img src={Banner} alt="banner" />
	</div>
	<div class="container">
		<div class="heading-nav gap-4 mt-32">
			<a class="hover-underline caption1 text-white" href="/">Beranda</a>
			<ChevronDoubleRight width="12" class="text-white" />
			<a class="hover-underline caption1 text-white" href="/support">Bantuan</a>
			<ChevronDoubleRight width="12" class="text-white" />
			<div class="caption1 text-white">Pusat Bantuan</div>
		</div>
		<div class="text-nav">
			<div class="heading3 text-white">Pusat Bantuan</div>
			<div class="sub-heading mt-8 text-white fw-400">
				Kami siap untuk melayani dan menjawab pertanyaan Anda.
			</div>
		</div>
	</div>
</div>
