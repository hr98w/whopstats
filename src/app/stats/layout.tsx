import { ReactNode } from 'react';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

interface Props {
  children: ReactNode;
}

export default async function Layout({ children }: Props) {
  const supabase = createClient();
  const { data } = await supabase.auth.getUser();

  if (!data.user) {
    redirect('/login');
  }

  // 检查用户的订阅状态
  // const { data: subscriptionData, error } = await supabase
  //   .from('subscriptions')
  //   .select('status')
  //   .eq('user_id', data.user?.id)
  //   .single();
  // console.log(data);

  // if (error || !subscriptionData || subscriptionData.status !== 'active') {
  //   redirect('/subscribe'); // 重定向到订阅页面
  // }

  return <div className={'dark'}>{children}</div>;
}
