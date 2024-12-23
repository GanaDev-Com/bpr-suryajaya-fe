<script lang="ts">
	export let appName: string;

	const date = new Date();
	const year = date.getFullYear();
</script>

<div id="footer">
	<div class="style-one">
		<div class="footer-block bg-dark pt-60">
			<div class="container">
				<div class="row flex-between pb-40">
					<div class="col-3">
						<div class="footer-company-infor flex-columns-between gap-20">
							<img class="footer-logo" src="assets/images/logo-white.png" alt="Logo" />
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
								<div class="item-heading text-button-small text-white">Quick Links</div>
								<ul class="list-nav mt-4">
									<li class="mt-12">
										<a class="caption1 text-line hover-underline" href="about-one.html">About us</a>
									</li>
									<li class="mt-12">
										<a class="caption1 text-line hover-underline" href="service-one.html"
											>Services</a
										>
									</li>
									<li class="mt-12">
										<a class="caption1 text-line hover-underline" href="case-studies-one.html"
											>Case Studies</a
										>
									</li>
									<li class="mt-12">
										<a class="caption1 text-line hover-underline" href="contact-two.html">Contact</a
										>
									</li>
								</ul>
							</div>
							<div class="footer-nav-item">
								<div class="item-heading text-button-small text-white">Pages</div>
								<ul class="list-nav mt-4">
									<li class="mt-12">
										<a class="caption1 text-line hover-underline" href="faqs.html">FAQs</a>
									</li>
									<li class="mt-12">
										<a class="caption1 text-line hover-underline" href="pricing.html">Pricing</a>
									</li>
									<li class="mt-12">
										<a class="caption1 text-line hover-underline" href="partners.html">Partners</a>
									</li>
									<li class="mt-12">
										<a class="caption1 text-line hover-underline" href="contact-two.html"
											>Support Center</a
										>
									</li>
								</ul>
							</div>
							<div class="footer-nav-item">
								<div class="item-heading text-button-small text-white">Blog</div>
								<ul class="list-nav mt-4">
									<li class="mt-12">
										<a class="caption1 text-line hover-underline" href="blog-list-one.html"
											>Blog List</a
										>
									</li>
									<li class="mt-12">
										<a class="caption1 text-line hover-underline" href="blog-grid.html">Blog Grid</a
										>
									</li>
									<li class="mt-12">
										<a class="caption1 text-line hover-underline" href="blog-masonry.html"
											>Masonry</a
										>
									</li>
									<li class="mt-12">
										<a class="caption1 text-line hover-underline" href="blog-detail-one.html"
											>Blog Detail</a
										>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="col-3">
						<div class="company-contact">
							<div class="heading text-button-small text-white">Newsletter</div>
							<div class="send-block mt-20 flex-item-center">
								<input
									class="caption1 text-secondary"
									type="text"
									placeholder="Your email address"
								/>
								<button class="flex-center" aria-label="newsletter">
									<i class="ph ph-paper-plane-tilt text-white"></i>
								</button>
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
						<a class="text-line caption1 hover-underline" href="#!">Terms Of Services</a><span
							class="text-line caption1">|</span
						><a class="text-line caption1 hover-underline" href="#!">Privacy Policy</a><span
							class="text-line caption1">|</span
						><a class="text-line caption1 hover-underline" href="#!">Cookie Policy</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
