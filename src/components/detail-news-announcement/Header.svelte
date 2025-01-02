<script lang="ts">
	import { ChevronDoubleRight, Calendar3 } from 'svelte-bootstrap-icons';
</script>

<div class="slider-sub">
	<div class="bg-img">
		<img src="/assets/images/banner/blog.png" alt="banner" />
	</div>
	<div class="container">
		<div class="heading-nav gap-4 mt-32">
			<a class="hover-underline caption1 text-white" href="/">Beranda</a>
			<ChevronDoubleRight width="12" class="text-white" />

			<a class="hover-underline caption1 text-white" href="/news-announcement"
				>Berita dan Pengumuman</a
			>
			<ChevronDoubleRight width="12" class="text-white" />
			<div class="caption1 text-white">Detail</div>
		</div>
		<div class="d-flex justify-content-center">
			<div class="text-nav text-center col-12">
				<div class="row flex-center">
					<div class="col-xl-8 col-lg-9 col-md-10 col-sm-11 col-12">
						<div class="caption2 pt-8 pb-8 pl-16 pr-16 bg-surface bora-20 display-inline-block">
							Business
						</div>
						<div class="heading4 mt-16 text-white">
							Where to grow your business as a photographer: site or social media?
						</div>
						<div class="date flex-center gap-16 mt-16">
							<div class="author flex-item-center gap-16">
								<img class="w-40 h-40" src="/assets/images/blog/avatar.png" alt="" /><span
									class="text-button text-white"
									>Mark G
								</span>
							</div>
							<div class="space fs-32 fw-400 text-white">-</div>
							<div class="item-date flex-item-center">
								<Calendar3 class="text-white" width="18" /><span class="ml-4 caption2 text-white"
									>2 days ago</span
								>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
