import { createClient } from '@/utils/supabase/server';
import { getCustomerId } from '@/utils/paddle/get-customer-id';

const LIFE_TIME_PRICE_ID = 'pri_01jcwv8mwnx9kajk9ghnf6wqqe';
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

  // handle lifetime membership
  const { data: transactions, error: transactionsError } = await supabase
    .from('transactions')
    .select('transaction_status')
    .eq('customer_id', customerId)
    .eq('price_id', LIFE_TIME_PRICE_ID)
    .eq('transaction_status', 'completed');

  if ((error || !subs || subs.length === 0) && (transactionsError || !transactions || transactions.length === 0)) {
    return false;
  }

  return true;
}
