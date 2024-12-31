<script lang="ts">
	export let appName: string;

	const date = new Date();
	const year = date.getFullYear();
</script>

<div id="footer">
	<div class="style-one" data-sveltekit-reload>
		<div class="footer-block bg-dark pt-60">
			<div class="container">
				<div class="row flex-between pb-40">
					<div class="col-3">
						<div class="footer-company-infor flex-columns-between gap-20">
							<img
								loading="lazy"
								class="footer-logo"
								src="/assets/images/logo-white.png"
								alt="Logo"
							/>
							<div class="text caption1 text-white">
								BPR Suryajaya Kubutambahan, solusi keuangan terpercaya untuk kebutuhan pribadi dan
								usaha Anda.
							</div>
							<div class="list-social flex-item-center gap-10 style-one">
								<a
									aria-label="icon facebook"
									class="item bora-50 w-28 h-28 border-grey-2px flex-center"
									href="https://www.facebook.com/"
									target="_blank"><i class="icon-facebook fs-12"></i></a
								>
								<!-- <a
									aria-label="icon linkedin"
									class="item bora-50 w-28 h-28 border-grey-2px flex-center"
									href="https://www.linkedin.com/"
									target="_blank"><i class="icon-in fs-12"></i></a
								>
								<a
									aria-label="icon twitter"
									class="item bora-50 w-28 h-28 border-grey-2px flex-center"
									href="https://www.twitter.com/"
									target="_blank"><i class="icon-twitter fs-10"></i></a
								> -->
								<a
									aria-label="icon instagram"
									class="item bora-50 w-28 h-28 border-grey-2px flex-center"
									href="https://www.instagram.com/"
									target="_blank"><i class="icon-insta fs-10"></i></a
								>
								<a
									aria-label="icon youtube"
									class="item bora-50 w-28 h-28 border-grey-2px flex-center"
									href="https://www.youtube.com/"
									target="_blank"><i class="icon-youtube fs-10"></i></a
								>
							</div>
						</div>
					</div>
					<div class="col-6">
						<div class="footer-navigate flex-center gap-80">
							<div class="footer-nav-item">
								<div class="item-heading text-button-small text-white">Tautan Penting</div>
								<ul class="list-nav mt-4">
									<li class="mt-12">
										<a class="caption1 text-line hover-underline" href="/report/tahunan"
											>Laporan Tahunan</a
										>
									</li>
									<li class="mt-12">
										<a class="caption1 text-line hover-underline" href="/report/tata-kelola"
											>Laporan Tata Kelola</a
										>
									</li>
									<li class="mt-12">
										<a class="caption1 text-line hover-underline" href="/report/publikasi"
											>Laporan Publikasi</a
										>
									</li>
									<li class="mt-12">
										<a class="caption1 text-line hover-underline" href="/support">Bantuan</a>
									</li>
								</ul>
							</div>
							<div class="footer-nav-item">
								<div class="item-heading text-button-small text-white">Halaman</div>
								<ul class="list-nav mt-4">
									<li class="mt-12">
										<a class="caption1 text-line hover-underline" href="/about-us"
											>Kenali Lebih Dekat</a
										>
									</li>
									<li class="mt-12">
										<a class="caption1 text-line hover-underline" href="/product/kredit"
											>Produk Kredit</a
										>
									</li>
									<li class="mt-12">
										<a class="caption1 text-line hover-underline" href="/product/tabungan"
											>Produk Tabungan</a
										>
									</li>
									<li class="mt-12">
										<a class="caption1 text-line hover-underline" href="/product/deposito"
											>Produk Deposito</a
										>
									</li>
								</ul>
							</div>
							<div class="footer-nav-item">
								<div class="item-heading text-button-small text-white">Tautan Lainnya</div>
								<ul class="list-nav mt-4">
									<li class="mt-12">
										<a
											target="_blank"
											rel="noopener noreferrer"
											class="caption1 text-line hover-underline"
											href="https://wa.me/6282339222539?text=Halo%20BPR%20Suryajaya%20Kubutambahan,%20Saya%20ingin%20melaporkan%20aduan"
											>Lapor Via WhatsApp</a
										>
									</li>
									<li class="mt-12">
										<a class="caption1 text-line hover-underline" href="/support/form-aduan"
											>Lapor Aduan</a
										>
									</li>
									<li class="mt-12">
										<a
											target="_blank"
											rel="noopener noreferrer"
											class="caption1 text-line hover-underline"
											href="https://s.id/bpr-suryajaya-kbt">Karir</a
										>
									</li>
									<li class="mt-12">
										<a class="caption1 text-line hover-underline" href="/support">FAQs</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="col-3">
						<div class="company-contact">
							<div class="heading text-button-small text-white">Berlangganan</div>
							<div class="mt-12">
								<div class="caption1 text-line">
									Dapatkan promo dan penawaran terbaik dari BPR Suryajaya Kubutambahan
								</div>
							</div>
							<div class="send-block mt-20 flex-item-center">
								<input class="caption1 text-secondary" type="text" placeholder="Email Anda..." />
								<button class="flex-center" aria-label="newsletter">
									<i class="ph ph-paper-plane-tilt text-white"></i>
								</button>
							</div>
							<div class="mt-12">
								<div class="caption2 text-line">
									This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of
									Service apply.
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="border-line"></div>
				<div class="footer-bottom flex-between pt-12 pb-12">
					<div class="left-block flex-item-center">
						<div class="copy-right text-line caption1">
							© {year + ' ' + appName}. All Rights Reserved.
						</div>
					</div>
					<div class="nav-link flex-item-center gap-10">
						<a class="text-line caption1 hover-underline" href="/term-condition"
							>Syarat dan Ketentuan</a
						><span class="text-line caption1">|</span><a
							class="text-line caption1 hover-underline"
							href="/privacy-policy">Kebijakan Privasi</a
						><span class="text-line caption1">|</span><a
							class="text-line caption1 hover-underline"
							href="/cookie-policy">Kebijakan Cookie</a
						><span class="text-line caption1">|</span><a
							class="text-line caption1 hover-underline"
							href="/sitemap.xml">Sitemap</a
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
