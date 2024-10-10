'use client';

import StatsTable from '@/components/stats/stats-table';
import Header from '@/components/home/header/header';
import { Footer } from '@/components/home/footer/footer';

import { createClient } from '@/utils/supabase/client';
import { useUserInfo } from '@/hooks/useUserInfo';

export default function App() {
  const supabase = createClient();
  const { user } = useUserInfo(supabase);
  return (
    <>
      <Header user={user} />
      <StatsTable />
    </>
  );
}
