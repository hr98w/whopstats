import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import { checkActiveSubscription } from '@/utils/subscription/check-subs';
import Link from 'next/link';

export async function DashboardTutorialCard() {
  const isActive = await checkActiveSubscription();
  return (
    <Card className={'bg-background/50 backdrop-blur-[24px] border-border p-6'}>
      <CardHeader className="p-0 space-y-0">
        <CardTitle className="flex justify-between items-center text-xl mb-2 font-medium">Membership</CardTitle>
      </CardHeader>

      {isActive ? (
        <CardContent className={'p-0 flex flex-col gap-6'}>
          <div className="text-base leading-6 text-secondary">
            You are subscribed Whopstats, click to explore Whop insights.
          </div>
          <div>
            <Link href={'/stats'}>
              <Button size={'sm'} variant={'outline'} className={'flex gap-2 text-sm rounded-sm border-border'}>
                Explore
                <ArrowUpRight size={16} className={'text-[#797C7C]'} />
              </Button>
            </Link>
          </div>
        </CardContent>
      ) : (
        <CardContent className={'p-0 flex flex-col gap-6'}>
          <div className="text-base leading-6 text-secondary">You are not subscribed, click to subscribe.</div>
          <div>
            <Link href={'/#pricing'}>
              <Button size={'sm'} variant={'outline'} className={'flex gap-2 text-sm rounded-sm border-border'}>
                Subscribe
                <ArrowUpRight size={16} className={'text-[#797C7C]'} />
              </Button>
            </Link>
          </div>
        </CardContent>
      )}
    </Card>
  );
}
