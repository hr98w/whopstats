import {
  CustomerCreatedEvent,
  CustomerUpdatedEvent,
  EventEntity,
  EventName,
  SubscriptionCreatedEvent,
  SubscriptionUpdatedEvent,
  TransactionCompletedEvent,
} from '@paddle/paddle-node-sdk';
import { createClient } from '@/utils/supabase/server-internal';

type EventWithCustomData = EventEntity & {
  data: {
    customData?: {
      domain?: string;
    };
  };
};

export class ProcessWebhook {
  private hasDomainInCustomData(eventData: EventWithCustomData): boolean {
    return Boolean(eventData.data?.customData?.domain && eventData.data.customData.domain === 'whopstats');
  }

  async processEvent(eventData: EventEntity) {
    if (!this.hasDomainInCustomData(eventData as EventWithCustomData)) {
      console.log('Event does not have correct custom data', eventData);
      return;
    }
    switch (eventData.eventType) {
      case EventName.SubscriptionCreated:
      case EventName.SubscriptionUpdated:
        await this.updateSubscriptionData(eventData);
        break;
      case EventName.CustomerCreated:
      case EventName.CustomerUpdated:
        await this.updateCustomerData(eventData);
        break;
      case EventName.TransactionCompleted:
        await this.updateTransactionData(eventData);
        break;
    }
  }

  private async updateSubscriptionData(eventData: SubscriptionCreatedEvent | SubscriptionUpdatedEvent) {
    try {
      const response = await createClient()
        .from('subscriptions')
        .upsert({
          subscription_id: eventData.data.id,
          subscription_status: eventData.data.status,
          price_id: eventData.data.items[0].price?.id ?? '',
          product_id: eventData.data.items[0].price?.productId ?? '',
          scheduled_change: eventData.data.scheduledChange?.effectiveAt,
          customer_id: eventData.data.customerId,
        })
        .select();
      console.log(response);
    } catch (e) {
      console.error(e);
    }
  }

  private async updateCustomerData(eventData: CustomerCreatedEvent | CustomerUpdatedEvent) {
    try {
      const response = await createClient()
        .from('customers')
        .upsert({
          customer_id: eventData.data.id,
          email: eventData.data.email,
        })
        .select();
      console.log(response);
    } catch (e) {
      console.error(e);
    }
  }

  private async updateTransactionData(eventData: TransactionCompletedEvent) {
    try {
      const response = await createClient()
        .from('transactions')
        .upsert({
          transaction_id: eventData.data.id,
          transaction_status: eventData.data.status,
          price_id: eventData.data.items[0].price?.id ?? '',
          customer_id: eventData.data.customerId,
        })
        .select();
      console.log(response);
    } catch (e) {
      console.error(e);
    }
  }
}
