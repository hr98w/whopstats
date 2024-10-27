'use client';

import { useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { useUserInfo } from '@/hooks/useUserInfo';
import '../../styles/home-page.css';
import Header from '@/components/home/header/header';
import { HeroSection } from '@/components/home/hero-section/hero-section';
import { Pricing } from '@/components/home/pricing/pricing';
import ExampleTable from '../stats/example-table';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import FlickeringGrid from '@/components/ui/flickering-grid';
import SparklesText from '@/components/ui/sparkles-text';
import { FeaturesSection } from '@/components/home/feature/feature';
import { Separator } from '@/components/ui/separator';
import { FAQ } from '@/components/home/faq/faq';

export function HomePage() {
  const supabase = createClient();
  const { user } = useUserInfo(supabase);
  const [country, setCountry] = useState('US');

  return (
    <>
      <div>
        <FlickeringGrid
          className="fixed inset-0 z-[0]"
          squareSize={4}
          gridGap={10}
          color="#6B7280"
          maxOpacity={0.2}
          flickerChance={0.1}
        />

        <div className="relative">
          <Header user={user} />

          <HeroSection />
          <div className="flex justify-center pt-12 pb-72">
            <div className="flex space-x-4">
              <Button variant={'default'} asChild={true}>
                <Link href={'/stats'}>Explore WhopStats</Link>
              </Button>

              <Button variant={'link'} asChild={true}>
                <Link href={'/#example-table'} className="text-default-600">
                  Start Previewing {'->'}
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <Separator className={'section-divider'} />

        <div id="example-table" className="pb-36">
          <div className="flex flex-col items-center p-16">
            <h2>
              <SparklesText text="Previewing" className="text-center text-4xl text-default-600" />
            </h2>
            <p className="text-large text-center pt-4 text-default-600">
              This is an example of how the statistics will appear
            </p>
            <p className="text-large text-center text-default-600">
              WhopStats contains over 8,000 Whop products, which we update on a weekly basis
            </p>
          </div>
          <ExampleTable />
        </div>

        <Separator className={'section-divider'} />

        <div id="features" className="pb-24">
          <div className="flex flex-col items-center pt-16">
            <h2>
              <SparklesText text="Features" className="text-center text-4xl" />
            </h2>
          </div>
          <FeaturesSection />
        </div>

        <Separator className={'section-divider'} />

        <div id="pricing" className="pb-36 text-default-600">
          <div className="flex flex-col items-center p-16">
            <h2>
              <SparklesText text="Pricing" className="text-center text-4xl" />
            </h2>
            <p className="text-large text-center pt-4">
              Get full access to WhopStats by subscribing to our pricing plan
            </p>
          </div>
          <Pricing country={country} />
        </div>

        <Separator className={'section-divider'} />

        <div id="faq" className="pb-32">
          <div className="flex flex-col items-center my-8 pt-8">
            <h2>
              <SparklesText text="Frequent Asked Questions" className="text-center text-4xl" />
            </h2>
          </div>
          <FAQ />
        </div>
      </div>
    </>
  );
}
