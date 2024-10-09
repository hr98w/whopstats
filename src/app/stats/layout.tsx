import { ReactNode } from 'react';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import { checkActiveSubscription } from '@/utils/subscription/check-subs';

interface Props {
  children: ReactNode;
}

export default async function Layout({ children }: Props) {
  const supabase = createClient();
  const { data } = await supabase.auth.getUser();
  if (!data.user) {
    redirect('/login');
  }

  const isActiveSubscriber = await checkActiveSubscription();
  if (!isActiveSubscriber) {
    redirect('/#pricing');
  }

  return <div>{children}</div>;
}
