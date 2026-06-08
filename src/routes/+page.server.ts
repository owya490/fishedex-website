import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';
import { supabase } from '$lib/server/supabase';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const email = (data.get('email') as string)?.trim().toLowerCase();

		if (!email || !EMAIL_RE.test(email)) {
			return fail(400, { error: 'Please enter a valid email address.', email: email ?? '' });
		}

		const { error } = await supabase.from('waitlist_signups').insert({ email });

		if (error) {
			if (error.code === '23505') {
				return { success: true, email };
			}

			console.error('[waitlist] supabase insert failed:', error);
			return fail(500, {
				error: 'Something went wrong. Please try again.',
				email
			});
		}

		return { success: true, email };
	}
} satisfies Actions;
