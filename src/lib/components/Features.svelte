<script lang="ts">
	import AppMockup from '$lib/components/AppMockup.svelte';

	const showcases = [
		{
			src: '/images/mockup-dex-portrait.png',
			alt: 'Fishédex species list and detail view',
			title: 'Build your dex',
			description:
				'Browse every species in the Australian Fishédex. Track what you\'ve discovered, sort by number or name, and unlock pixel art as you catch \'em all.',
			accent: 'text-fish-blue'
		},
		{
			src: '/images/mockup-map-portrait.png',
			alt: 'Fishédex map with local fishing spots',
			title: 'Map your catches',
			description:
				'See weather, tides, and moon phase at a glance — then drop pins on your favourite spots and revisit them whenever conditions look right.',
			accent: 'text-fish-ocean'
		}
	];
</script>

<section class="border-t border-fish-track bg-fish-bg px-6 py-20 md:py-28">
	<div class="mx-auto max-w-6xl">
		<div class="mb-16 text-center md:mb-20">
			<h2 class="font-pokemon mb-3 text-xl tracking-wide text-fish-ink uppercase md:text-2xl">
				Everything you need
			</h2>
			<p class="text-fish-muted">A fishing journal with soul — retro vibes, modern tools.</p>
		</div>

		<div class="space-y-20 md:space-y-24">
			{#each showcases as showcase, i (showcase.title)}
				<div
					class="grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16 {i % 2 === 1
						? 'md:[&>*:first-child]:order-2'
						: ''}"
				>
					<div class="flex justify-center">
						<AppMockup src={showcase.src} alt={showcase.alt} size="md" />
					</div>

					<div class="text-center md:text-left">
						<span
							class="font-pokemon mb-3 inline-block text-xs tracking-widest uppercase {showcase.accent}"
						>
							0{i + 1}
						</span>
						<h3 class="font-pokemon mb-4 text-lg tracking-wide text-fish-ink uppercase md:text-xl">
							{showcase.title}
						</h3>
						<p class="text-base leading-relaxed text-fish-muted">
							{showcase.description}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
