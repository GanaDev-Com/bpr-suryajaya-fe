<script lang="ts">
	import DirekturUtama from '$lib/images/member/direktur-utama.webp';
	import Direktur from '$lib/images/member/direktur.webp';
</script>

<div class="our-team-block pt-100 pb-60 bg-white">
	<div class="container">
		<div class="heading-block">
			<div class="heading4">Pimpinan Direksi</div>
		</div>
		<div class="list-member mt-40 row row-gap-32 col-12 d-flex justify-content-center">
			<div class="col-12 col-xl-4 col-lg-4 col-md-4 col-sm-12">
				<div class="bg-img w-100">
					<img
						loading="lazy"
						class="w-100 h-100 display-block"
						src={DirekturUtama}
						alt="Direktur Utama"
					/>
				</div>
				<div class="infor text-center pt-16">
					<div class="name heading6">Komang Parma,S.E.</div>
					<div class="caption1 text-secondary">Direktur Utama</div>
				</div>
			</div>
			<div class="col-12 col-xl-4 col-lg-4 col-md-4 col-sm-12">
				<div class="bg-img w-100">
					<img
						loading="lazy"
						class="w-100 h-100 display-block"
						src={Direktur}
						alt="Direktur dan Kepatuhan"
					/>
				</div>
				<div class="infor text-center pt-16">
					<div class="name heading6">Ketut Virgoyasa,S.E.</div>
					<div class="caption1 text-secondary">Direktur dan Kepatuhan</div>
				</div>
			</div>
		</div>
	</div>
</div>
