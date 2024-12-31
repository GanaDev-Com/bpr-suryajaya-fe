<script lang="ts">
	export let pageName: string;
</script>

<div class="slider-sub">
	<div class="bg-img">
		<img loading="lazy" src="/assets/images/banner/case-studies.png" alt="banner" />
	</div>
	<div class="container">
		<div class="heading-nav gap-4 mt-32">
			<a class="hover-underline caption1 text-white" href="/">Beranda</a><i
				class="ph ph-caret-double-right text-white"
			></i>
			<div class="caption1 text-white">{pageName}</div>
		</div>
		<div class="text-nav">
			<div class="heading3 text-white">{pageName}</div>
			<div class="sub-heading mt-8 text-white fw-400">
				Berikut adalah {pageName} kami yang dapat membantu Anda.
			</div>
		</div>
	</div>
</div>
