<script lang="ts">
	import './layout.css';
	import { resolve } from '$app/paths';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
	<link rel="icon" type="image/png" sizes="48x48" href="/favicon-48.png" />
	<link rel="icon" type="image/png" href="/favicon.png" />
	<link rel="apple-touch-icon" sizes="192x192" href="/favicon-192.png" />
</svelte:head>

<header class="sticky top-0 z-50 border-b-2 border-fish-ink bg-fish-red">
	<div class="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
		<a href={resolve('/')} class="flex items-center gap-3">
			<img
				src="/images/fishedex-icon.png"
				alt=""
				class="pixel-img size-10 md:size-11"
				width="44"
				height="44"
			/>
			<span class="font-pokemon text-base tracking-wide text-white italic uppercase md:text-lg">
				Fishédex
			</span>
		</a>
		<a
			href="#waitlist"
			class="font-pokemon hidden border-2 border-fish-ink bg-white px-4 py-1.5 text-xs tracking-wider text-fish-ink uppercase transition-colors hover:bg-fish-bg md:inline-block"
		>
			Join waitlist
		</a>
	</div>
</header>

<main>
	{@render children()}
</main>
