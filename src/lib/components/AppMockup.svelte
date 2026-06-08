<script lang="ts">
	interface Props {
		src: string;
		alt: string;
		class?: string;
		size?: 'md' | 'lg';
	}

	let { src, alt, class: className = '', size = 'lg' }: Props = $props();

	const sizes = {
		md: 'max-h-[320px] sm:max-h-[380px] md:max-h-[440px]',
		lg: 'max-h-[300px] sm:max-h-[380px] md:max-h-[460px] lg:max-h-[500px]'
	};
</script>

<img
	{src}
	{alt}
	class="app-mockup h-auto w-auto max-w-full {sizes[size]} {className}"
	loading="lazy"
	decoding="async"
	draggable="false"
/>

<style>
	.app-mockup {
		filter: drop-shadow(0 16px 32px rgb(31 33 41 / 0.12));
	}
</style>
