<script lang="ts">
	import { ChevronDoubleRight } from 'svelte-bootstrap-icons';
	import Banner from '$lib/images/banner/banner.webp';
</script>

<div class="slider-sub">
	<div class="bg-img">
		<img loading="lazy" src={Banner} alt="banner" />
	</div>
	<div class="container">
		<div class="heading-nav gap-4 mt-32">
			<a class="hover-underline caption1 text-white" href="/">Beranda</a>
			<ChevronDoubleRight width="12" class="text-white" />
			<a class="hover-underline caption1 text-white" href="/product/kredit">Produk</a>
			<ChevronDoubleRight width="12" class="text-white" />
			<div class="caption1 text-white">Kredit</div>
		</div>
		<div class="text-nav">
			<div class="heading3 text-white">Layanan Kredit</div>
			<div class="sub-heading mt-8 text-white fw-400">
				Berbagai solusi kredit yang fleksibel dan terpercaya untuk mendukung kebutuhan finansial
				pribadi atau usaha Anda.
			</div>
		</div>
	</div>
</div>
