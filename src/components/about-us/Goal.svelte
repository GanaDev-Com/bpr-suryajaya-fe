<script lang="ts">
	import { onMount } from 'svelte';
	import Chart from 'chart.js/auto';

	let chart2018: Chart | null = null;
	let chart2019: Chart | null = null;
	let targetId2018: HTMLCanvasElement | null = null;
	let targetId2019: HTMLCanvasElement | null = null;

	// Menunggu render di klien
	onMount(() => {
		if (targetId2018) {
			const data2018 = [
				{ year: 'Rekening Tabungan', count: 9501 },
				{ year: 'Rekening Deposito', count: 588 },
				{ year: 'Rekening Kredit', count: 2204 }
			];

			chart2018 = new Chart(targetId2018, {
				type: 'bar',
				data: {
					labels: data2018.map((row) => row.year),
					datasets: [
						{
							label: 'Capaian Tahun 2018',
							data: data2018.map((row) => row.count),
							backgroundColor: ['#4CAF50', '#2196F3', '#FF9800'],
							borderColor: ['#388E3C', '#1976D2', '#F57C00'],
							borderWidth: 1
						}
					]
				},
				options: {
					responsive: true,
					scales: {
						y: {
							beginAtZero: true
						}
					},
					plugins: {
						legend: {
							display: false
						},
						tooltip: {
							enabled: false
						}
					}
				}
			});
		}

		if (targetId2019) {
			const data2019 = [
				{ year: 'Rekening Tabungan', count: 1187 },
				{ year: 'Rekening Deposito', count: 748 },
				{ year: 'Rekening Kredit', count: 2411 }
			];

			chart2019 = new Chart(targetId2019, {
				type: 'bar',
				data: {
					labels: data2019.map((row) => row.year),
					datasets: [
						{
							label: 'Capaian Tahun 2019',
							data: data2019.map((row) => row.count),
							backgroundColor: ['#4CAF50', '#2196F3', '#FF9800'],
							borderColor: ['#388E3C', '#1976D2', '#F57C00'],
							borderWidth: 1
						}
					]
				},
				options: {
					responsive: true,
					scales: {
						y: {
							beginAtZero: true
						}
					},
					plugins: {
						legend: {
							display: false
						},
						tooltip: {
							enabled: false
						}
					}
				}
			});
		}

		// Cleanup chart on component destroy
		return () => {
			chart2018?.destroy();
			chart2019?.destroy();
		};
	});
</script>

<div class="service-block mt-100 pt-100 pb-100 bg-surface">
	<div class="container">
		<div class="heading-block text-center">
			<div class="heading4">Capaian Kami</div>
			<div class="body3 text-secondary mt-12">
				Memberikan Layanan Keuangan yang Semakin Profesional dan #SemakinDekatdiHati Anda.
			</div>
		</div>
		<div class="list-service row mt-32 row-gap-24">
			<div class="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-6">
				<div class="service-item hover-box-shadow bora-8 pt-32 pb-32 pl-28 pr-28 bg-white">
					<a
						class="service-item-main flex-column gap-16"
						href="service-cryptocurrency-trading.html"
					>
						<div class="heading flex-item-center gap-16">
							<i class="icon-coin-hand text-blue fs-42"></i>
							<div class="heading6 hover-text-blue">ASET Tahun 2018</div>
						</div>
						<div class="body3 text-secondary">Grafik perkembangan capaian ASET Tahun 2018</div>
						<div style="width: 100%;"><canvas bind:this={targetId2018}></canvas></div>
					</a>
				</div>
			</div>
			<div class="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-6">
				<div class="service-item hover-box-shadow bora-8 pt-32 pb-32 pl-28 pr-28 bg-white">
					<a class="service-item-main flex-column gap-16" href="service-investment-advice.html">
						<div class="heading flex-item-center gap-16">
							<i class="icon-coin-pig text-blue fs-42"></i>
							<div class="heading6 hover-text-blue">ASET Tahun 2019</div>
						</div>
						<div class="body3 text-secondary">Grafik perkembangan capaian ASET Tahun 2019</div>
						<div style="width: 100%;"><canvas bind:this={targetId2019}></canvas></div>
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
