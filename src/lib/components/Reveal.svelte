<script lang="ts">
	import type { Snippet } from 'svelte';
	import { onMount } from 'svelte';

	let {
		children,
		class: className = '',
		delay = 0
	}: {
		children: Snippet;
		class?: string;
		delay?: number;
	} = $props();

	let visible = $state(false);
	let el: HTMLElement | undefined = $state();

	onMount(() => {
		if (!el) return;

		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			visible = true;
			return;
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					visible = true;
					observer.disconnect();
				}
			},
			{ threshold: 0.12, rootMargin: '0px 0px -48px 0px' }
		);

		observer.observe(el);
		return () => observer.disconnect();
	});
</script>

<div
	bind:this={el}
	class="reveal {className}"
	class:reveal-visible={visible}
	style:--reveal-delay="{delay}ms"
>
	{@render children()}
</div>
