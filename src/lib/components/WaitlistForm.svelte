<script lang="ts">
	import { enhance } from '$app/forms';
	import Reveal from '$lib/components/Reveal.svelte';
	import type { ActionData } from '../../routes/$types';

	let { form }: { form: ActionData } = $props();

	let submitting = $state(false);
</script>

<section id="waitlist" class="px-6 py-20 md:py-28">
	<div class="mx-auto max-w-xl">
		<Reveal class="border-2 border-fish-ink bg-fish-card p-8 md:p-10">
			<div class="mb-8 text-center">
				<h2 class="font-pokemon mb-3 text-xl tracking-wide text-fish-ink uppercase md:text-2xl">
					Join the waitlist
				</h2>
				<p class="text-sm leading-relaxed text-fish-muted">
					Be first to know when Fishédex launches. No spam — just one email when we're ready to
					cast off.
				</p>
			</div>

			{#if form?.success}
				<div
					class="border-2 border-fish-green bg-fish-green/10 px-4 py-6 text-center"
					role="status"
				>
					<p class="font-pokemon text-sm tracking-wide text-fish-ink uppercase">
						You're on the list!
					</p>
					<p class="mt-2 text-sm text-fish-muted">
						We'll let you know at <span class="text-fish-ink">{form.email}</span> when Fishédex is
						ready.
					</p>
				</div>
			{:else}
				<form
					method="POST"
					use:enhance={() => {
						submitting = true;
						return async ({ update }) => {
							await update();
							submitting = false;
						};
					}}
					class="space-y-4"
				>
					<div>
						<label for="email" class="font-pokemon mb-2 block text-xs tracking-wider uppercase">
							Email address
						</label>
						<input
							type="email"
							id="email"
							name="email"
							required
							autocomplete="email"
							placeholder="you@example.com"
							value={form?.email ?? ''}
							class="w-full border-2 border-fish-ink bg-white px-4 py-3 text-fish-ink placeholder:text-fish-muted/60 focus:outline-none focus:ring-2 focus:ring-fish-red/40"
						/>
						{#if form?.error}
							<p class="mt-2 text-sm text-fish-red">{form.error}</p>
						{/if}
					</div>

					<button
						type="submit"
						disabled={submitting}
						class="font-pokemon w-full border-2 border-fish-ink bg-fish-red px-6 py-3 text-sm tracking-wider text-white uppercase transition-colors hover:bg-fish-red-dark disabled:cursor-not-allowed disabled:opacity-60"
					>
						{submitting ? 'Signing up…' : 'Notify me'}
					</button>
				</form>
			{/if}
		</Reveal>
	</div>
</section>
