<script lang="ts">
	import { Calendar3, ChevronRight } from 'svelte-bootstrap-icons';
	import Blog1 from '$lib/images/blog/item1.webp';
	import Blog2 from '$lib/images/blog/item2.webp';
	import Blog3 from '$lib/images/blog/item3.webp';
</script>

<div class="blog-list mt-100 pb-60">
	<div class="container">
		<div class="row row-gap-40">
			<div class="col-12 col-lg-8 flex-column row-gap-40">
				<a class="row blog-item row-gap-20 item-filter" href="#!" data-name="tab-one">
					<div class="col-12 col-md-6">
						<div class="bg-img w-100 overflow-hidden bora-16">
							<img loading="lazy" class="w-100 h-100 display-block" src={Blog1} alt="Report" />
						</div>
					</div>
					<div class="col-12 col-md-6">
						<div class="caption2 pt-4 pb-4 pl-12 pr-12 bg-surface bora-40 display-inline-block">
							Laporan Kinerja Tahun 2024
						</div>
						<div class="heading6 mt-8">LAPORAN KINERJA TAHUN 2024</div>
						<div class="date flex-item-center gap-16 mt-8">
							<div class="author caption2 text-secondary">
								by <span class="text-on-surface">Admin BPR Suryajaya </span>
							</div>
							<div class="item-date flex-item-center">
								<Calendar3 width="18" /><span class="ml-4 caption2">22 April 2024</span>
							</div>
						</div>
						<div class="body3 text-secondary mt-16 pb-16">
							Berikut merupakan laporan kinerja Tahun 2024
						</div>
						<div class="read fw-700 text-underline">Unduh Dokumen</div>
					</div>
				</a>
				<a class="row blog-item row-gap-20 item-filter hide" href="#!" data-name="tab-two">
					<div class="col-12 col-md-6">
						<div class="bg-img w-100 overflow-hidden bora-16">
							<img loading="lazy" class="w-100 h-100 display-block" src={Blog2} alt="Report" />
						</div>
					</div>
					<div class="col-12 col-md-6">
						<div class="caption2 pt-4 pb-4 pl-12 pr-12 bg-surface bora-40 display-inline-block">
							Laporan Kinerja Tahun 2023
						</div>
						<div class="heading6 mt-8">LAPORAN KINERJA TAHUN 2023</div>
						<div class="date flex-item-center gap-16 mt-8">
							<div class="author caption2 text-secondary">
								by <span class="text-on-surface">Admin BPR Suryajaya </span>
							</div>
							<div class="item-date flex-item-center">
								<Calendar3 width="18" /><span class="ml-4 caption2">22 April 2023</span>
							</div>
						</div>
						<div class="body3 text-secondary mt-16 pb-16">
							Berikut merupakan laporan kinerja Tahun 2023
						</div>
						<div class="read fw-700 text-underline">Unduh Dokumen</div>
					</div>
				</a>
			</div>
			<div class="col-12 col-lg-4 pl-55">
				<div class="cate-block">
					<div class="heading7">Daftar Tahun Laporan</div>
					<div class="list-nav mt-16">
						<div
							class="nav-item bora-8 flex-between p-12 pointer text-button text-secondary active"
							data-name="tab-one"
						>
							Tahun 2024<ChevronRight />
						</div>
						<div
							class="nav-item bora-8 flex-between p-12 pointer text-button text-secondary"
							data-name="tab-two"
						>
							Tahun 2023<ChevronRight />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
