<script lang="ts">
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';

	let activePage = derived(page, ($page) => $page.data.props.active || null);
</script>

<div id="header">
	<div class="header-menu style-one bg-white">
		<div class="container flex-between h-80">
			<a class="menu-left-block" href="/">
				<img class="menu-logo display-block" src="assets/images/logo-default.png" alt="logo" />
			</a>
			<div class="menu-center-block h-100">
				<ul class="menu-nav flex-item-center h-100">
					<li class="nav-item h-100 flex-center home {$activePage == 'about-us' ? 'active' : ''}">
						<a class="nav-link" href="/about-us">Kenali Lebih Dekat</a>
					</li>
					<li class="nav-item h-100 flex-center about">
						<a class="nav-link" href="#!">Produk Kami <i class="ph ph-caret-down fs-14"></i></a>
						<ul class="sub-nav hidden">
							<li class="sub-nav-item">
								<a class="sub-nav-link" href="#!">Kredit</a>
							</li>
							<li class="sub-nav-item">
								<a class="sub-nav-link" href="#!">Tabungan</a>
							</li>
							<li class="sub-nav-item">
								<a class="sub-nav-link" href="#!">Deposito</a>
							</li>
						</ul>
					</li>
					<li class="nav-item h-100 flex-center case">
						<a class="nav-link" href="#!"
							>Laporan dan Publikasi<i class="ph ph-caret-down fs-14"></i></a
						>
						<ul class="sub-nav hidden">
							<li class="sub-nav-item">
								<a class="sub-nav-link" href="#!">Laporan Tahunan</a>
							</li>
							<li class="sub-nav-item">
								<a class="sub-nav-link" href="#!">Laporan Tata Kelola</a>
							</li>
							<li class="sub-nav-item">
								<a class="sub-nav-link" href="#!">Laporan Publikasi</a>
							</li>
						</ul>
					</li>
					<li class="nav-item h-100 flex-center pages">
						<a class="nav-link" href="#!">Bantuan</a>
					</li>
				</ul>
			</div>
			<div class="menu-right-block flex-item-center">
				<div class="language-switch">
					<button id="switch-id" class="active">ID</button>
					<button id="switch-en">EN</button>
				</div>
				<div class="menu-humburger display-none pointer">
					<i class="ph-bold ph-list display-block"></i>
				</div>
			</div>
		</div>
		<div id="menu-mobile-block">
			<div class="menu-mobile-main">
				<div class="container">
					<ul class="menu-nav-mobile h-100 pt-4 pb-4">
						<li class="nav-item-mobile h-100 flex-column gap-8 pt-8 pb-8 pl-12 pr-12 pointer home">
							<a class="fs-14 nav-link-mobile" href="/about-us"
								>Kenali Lebih Dekat <i class="ph-fill ph-caret-down fs-12"></i></a
							>
						</li>
						<li class="nav-item-mobile h-100 flex-column gap-8 pt-4 pb-8 pl-12 pr-12 pointer about">
							<a class="fs-14 nav-link-mobile" href="#!"
								>Produk Kami<i class="ph-fill ph-caret-down fs-12"></i></a
							>
							<ul class="sub-nav-mobile">
								<li class="sub-nav-item pl-12 pr-12 pt-8 pb-8">
									<a class="sub-nav-link fs-14" href="#!">Kredit</a>
								</li>
								<li class="sub-nav-item pl-12 pr-12 pt-8 pb-8">
									<a class="sub-nav-link fs-14" href="#!">Tabungan</a>
								</li>
								<li class="sub-nav-item pl-12 pr-12 pt-8 pb-8">
									<a class="sub-nav-link fs-14" href="#!">Deposito</a>
								</li>
							</ul>
						</li>
						<li
							class="nav-item-mobile h-100 flex-column gap-8 pt-4 pb-8 pl-12 pr-12 pointer services"
						>
							<a class="fs-14 nav-link-mobile" href="#!"
								>Laporan dan Publikasi<i class="ph-fill ph-caret-down fs-12"></i></a
							>
							<ul class="sub-nav-mobile">
								<li class="sub-nav-item pl-12 pr-12 pt-8 pb-8">
									<a class="sub-nav-link fs-14" href="#!">Laporan Tahunan</a>
								</li>
								<li class="sub-nav-item pl-12 pr-12 pt-8 pb-8">
									<a class="sub-nav-link fs-14" href="#!">Laporan Tata Kelola</a>
								</li>
								<li class="sub-nav-item pl-12 pr-12 pt-8 pb-8">
									<a class="sub-nav-link fs-14" href="#!">Laporan Publikasi</a>
								</li>
							</ul>
						</li>
						<li class="nav-item-mobile h-100 flex-column gap-8 pt-4 pb-8 pl-12 pr-12 pointer case">
							<a class="fs-14 nav-link-mobile" href="#!">Bantuan</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>
