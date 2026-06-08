import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const email = (data.get('email') as string)?.trim().toLowerCase();

		if (!email || !EMAIL_RE.test(email)) {
			return fail(400, { error: 'Please enter a valid email address.', email: email ?? '' });
		}

		// TODO: persist to your waitlist provider (Supabase, Resend, etc.)
		console.log('[waitlist] new signup:', email);

		return { success: true, email };
	}
} satisfies Actions;
