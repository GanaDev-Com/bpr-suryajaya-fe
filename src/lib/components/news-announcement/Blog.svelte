<script lang="ts">
	import { Calendar3, ChevronRight } from 'svelte-bootstrap-icons';
	import Blog1 from '$lib/images/blog/item1.webp';
	import Blog2 from '$lib/images/blog/item2.webp';
	import Blog3 from '$lib/images/blog/item3.webp';
</script>

<div class="blog-list mt-100 pb-60" data-sveltekit-reload>
	<div class="container">
		<div class="row row-gap-32">
			<div class="blog-item col-12 col-xl-4 col-md-6 item-filter" data-name="tab-one">
				<a class="blog-item-main" href="/news-announcement/slug-sample-data">
					<div class="bg-img w-100 overflow-hidden mb-minus-1">
						<img
							loading="lazy"
							class="w-100 h-100 display-block"
							src={Blog1}
							alt="Starting your traveling blog with Vasco"
						/>
					</div>
					<div class="infor bg-white p-24">
						<div class="caption2 pt-4 pb-4 pl-12 pr-12 bg-surface bora-40 display-inline-block">
							Makerting
						</div>
						<div class="heading6 mt-8">Starting your traveling blog with Vasco</div>
						<div class="date flex-item-center gap-16 mt-8">
							<div class="author caption2 text-secondary">
								by <span class="text-on-surface">Bangta</span>
							</div>
							<div class="item-date flex-item-center">
								<Calendar3 width="18" /><span class="ml-4 caption2">1 days ago</span>
							</div>
						</div>
					</div></a
				>
			</div>
			<div class="blog-item col-12 col-xl-4 col-md-6 item-filter" data-name="tab-one">
				<a class="blog-item-main" href="/news-announcement/slug-sample-data">
					<div class="bg-img w-100 overflow-hidden mb-minus-1">
						<img
							loading="lazy"
							class="w-100 h-100 display-block"
							src={Blog2}
							alt="How to design your site footer like we did"
						/>
					</div>
					<div class="infor bg-white p-24">
						<div class="caption2 pt-4 pb-4 pl-12 pr-12 bg-surface bora-40 display-inline-block">
							Design
						</div>
						<div class="heading6 mt-8">How to design your site footer like we did</div>
						<div class="date flex-item-center gap-16 mt-8">
							<div class="author caption2 text-secondary">
								by <span class="text-on-surface">Avitex</span>
							</div>
							<div class="item-date flex-item-center">
								<Calendar3 width="18" /><span class="ml-4 caption2">1 days ago</span>
							</div>
						</div>
					</div></a
				>
			</div>
			<div class="blog-item col-12 col-xl-4 col-md-6 item-filter" data-name="tab-one">
				<a class="blog-item-main" href="/news-announcement/slug-sample-data">
					<div class="bg-img w-100 overflow-hidden mb-minus-1">
						<img
							loading="lazy"
							class="w-100 h-100 display-block"
							src={Blog3}
							alt="How to build a loyal community online and offline?"
						/>
					</div>
					<div class="infor bg-white p-24">
						<div class="caption2 pt-4 pb-4 pl-12 pr-12 bg-surface bora-40 display-inline-block">
							Development
						</div>
						<div class="heading6 mt-8">How to build a loyal community online and offline?</div>
						<div class="date flex-item-center gap-16 mt-8">
							<div class="author caption2 text-secondary">
								by <span class="text-on-surface">MavelCorp</span>
							</div>
							<div class="item-date flex-item-center">
								<Calendar3 width="18" /><span class="ml-4 caption2">2 days ago</span>
							</div>
						</div>
					</div></a
				>
			</div>
			<div class="blog-item col-12 col-xl-4 col-md-6 item-filter" data-name="tab-one">
				<a class="blog-item-main" href="/news-announcement/slug-sample-data">
					<div class="bg-img w-100 overflow-hidden mb-minus-1">
						<img
							loading="lazy"
							class="w-100 h-100 display-block"
							src={Blog1}
							alt="How a visual artist redefines success in graphic design?"
						/>
					</div>
					<div class="infor bg-white p-24">
						<div class="caption2 pt-4 pb-4 pl-12 pr-12 bg-surface bora-40 display-inline-block">
							Makerting
						</div>
						<div class="heading6 mt-8">
							How a visual artist redefines success in graphic design?
						</div>
						<div class="date flex-item-center gap-16 mt-8">
							<div class="author caption2 text-secondary">
								by <span class="text-on-surface">Avitex</span>
							</div>
							<div class="item-date flex-item-center">
								<Calendar3 width="18" /><span class="ml-4 caption2">2 days ago</span>
							</div>
						</div>
					</div></a
				>
			</div>
			<div class="blog-item col-12 col-xl-4 col-md-6 item-filter" data-name="tab-one">
				<a class="blog-item-main" href="/news-announcement/slug-sample-data">
					<div class="bg-img w-100 overflow-hidden mb-minus-1">
						<img
							loading="lazy"
							class="w-100 h-100 display-block"
							src={Blog2}
							alt="Helping a local business reinvent itself"
						/>
					</div>
					<div class="infor bg-white p-24">
						<div class="caption2 pt-4 pb-4 pl-12 pr-12 bg-surface bora-40 display-inline-block">
							Business
						</div>
						<div class="heading6 mt-8">Helping a local business reinvent itself</div>
						<div class="date flex-item-center gap-16 mt-8">
							<div class="author caption2 text-secondary">
								by <span class="text-on-surface">BinTech</span>
							</div>
							<div class="item-date flex-item-center">
								<Calendar3 width="18" /><span class="ml-4 caption2">2 days ago</span>
							</div>
						</div>
					</div></a
				>
			</div>
			<div class="blog-item col-12 col-xl-4 col-md-6 item-filter" data-name="tab-one">
				<a class="blog-item-main" href="/news-announcement/slug-sample-data">
					<div class="bg-img w-100 overflow-hidden mb-minus-1">
						<img
							loading="lazy"
							class="w-100 h-100 display-block"
							src={Blog3}
							alt="Travelling as a way of self-discovery and progress"
						/>
					</div>
					<div class="infor bg-white p-24">
						<div class="caption2 pt-4 pb-4 pl-12 pr-12 bg-surface bora-40 display-inline-block">
							Makerting
						</div>
						<div class="heading6 mt-8">Travelling as a way of self-discovery and progress</div>
						<div class="date flex-item-center gap-16 mt-8">
							<div class="author caption2 text-secondary">
								by <span class="text-on-surface">Bangta</span>
							</div>
							<div class="item-date flex-item-center">
								<Calendar3 width="18" /><span class="ml-4 caption2">3 days ago</span>
							</div>
						</div>
					</div></a
				>
			</div>
			<div class="blog-item col-12 col-xl-4 col-md-6 item-filter" data-name="tab-one">
				<a class="blog-item-main" href="/news-announcement/slug-sample-data">
					<div class="bg-img w-100 overflow-hidden mb-minus-1">
						<img
							loading="lazy"
							class="w-100 h-100 display-block"
							src={Blog1}
							alt="Where to grow your business as a photographer"
						/>
					</div>
					<div class="infor bg-white p-24">
						<div class="caption2 pt-4 pb-4 pl-12 pr-12 bg-surface bora-40 display-inline-block">
							Development
						</div>
						<div class="heading6 mt-8">Where to grow your business as a photographer</div>
						<div class="date flex-item-center gap-16 mt-8">
							<div class="author caption2 text-secondary">
								by <span class="text-on-surface">MavelCorp</span>
							</div>
							<div class="item-date flex-item-center">
								<Calendar3 width="18" /><span class="ml-4 caption2">4 days ago</span>
							</div>
						</div>
					</div></a
				>
			</div>
			<div class="blog-item col-12 col-xl-4 col-md-6 item-filter" data-name="tab-one">
				<a class="blog-item-main" href="/news-announcement/slug-sample-data">
					<div class="bg-img w-100 overflow-hidden mb-minus-1">
						<img
							loading="lazy"
							class="w-100 h-100 display-block"
							src={Blog2}
							alt="Start a blog to reach your creative peak"
						/>
					</div>
					<div class="infor bg-white p-24">
						<div class="caption2 pt-4 pb-4 pl-12 pr-12 bg-surface bora-40 display-inline-block">
							Business
						</div>
						<div class="heading6 mt-8">Start a blog to reach your creative peak</div>
						<div class="date flex-item-center gap-16 mt-8">
							<div class="author caption2 text-secondary">
								by <span class="text-on-surface">Bangta</span>
							</div>
							<div class="item-date flex-item-center">
								<Calendar3 width="18" /><span class="ml-4 caption2">5 days ago</span>
							</div>
						</div>
					</div></a
				>
			</div>
			<div class="blog-item col-12 col-xl-4 col-md-6 item-filter" data-name="tab-one">
				<a class="blog-item-main" href="/news-announcement/slug-sample-data">
					<div class="bg-img w-100 overflow-hidden mb-minus-1">
						<img
							loading="lazy"
							class="w-100 h-100 display-block"
							src={Blog3}
							alt="How to choose the right customer "
						/>
					</div>
					<div class="infor bg-white p-24">
						<div class="caption2 pt-4 pb-4 pl-12 pr-12 bg-surface bora-40 display-inline-block">
							Design
						</div>
						<div class="heading6 mt-8">How to choose the right customer</div>
						<div class="date flex-item-center gap-16 mt-8">
							<div class="author caption2 text-secondary">
								by <span class="text-on-surface">BinTech</span>
							</div>
							<div class="item-date flex-item-center">
								<Calendar3 width="18" /><span class="ml-4 caption2">5 days ago</span>
							</div>
						</div>
					</div></a
				>
			</div>
			<div class="blog-item col-12 col-xl-4 col-md-6 item-filter hide" data-name="tab-two">
				<a class="blog-item-main" href="/news-announcement/slug-sample-data">
					<div class="bg-img w-100 overflow-hidden mb-minus-1">
						<img
							loading="lazy"
							class="w-100 h-100 display-block"
							src={Blog1}
							alt="How to choose the right customer "
						/>
					</div>
					<div class="infor bg-white p-24">
						<div class="caption2 pt-4 pb-4 pl-12 pr-12 bg-surface bora-40 display-inline-block">
							Makerting
						</div>
						<div class="heading6 mt-8">How to choose the right customer</div>
						<div class="date flex-item-center gap-16 mt-8">
							<div class="author caption2 text-secondary">
								by <span class="text-on-surface">MavelCorp</span>
							</div>
							<div class="item-date flex-item-center">
								<Calendar3 width="18" /><span class="ml-4 caption2">5 days ago</span>
							</div>
						</div>
					</div></a
				>
			</div>
			<div class="blog-item col-12 col-xl-4 col-md-6 item-filter hide" data-name="tab-two">
				<a class="blog-item-main" href="/news-announcement/slug-sample-data">
					<div class="bg-img w-100 overflow-hidden mb-minus-1">
						<img
							loading="lazy"
							class="w-100 h-100 display-block"
							src={Blog2}
							alt="Start a blog to reach your creative peak"
						/>
					</div>
					<div class="infor bg-white p-24">
						<div class="caption2 pt-4 pb-4 pl-12 pr-12 bg-surface bora-40 display-inline-block">
							Design
						</div>
						<div class="heading6 mt-8">Start a blog to reach your creative peak</div>
						<div class="date flex-item-center gap-16 mt-8">
							<div class="author caption2 text-secondary">
								by <span class="text-on-surface">Bangta</span>
							</div>
							<div class="item-date flex-item-center">
								<Calendar3 width="18" /><span class="ml-4 caption2">5 days ago</span>
							</div>
						</div>
					</div></a
				>
			</div>
			<div class="blog-item col-12 col-xl-4 col-md-6 item-filter hide" data-name="tab-two">
				<a class="blog-item-main" href="/news-announcement/slug-sample-data">
					<div class="bg-img w-100 overflow-hidden mb-minus-1">
						<img
							loading="lazy"
							class="w-100 h-100 display-block"
							src={Blog3}
							alt="Where to grow your business as a photographer"
						/>
					</div>
					<div class="infor bg-white p-24">
						<div class="caption2 pt-4 pb-4 pl-12 pr-12 bg-surface bora-40 display-inline-block">
							Development
						</div>
						<div class="heading6 mt-8">Where to grow your business as a photographer</div>
						<div class="date flex-item-center gap-16 mt-8">
							<div class="author caption2 text-secondary">
								by <span class="text-on-surface">Avitex</span>
							</div>
							<div class="item-date flex-item-center">
								<Calendar3 width="18" /><span class="ml-4 caption2">6 days ago</span>
							</div>
						</div>
					</div></a
				>
			</div>
			<div class="blog-item col-12 col-xl-4 col-md-6 item-filter hide" data-name="tab-two">
				<a class="blog-item-main" href="/news-announcement/slug-sample-data">
					<div class="bg-img w-100 overflow-hidden mb-minus-1">
						<img
							loading="lazy"
							class="w-100 h-100 display-block"
							src={Blog3}
							alt="Starting your traveling blog with Vasco"
						/>
					</div>
					<div class="infor bg-white p-24">
						<div class="caption2 pt-4 pb-4 pl-12 pr-12 bg-surface bora-40 display-inline-block">
							Makerting
						</div>
						<div class="heading6 mt-8">Starting your traveling blog with Vasco</div>
						<div class="date flex-item-center gap-16 mt-8">
							<div class="author caption2 text-secondary">
								by <span class="text-on-surface">BinTech</span>
							</div>
							<div class="item-date flex-item-center">
								<Calendar3 width="18" /><span class="ml-4 caption2">6 days ago</span>
							</div>
						</div>
					</div></a
				>
			</div>
			<div class="blog-item col-12 col-xl-4 col-md-6 item-filter hide" data-name="tab-two">
				<a class="blog-item-main" href="/news-announcement/slug-sample-data">
					<div class="bg-img w-100 overflow-hidden mb-minus-1">
						<img
							loading="lazy"
							class="w-100 h-100 display-block"
							src={Blog2}
							alt="Travelling as a way of self-discovery and progress"
						/>
					</div>
					<div class="infor bg-white p-24">
						<div class="caption2 pt-4 pb-4 pl-12 pr-12 bg-surface bora-40 display-inline-block">
							Business
						</div>
						<div class="heading6 mt-8">Travelling as a way of self-discovery and progress</div>
						<div class="date flex-item-center gap-16 mt-8">
							<div class="author caption2 text-secondary">
								by <span class="text-on-surface">MavelCorp</span>
							</div>
							<div class="item-date flex-item-center">
								<Calendar3 width="18" /><span class="ml-4 caption2">6 days ago</span>
							</div>
						</div>
					</div></a
				>
			</div>
			<div class="blog-item col-12 col-xl-4 col-md-6 item-filter hide" data-name="tab-two">
				<a class="blog-item-main" href="/news-announcement/slug-sample-data">
					<div class="bg-img w-100 overflow-hidden mb-minus-1">
						<img
							loading="lazy"
							class="w-100 h-100 display-block"
							src={Blog1}
							alt="How to build a loyal community online and offline?"
						/>
					</div>
					<div class="infor bg-white p-24">
						<div class="caption2 pt-4 pb-4 pl-12 pr-12 bg-surface bora-40 display-inline-block">
							Makerting
						</div>
						<div class="heading6 mt-8">How to build a loyal community online and offline?</div>
						<div class="date flex-item-center gap-16 mt-8">
							<div class="author caption2 text-secondary">
								by <span class="text-on-surface">Bangta</span>
							</div>
							<div class="item-date flex-item-center">
								<Calendar3 width="18" /><span class="ml-4 caption2">7 days ago</span>
							</div>
						</div>
					</div></a
				>
			</div>
			<div class="blog-item col-12 col-xl-4 col-md-6 item-filter hide" data-name="tab-two">
				<a class="blog-item-main" href="/news-announcement/slug-sample-data">
					<div class="bg-img w-100 overflow-hidden mb-minus-1">
						<img
							loading="lazy"
							class="w-100 h-100 display-block"
							src={Blog3}
							alt="Helping a local business reinvent itself"
						/>
					</div>
					<div class="infor bg-white p-24">
						<div class="caption2 pt-4 pb-4 pl-12 pr-12 bg-surface bora-40 display-inline-block">
							Development
						</div>
						<div class="heading6 mt-8">Helping a local business reinvent itself</div>
						<div class="date flex-item-center gap-16 mt-8">
							<div class="author caption2 text-secondary">
								by <span class="text-on-surface">Avitex</span>
							</div>
							<div class="item-date flex-item-center">
								<Calendar3 width="18" /><span class="ml-4 caption2">7 days ago</span>
							</div>
						</div>
					</div></a
				>
			</div>
			<div class="blog-item col-12 col-xl-4 col-md-6 item-filter hide" data-name="tab-two">
				<a class="blog-item-main" href="/news-announcement/slug-sample-data">
					<div class="bg-img w-100 overflow-hidden mb-minus-1">
						<img
							loading="lazy"
							class="w-100 h-100 display-block"
							src={Blog2}
							alt="How to design your site footer like we did"
						/>
					</div>
					<div class="infor bg-white p-24">
						<div class="caption2 pt-4 pb-4 pl-12 pr-12 bg-surface bora-40 display-inline-block">
							Business
						</div>
						<div class="heading6 mt-8">How to design your site footer like we did</div>
						<div class="date flex-item-center gap-16 mt-8">
							<div class="author caption2 text-secondary">
								by <span class="text-on-surface">BinTech</span>
							</div>
							<div class="item-date flex-item-center">
								<Calendar3 width="18" /><span class="ml-4 caption2">7 days ago</span>
							</div>
						</div>
					</div></a
				>
			</div>
			<div class="blog-item col-12 col-xl-4 col-md-6 item-filter hide" data-name="tab-two">
				<a class="blog-item-main" href="/news-announcement/slug-sample-data">
					<div class="bg-img w-100 overflow-hidden mb-minus-1">
						<img
							loading="lazy"
							class="w-100 h-100 display-block"
							src={Blog1}
							alt="How a visual artist redefines success in graphic design?"
						/>
					</div>
					<div class="infor bg-white p-24">
						<div class="caption2 pt-4 pb-4 pl-12 pr-12 bg-surface bora-40 display-inline-block">
							Design
						</div>
						<div class="heading6 mt-8">
							How a visual artist redefines success in graphic design?
						</div>
						<div class="date flex-item-center gap-16 mt-8">
							<div class="author caption2 text-secondary">
								by <span class="text-on-surface">BinTech</span>
							</div>
							<div class="item-date flex-item-center">
								<Calendar3 width="18" /><span class="ml-4 caption2">9 days ago</span>
							</div>
						</div>
					</div></a
				>
			</div>
			<div class="blog-item col-12 col-xl-4 col-md-6 item-filter hide" data-name="tab-three">
				<a class="blog-item-main" href="/news-announcement/slug-sample-data">
					<div class="bg-img w-100 overflow-hidden mb-minus-1">
						<img
							loading="lazy"
							class="w-100 h-100 display-block"
							src={Blog2}
							alt="Travelling as a way of self-discovery and progress"
						/>
					</div>
					<div class="infor bg-white p-24">
						<div class="caption2 pt-4 pb-4 pl-12 pr-12 bg-surface bora-40 display-inline-block">
							Makerting
						</div>
						<div class="heading6 mt-8">Travelling as a way of self-discovery and progress</div>
						<div class="date flex-item-center gap-16 mt-8">
							<div class="author caption2 text-secondary">
								by <span class="text-on-surface">BinTech</span>
							</div>
							<div class="item-date flex-item-center">
								<Calendar3 width="18" /><span class="ml-4 caption2">11 days ago</span>
							</div>
						</div>
					</div></a
				>
			</div>
			<div class="blog-item col-12 col-xl-4 col-md-6 item-filter hide" data-name="tab-three">
				<a class="blog-item-main" href="/news-announcement/slug-sample-data">
					<div class="bg-img w-100 overflow-hidden mb-minus-1">
						<img
							loading="lazy"
							class="w-100 h-100 display-block"
							src={Blog2}
							alt="Starting your traveling blog with Vasco"
						/>
					</div>
					<div class="infor bg-white p-24">
						<div class="caption2 pt-4 pb-4 pl-12 pr-12 bg-surface bora-40 display-inline-block">
							Design
						</div>
						<div class="heading6 mt-8">Starting your traveling blog with Vasco</div>
						<div class="date flex-item-center gap-16 mt-8">
							<div class="author caption2 text-secondary">
								by <span class="text-on-surface">MavelCorp</span>
							</div>
							<div class="item-date flex-item-center">
								<Calendar3 width="18" /><span class="ml-4 caption2">12 days ago</span>
							</div>
						</div>
					</div></a
				>
			</div>
			<div class="blog-item col-12 col-xl-4 col-md-6 item-filter hide" data-name="tab-three">
				<a class="blog-item-main" href="/news-announcement/slug-sample-data">
					<div class="bg-img w-100 overflow-hidden mb-minus-1">
						<img
							loading="lazy"
							class="w-100 h-100 display-block"
							src={Blog1}
							alt="Where to grow your business as a photographer"
						/>
					</div>
					<div class="infor bg-white p-24">
						<div class="caption2 pt-4 pb-4 pl-12 pr-12 bg-surface bora-40 display-inline-block">
							Development
						</div>
						<div class="heading6 mt-8">Where to grow your business as a photographer</div>
						<div class="date flex-item-center gap-16 mt-8">
							<div class="author caption2 text-secondary">
								by <span class="text-on-surface">Bangta</span>
							</div>
							<div class="item-date flex-item-center">
								<Calendar3 width="18" /><span class="ml-4 caption2">12 days ago</span>
							</div>
						</div>
					</div></a
				>
			</div>
			<div class="blog-item col-12 col-xl-4 col-md-6 item-filter hide" data-name="tab-three">
				<a class="blog-item-main" href="/news-announcement/slug-sample-data">
					<div class="bg-img w-100 overflow-hidden mb-minus-1">
						<img
							loading="lazy"
							class="w-100 h-100 display-block"
							src={Blog2}
							alt="How to choose the right customer "
						/>
					</div>
					<div class="infor bg-white p-24">
						<div class="caption2 pt-4 pb-4 pl-12 pr-12 bg-surface bora-40 display-inline-block">
							Makerting
						</div>
						<div class="heading6 mt-8">How to choose the right customer</div>
						<div class="date flex-item-center gap-16 mt-8">
							<div class="author caption2 text-secondary">
								by <span class="text-on-surface">Avitex</span>
							</div>
							<div class="item-date flex-item-center">
								<Calendar3 width="18" /><span class="ml-4 caption2">12 days ago</span>
							</div>
						</div>
					</div></a
				>
			</div>
			<div class="blog-item col-12 col-xl-4 col-md-6 item-filter hide" data-name="tab-three">
				<a class="blog-item-main" href="/news-announcement/slug-sample-data">
					<div class="bg-img w-100 overflow-hidden mb-minus-1">
						<img
							loading="lazy"
							class="w-100 h-100 display-block"
							src={Blog1}
							alt="Start a blog to reach your creative peak"
						/>
					</div>
					<div class="infor bg-white p-24">
						<div class="caption2 pt-4 pb-4 pl-12 pr-12 bg-surface bora-40 display-inline-block">
							Business
						</div>
						<div class="heading6 mt-8">Start a blog to reach your creative peak</div>
						<div class="date flex-item-center gap-16 mt-8">
							<div class="author caption2 text-secondary">
								by <span class="text-on-surface">BinTech</span>
							</div>
							<div class="item-date flex-item-center">
								<Calendar3 width="18" /><span class="ml-4 caption2">13 days ago</span>
							</div>
						</div>
					</div></a
				>
			</div>
			<div class="blog-item col-12 col-xl-4 col-md-6 item-filter hide" data-name="tab-three">
				<a class="blog-item-main" href="/news-announcement/slug-sample-data">
					<div class="bg-img w-100 overflow-hidden mb-minus-1">
						<img
							loading="lazy"
							class="w-100 h-100 display-block"
							src={Blog1}
							alt="How to design your site footer like we did"
						/>
					</div>
					<div class="infor bg-white p-24">
						<div class="caption2 pt-4 pb-4 pl-12 pr-12 bg-surface bora-40 display-inline-block">
							Makerting
						</div>
						<div class="heading6 mt-8">How to design your site footer like we did</div>
						<div class="date flex-item-center gap-16 mt-8">
							<div class="author caption2 text-secondary">
								by <span class="text-on-surface">MavelCorp</span>
							</div>
							<div class="item-date flex-item-center">
								<Calendar3 width="18" /><span class="ml-4 caption2">13 days ago</span>
							</div>
						</div>
					</div></a
				>
			</div>
			<div class="blog-item col-12 col-xl-4 col-md-6 item-filter hide" data-name="tab-three">
				<a class="blog-item-main" href="/news-announcement/slug-sample-data">
					<div class="bg-img w-100 overflow-hidden mb-minus-1">
						<img
							loading="lazy"
							class="w-100 h-100 display-block"
							src={Blog3}
							alt="How to build a loyal community online and offline?"
						/>
					</div>
					<div class="infor bg-white p-24">
						<div class="caption2 pt-4 pb-4 pl-12 pr-12 bg-surface bora-40 display-inline-block">
							Development
						</div>
						<div class="heading6 mt-8">How to build a loyal community online and offline?</div>
						<div class="date flex-item-center gap-16 mt-8">
							<div class="author caption2 text-secondary">
								by <span class="text-on-surface">BinTech</span>
							</div>
							<div class="item-date flex-item-center">
								<Calendar3 width="18" /><span class="ml-4 caption2">14 days ago</span>
							</div>
						</div>
					</div></a
				>
			</div>
			<div class="blog-item col-12 col-xl-4 col-md-6 item-filter hide" data-name="tab-three">
				<a class="blog-item-main" href="/news-announcement/slug-sample-data">
					<div class="bg-img w-100 overflow-hidden mb-minus-1">
						<img
							loading="lazy"
							class="w-100 h-100 display-block"
							src={Blog2}
							alt="Helping a local business reinvent itself"
						/>
					</div>
					<div class="infor bg-white p-24">
						<div class="caption2 pt-4 pb-4 pl-12 pr-12 bg-surface bora-40 display-inline-block">
							Business
						</div>
						<div class="heading6 mt-8">Helping a local business reinvent itself</div>
						<div class="date flex-item-center gap-16 mt-8">
							<div class="author caption2 text-secondary">
								by <span class="text-on-surface">Avitex</span>
							</div>
							<div class="item-date flex-item-center">
								<Calendar3 width="18" /><span class="ml-4 caption2">15 days ago</span>
							</div>
						</div>
					</div></a
				>
			</div>
			<div class="blog-item col-12 col-xl-4 col-md-6 item-filter hide" data-name="tab-three">
				<a class="blog-item-main" href="/news-announcement/slug-sample-data">
					<div class="bg-img w-100 overflow-hidden mb-minus-1">
						<img
							loading="lazy"
							class="w-100 h-100 display-block"
							src={Blog1}
							alt="How a visual artist redefines success in graphic design?"
						/>
					</div>
					<div class="infor bg-white p-24">
						<div class="caption2 pt-4 pb-4 pl-12 pr-12 bg-surface bora-40 display-inline-block">
							Design
						</div>
						<div class="heading6 mt-8">
							How a visual artist redefines success in graphic design?
						</div>
						<div class="date flex-item-center gap-16 mt-8">
							<div class="author caption2 text-secondary">
								by <span class="text-on-surface">Bangta</span>
							</div>
							<div class="item-date flex-item-center">
								<Calendar3 width="18" /><span class="ml-4 caption2">18 days ago</span>
							</div>
						</div>
					</div></a
				>
			</div>
			<div class="list-nav flex-center gap-8 mt-40 col-12">
				<div
					class="nav-item bora-4 bg-surface text-button w-40 h-40 flex-center border-line-1px active"
					data-name="tab-one"
				>
					1
				</div>
				<div
					class="nav-item bora-4 bg-surface text-button w-40 h-40 flex-center border-line-1px"
					data-name="tab-two"
				>
					2
				</div>
				<div
					class="nav-item bora-4 bg-surface text-button w-40 h-40 flex-center border-line-1px"
					data-name="tab-three"
				>
					3
				</div>
			</div>
		</div>
	</div>
</div>
