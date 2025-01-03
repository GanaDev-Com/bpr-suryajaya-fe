<script lang="ts">
	import { ChevronDoubleRight } from 'svelte-bootstrap-icons';
	import Error from '$lib/images/error.webp';
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
			<div class="caption1 text-white">Galat</div>
		</div>
		<div class="text-nav">
			<div class="heading3 text-white">Galat Error</div>
			<div class="sub-heading mt-8 text-white fw-400">
				Halaman tidak dapat ditemukan, periksa kembali tautan Anda
			</div>
		</div>
	</div>
</div>
<div class="blog-list style-detail pb-60">
	<div class="container">
		<div class="d-flex justify-content-center align-items-center">
			<div class="col-12 col-lg-5 text-center">
				<img
					loading="lazy"
					class="w-100 h-100 hover-scale display-block"
					src={Error}
					alt="Page Error"
				/>
			</div>
		</div>
	</div>
</div>
