'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';

interface FormData {
  email: string;
  password: string;
}
export async function login(data: FormData) {
  const supabase = createClient();
  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    return { error: true };
  }

  revalidatePath('/', 'layout');
  redirect('/');
}

const getURL = () => {
  let url =
    process?.env?.NEXT_PUBLIC_SITE_URL ?? // Set this to your site URL in production env.
    process?.env?.NEXT_PUBLIC_VERCEL_URL ?? // Automatically set by Vercel.
    'http://localhost:3000/';
  // Make sure to include `https://` when not localhost.
  url = url.startsWith('http') ? url : `https://${url}`;
  // Make sure to include a trailing `/`.
  url = url.endsWith('/') ? url : `${url}/`;
  return url;
};

export async function signInWithGithub() {
  const supabase = createClient();
  const { data } = await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: {
      redirectTo: `${getURL()}auth/callback`,
    },
  });
  if (data.url) {
    redirect(data.url);
  }
}

export async function signInWithGoogle() {
  const supabase = createClient();
  const { data } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${getURL()}auth/callback`,
    },
  });
  if (data.url) {
    redirect(data.url);
  }
}

export async function loginAnonymously() {
  const supabase = createClient();
  const { error: signInError } = await supabase.auth.signInAnonymously();
  const { error: updateUserError } = await supabase.auth.updateUser({
    email: `anonymous+${Date.now().toString(36)}@example.com`,
  });

  if (signInError || updateUserError) {
    return { error: true };
  }

  revalidatePath('/', 'layout');
  redirect('/');
}
