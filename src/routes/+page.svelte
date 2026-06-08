<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import Features from '$lib/components/Features.svelte';
	import WaitlistForm from '$lib/components/WaitlistForm.svelte';
	import Reveal from '$lib/components/Reveal.svelte';
	import type { ActionData } from './$types';

	let { form }: { form: ActionData } = $props();
</script>

<svelte:head>
	<title>Fishédex — Your Pokédex for fishing</title>
	<meta
		name="description"
		content="Fishédex is a retro pixel fishing journal for iOS. Log catches, map your spots, and build your collection. Join the waitlist."
	/>
</svelte:head>

<Hero />
<Features />
<WaitlistForm {form} />

<footer class="border-t-2 border-fish-ink/10 bg-fish-bg px-6 py-8">
	<Reveal
		class="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left"
	>
		<div class="flex items-center gap-3">
			<img
				src="/images/fishedex-icon.png"
				alt=""
				class="pixel-img size-8"
				width="32"
				height="32"
			/>
			<span class="font-pokemon text-xs tracking-wider text-fish-ink uppercase">Fishédex</span>
		</div>
		<div class="flex flex-col gap-1 text-xs text-fish-muted">
			<p>
				Built by
				<a
					href="https://www.linkedin.com/in/owenyang2002/"
					target="_blank"
					rel="noopener noreferrer"
					class="text-fish-ink underline decoration-fish-ink/30 underline-offset-2 transition-colors hover:text-fish-red hover:decoration-fish-red"
				>
					Owen
				</a>
			</p>
			<p>© {new Date().getFullYear()} Fishédex. Catch 'em all.</p>
		</div>
	</Reveal>
</footer>
