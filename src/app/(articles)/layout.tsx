'use client';
import { ReactNode } from 'react';
import { createClient } from '@/utils/supabase/client';
import { useUserInfo } from '@/hooks/useUserInfo';
import Header from '@/components/home/header/header';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  const supabase = createClient();
  const { user } = useUserInfo(supabase);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header user={user} />
      <main style={{ flex: 1 }} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12">
        {children}
      </main>
    </div>
  );
}
