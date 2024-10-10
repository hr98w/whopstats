'use client';
import { ReactNode } from 'react';
import { createClient } from '@/utils/supabase/client';
import { useUserInfo } from '@/hooks/useUserInfo';
import Header from '@/components/home/header/header';
import { Footer } from '@/components/home/footer/footer';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  const supabase = createClient();
  const { user } = useUserInfo(supabase);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header user={user} />
      <main style={{ flex: 1 }}>{children}</main>
      <Footer />
    </div>
  );
}
