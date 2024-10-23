'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { createClient } from '@/utils/supabase/server';

interface FormData {
  email: string;
  password: string;
}

export async function signup(data: FormData) {
  const supabase = createClient();
  const { error } = await supabase.auth.signUp(data);

  if (error) {
    return { error: true };
  }

  // Following are auto login logic if there's no email OTP verification
  // Remove following auto login logic if you want to use email OTP verification
  const { error: signInError } = await supabase.auth.signInWithPassword(data);
  if (signInError) {
    return { error: true };
  }
  revalidatePath('/', 'layout');
  redirect('/');
}
