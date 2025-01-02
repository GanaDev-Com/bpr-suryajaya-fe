<script lang="ts">
	import { Telephone, Download } from 'svelte-bootstrap-icons';
</script>

<div class="bottom-slider-three mt-100">
	<div class="container">
		<div class="row row-gap-32 column-reverse-xl">
			<div class="col-12 col-xl-6 flex-columns-between row-gap-12 pr-40">
				<div class="heading4">Berbagai Produk Kredit dengan Bunga Terbaik</div>
				<div class="body3 text-secondary text-justify pb-100">
					Nikmati penawaran bunga kredit terbaik bulan ini di BPR Suryajaya Kubutambahan. Kami
					menawarkan berbagai solusi kredit yang fleksibel dan terjangkau, disesuaikan dengan
					kebutuhan pribadi atau usaha Anda. Dengan proses pengajuan yang mudah dan cepat, kami siap
					membantu Anda mewujudkan berbagai impian finansial. Segera ajukan kredit Anda dan rasakan
					kemudahan dalam setiap langkah perencanaan keuangan bersama kami!
					<div class="button-block pt-24">
						<a
							target="_blank"
							rel="noopener noreferrer"
							class="button-share hover-button-black text-white bg-blue text-button display-inline-block pt-12 pb-12 pl-36 pr-36 bora-48"
							href="https://wa.me/6282339222539?text=Halo%20BPR%20Suryajaya%20Kubutambahan,%20Saya%20ingin%20berdiskusi%20terkait%20dengan%20produk%20yang%20ditawarkan"
							><Telephone width="16" /> Hubungi Via WhatsApp</a
						>
						<a
							href="/assets/images/product/kredit.jpeg"
							download="Brosur Kredit BPR Suryajaya Kubutambahan.jpeg"
							class="button-share hover-button-black text-white bg-blue text-button display-inline-block pt-12 pb-12 pl-36 pr-36 bora-48"
						>
							<Download width="16" /> Unduh Brosur
						</a>
					</div>
				</div>
			</div>
			<div class="col-12 col-xl-6">
				<div class="bg-img w-100 overflow-hidden bora-20">
					<img
						loading="lazy"
						class="w-100 h-100 hover-scale display-block"
						src="/assets/images/product/kredit.jpg"
						alt="Promo Kredit"
					/>
				</div>
			</div>
		</div>
	</div>
</div>
