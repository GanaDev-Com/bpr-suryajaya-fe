<script lang="ts">
	import { CheckCircle } from 'svelte-bootstrap-icons';
	import SubAbout from '$lib/images/component/sub-about5.webp';
	import SubAboutLeft from '$lib/images/component/sub-about5-left.webp';
	import AboutHome from '$lib/images/component/about-home5.webp';
</script>

<div class="about-home-five service-block mt-100">
	<div class="container list-service">
		<div class="row flex-between row-gap-32">
			<div class="col-12 col-lg-7">
				<div class="text-about">
					<div class="heading4">
						Mengapa Memilih <b>BPR Suryajaya Kubutambahan</b>
					</div>
					<div class="body2 text-secondary mt-20 text-justify">
						<strong>PT. BPR Suryajaya Kubutambahan</strong> menawarkan berbagai produk perbankan yang
						dirancang untuk memenuhi kebutuhan keuangan Anda, baik untuk pribadi maupun usaha. Dengan
						lebih dari 30 tahun pengalaman, kami berkomitmen untuk menyediakan layanan terbaik dan memberikan
						solusi finansial yang fleksibel dan terpercaya.
					</div>
					<div class="list mt-40">
						<div class="row row-gap-5">
							<div class="col-12 col-sm-6 left">
								<div class="item flex-item-center gap-12">
									<CheckCircle width="12" height="12" class="text-blue" />
									<div class="body2 text-secondary">Produk yang beragam</div>
								</div>
								<div class="item flex-item-center gap-12 mt-12">
									<CheckCircle width="12" height="12" class="text-blue" />
									<div class="body2 text-secondary">Suku bunga kompetitif</div>
								</div>
								<div class="item flex-item-center gap-12 mt-12">
									<CheckCircle width="12" height="12" class="text-blue" />
									<div class="body2 text-secondary">Proses yang cepat dan mudah</div>
								</div>
							</div>
							<div class="col-12 col-sm-6 right">
								<div class="item flex-item-center gap-12">
									<CheckCircle width="12" height="12" class="text-blue" />
									<div class="body2 text-secondary">Tabungan dan kredit fleksibel</div>
								</div>
								<div class="item flex-item-center gap-12 mt-12">
									<CheckCircle width="12" height="12" class="text-blue" />
									<div class="body2 text-secondary">Pengalaman lebih dari 30 tahun</div>
								</div>
								<div class="item flex-item-center gap-12 mt-12">
									<CheckCircle width="12" height="12" class="text-blue" />
									<div class="body2 text-secondary">Layanan nasabah yang responsif</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-12 col-lg-5">
				<div class="bg-img w-100">
					<img loading="lazy" class="w-100" src={AboutHome} alt="Overview" />
				</div>
				<div class="sub-img">
					<img loading="lazy" src={SubAboutLeft} alt="Overview" /><img
						loading="lazy"
						src={SubAbout}
						alt="Overview"
					/>
				</div>
			</div>
		</div>
	</div>
</div>
