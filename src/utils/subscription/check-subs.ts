import { createClient } from '@/utils/supabase/server';
import { getCustomerId } from '@/utils/paddle/get-customer-id';

export async function checkActiveSubscription(): Promise<boolean> {
  const supabase = createClient();
  const customerId = await getCustomerId();

  if (!customerId) {
    return false;
  }

  const { data: subs, error } = await supabase
    .from('subscriptions')
    .select('subscription_status')
    .eq('customer_id', customerId)
    .eq('subscription_status', 'active');

  if (error || !subs || subs.length === 0) {
    return false;
  }

  return true;
}
