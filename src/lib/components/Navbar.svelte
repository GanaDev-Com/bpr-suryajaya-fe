<script lang="ts">
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';
	import LogoDefault from '$lib/images/logo-default.webp';
	import { ChevronDown, List } from 'svelte-bootstrap-icons';

	let activePage = derived(page, ($page) => $page.data.props.active || null);
	let productPage = ['product-kredit', 'product-tabungan', 'product-deposito'];
	let laporanPage = ['laporan-tahunan', 'laporan-tata-kelola', 'laporan-publikasi'];
</script>

<div id="header" data-sveltekit-reload>
	<div class="header-menu style-one bg-white">
		<div class="container flex-between h-80">
			<a class="menu-left-block" href="/">
				<img loading="lazy" class="menu-logo display-block" src={LogoDefault} alt="logo" />
			</a>
			<div class="menu-center-block h-100">
				<ul class="menu-nav flex-item-center h-100">
					<li class="nav-item h-100 flex-center home {$activePage == 'about-us' ? 'active' : ''}">
						<a class="nav-link" href="/about-us">Kenali Lebih Dekat</a>
					</li>
					<li
						class="nav-item h-100 flex-center about {productPage.includes($activePage)
							? 'active'
							: ''}"
					>
						<a class="nav-link" href="#!"
							>Produk Kami<ChevronDown width="12" style="padding-top:6px" /></a
						>
						<ul class="sub-nav hidden">
							<li class="sub-nav-item {$activePage == 'product-kredit' ? 'active' : ''}">
								<a class="sub-nav-link" href="/product/kredit">Kredit</a>
							</li>
							<li class="sub-nav-item {$activePage == 'product-tabungan' ? 'active' : ''}">
								<a class="sub-nav-link" href="/product/tabungan">Tabungan</a>
							</li>
							<li class="sub-nav-item {$activePage == 'product-deposito' ? 'active' : ''}">
								<a class="sub-nav-link" href="/product/deposito">Deposito</a>
							</li>
						</ul>
					</li>
					<li
						class="nav-item h-100 flex-center case {laporanPage.includes($activePage)
							? 'active'
							: ''}"
					>
						<a class="nav-link" href="#!"
							>Laporan dan Publikasi<ChevronDown width="12" style="padding-top:6px" /></a
						>
						<ul class="sub-nav hidden">
							<li class="sub-nav-item {$activePage == 'laporan-tahunan' ? 'active' : ''}">
								<a class="sub-nav-link" href="/report/tahunan">Laporan Tahunan</a>
							</li>
							<li class="sub-nav-item {$activePage == 'laporan-tata-kelola' ? 'active' : ''}">
								<a class="sub-nav-link" href="/report/tata-kelola">Laporan Tata Kelola</a>
							</li>
							<li class="sub-nav-item {$activePage == 'laporan-publikasi' ? 'active' : ''}">
								<a class="sub-nav-link" href="/report/publikasi">Laporan Publikasi</a>
							</li>
						</ul>
					</li>
					<li
						class="nav-item h-100 flex-center pages {$activePage == 'news-announcement'
							? 'active'
							: ''}"
					>
						<a class="nav-link" href="/news-announcement">Berita dan Pengumuman</a>
					</li>
					<li class="nav-item h-100 flex-center pages {$activePage == 'bantuan' ? 'active' : ''}">
						<a class="nav-link" href="/support">Bantuan</a>
					</li>
				</ul>
			</div>
			<div class="menu-right-block flex-item-center">
				<div class="language-switch">
					<button id="switch-id" class="active">ID</button>
					<button id="switch-en">EN</button>
				</div>
				<div class="menu-humburger display-none pointer">
					<List width="24" height="24" class="display-block" style="font-weight:bold;" />
				</div>
			</div>
		</div>
		<div id="menu-mobile-block">
			<div class="menu-mobile-main">
				<div class="container">
					<ul class="menu-nav-mobile h-100 pt-4 pb-4">
						<li
							class="nav-item-mobile h-100 flex-column gap-8 pt-8 pb-8 pl-12 pr-12 pointer home {$activePage ==
							'about-us'
								? 'active'
								: ''}"
						>
							<a class="fs-14 nav-link-mobile" href="/about-us">Kenali Lebih Dekat</a>
						</li>
						<li
							class="nav-item-mobile h-100 flex-column gap-8 pt-4 pb-8 pl-12 pr-12 pointer about {productPage.includes(
								$activePage
							)
								? 'active'
								: ''}"
						>
							<a class="fs-14 nav-link-mobile" href="#!"
								>Produk Kami<ChevronDown width="12" style="padding-top:6px" /></a
							>
							<ul class="sub-nav-mobile">
								<li
									class="sub-nav-item pl-12 pr-12 pt-8 pb-8 {$activePage == 'product-kredit'
										? 'active'
										: ''}"
								>
									<a class="sub-nav-link fs-14" href="/product/kredit">Kredit</a>
								</li>
								<li
									class="sub-nav-item pl-12 pr-12 pt-8 pb-8 {$activePage == 'product-tabungan'
										? 'active'
										: ''}"
								>
									<a class="sub-nav-link fs-14" href="/product/tabungan">Tabungan</a>
								</li>
								<li
									class="sub-nav-item pl-12 pr-12 pt-8 pb-8 {$activePage == 'product-deposito'
										? 'active'
										: ''}"
								>
									<a class="sub-nav-link fs-14" href="/product/deposito">Deposito</a>
								</li>
							</ul>
						</li>
						<li
							class="nav-item-mobile h-100 flex-column gap-8 pt-4 pb-8 pl-12 pr-12 pointer services {laporanPage.includes(
								$activePage
							)
								? 'active'
								: ''}"
						>
							<a class="fs-14 nav-link-mobile" href="#!"
								>Laporan dan Publikasi<ChevronDown width="12" style="padding-top:6px" /></a
							>
							<ul class="sub-nav-mobile">
								<li
									class="sub-nav-item pl-12 pr-12 pt-8 pb-8 {$activePage == 'laporan-tahunan'
										? 'active'
										: ''}"
								>
									<a class="sub-nav-link fs-14" href="/report/tahunan">Laporan Tahunan</a>
								</li>
								<li
									class="sub-nav-item pl-12 pr-12 pt-8 pb-8 {$activePage == 'laporan-tata-kelola'
										? 'active'
										: ''}"
								>
									<a class="sub-nav-link fs-14" href="/report/tata-kelola">Laporan Tata Kelola</a>
								</li>
								<li
									class="sub-nav-item pl-12 pr-12 pt-8 pb-8 {$activePage == 'laporan-publikasi'
										? 'active'
										: ''}"
								>
									<a class="sub-nav-link fs-14" href="/report/publikasi">Laporan Publikasi</a>
								</li>
							</ul>
						</li>
						<li
							class="nav-item-mobile h-100 flex-column gap-8 pt-4 pb-8 pl-12 pr-12 pointer case {$activePage ==
							'news-announcement'
								? 'active'
								: ''}"
						>
							<a class="fs-14 nav-link-mobile" href="/news-announcement">Berita dan Pengumuman</a>
						</li>
						<li
							class="nav-item-mobile h-100 flex-column gap-8 pt-4 pb-8 pl-12 pr-12 pointer case {$activePage ==
							'bantuan'
								? 'active'
								: ''}"
						>
							<a class="fs-14 nav-link-mobile" href="/support">Bantuan</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>
