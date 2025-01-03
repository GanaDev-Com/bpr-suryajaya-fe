<script lang="ts">
	import { Telephone } from 'svelte-bootstrap-icons';
	import Deposito from '$lib/images/product/deposito.webp';
</script>

<div class="bottom-slider-three mt-100">
	<div class="container">
		<div class="row row-gap-32 column-reverse-xl">
			<div class="col-12 col-xl-6 flex-columns-between row-gap-20 pr-40">
				<div class="heading4">Bunga Bersaing, Investasi Aman dan Menguntungkan</div>
				<div class="body3 text-secondary text-justify">
					Nikmati keuntungan maksimal dari produk Deposito Berjangka di <strong
						>PT. BPR Suryajaya Kubutambahan</strong
					>. Dengan bunga yang bersaing, deposito ini memberikan solusi investasi aman untuk
					kebutuhan pribadi atau usaha Anda. Pilih jangka waktu yang sesuai dan pastikan masa depan
					keuangan Anda semakin terjamin bersama kami.
				</div>

				<div class="button-block pb-100">
					<a
						target="_blank"
						rel="noopener noreferrer"
						class="button-share hover-button-black text-white bg-blue text-button display-inline-block pt-12 pb-12 pl-36 pr-36 bora-48"
						href="https://wa.me/6282339222539?text=Halo%20BPR%20Suryajaya%20Kubutambahan,%20Saya%20ingin%20berdiskusi%20terkait%20dengan%20produk%20yang%20ditawarkan"
						><Telephone width="16" /> Hubungi Via WhatsApp</a
					>
				</div>
			</div>
			<div class="col-12 col-xl-6">
				<div class="bg-img w-100 overflow-hidden bora-20">
					<img
						loading="lazy"
						class="w-100 h-100 hover-scale display-block"
						src={Deposito}
						alt="Promo Kredit"
					/>
				</div>
			</div>
		</div>
	</div>
</div>
