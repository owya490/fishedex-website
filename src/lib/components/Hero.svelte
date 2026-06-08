<script lang="ts">
	import AppMockup from '$lib/components/AppMockup.svelte';
</script>

<section class="relative overflow-hidden bg-white px-6 pt-14 pb-20 md:pt-20 md:pb-28">
	<div
		class="pointer-events-none absolute -top-16 right-0 h-[560px] w-[560px] rounded-full bg-fish-bg md:-right-32 lg:h-[640px] lg:w-[640px]"
		aria-hidden="true"
	></div>
	<div
		class="pointer-events-none absolute bottom-0 left-0 h-64 w-64 -translate-x-1/3 rounded-full bg-fish-track/40"
		aria-hidden="true"
	></div>

	<div class="relative mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1fr_1.15fr] md:gap-6 lg:gap-10">
		<div class="order-2 text-center md:order-1 md:text-left">
			<div class="mb-5 flex items-center justify-center gap-2.5 md:justify-start md:gap-3">
				<img
					src="/images/fishedex-icon.png"
					alt=""
					class="pixel-img size-8 shrink-0 md:size-9"
					width="36"
					height="36"
				/>
				<p class="font-pokemon text-xs tracking-widest text-fish-red uppercase md:text-sm">
					Coming soon to iOS
				</p>
			</div>

			<h1
				class="font-pokemon mb-5 text-2xl leading-tight tracking-wide text-fish-ink uppercase md:text-4xl lg:text-[2.75rem] lg:leading-[1.1]"
			>
				Cast off on your<br class="hidden sm:block" />
				Fishédex journey
			</h1>
			<p class="mx-auto mb-8 max-w-md text-base leading-relaxed text-fish-muted md:mx-0 md:text-lg">
				Your Pokédex for fishing. Catch 'em all.
			</p>
			<a
				href="#waitlist"
				class="font-pokemon inline-block border-2 border-fish-ink bg-fish-red px-8 py-3 text-sm tracking-wider text-white uppercase transition-colors hover:bg-fish-red-dark"
			>
				Join the waitlist
			</a>
		</div>

		<div class="order-1 flex justify-center md:order-2 md:justify-end md:overflow-visible">
			<AppMockup
				src="/images/mockup-landing-left.png"
				alt="Fishédex app on iPhone — cast off on your fishing journey"
				size="lg"
				class="translate-x-2 md:translate-x-6 lg:translate-x-10"
			/>
		</div>
	</div>
</section>
