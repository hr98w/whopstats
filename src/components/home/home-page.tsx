'use client';

import { useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { useUserInfo } from '@/hooks/useUserInfo';
import '../../styles/home-page.css';
import Header from '@/components/home/header/header';
import { HeroSection } from '@/components/home/hero-section/hero-section';
import { Pricing } from '@/components/home/pricing/pricing';
import { Footer } from '@/components/home/footer/footer';
import ExampleTable from '../stats/example-table';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import FlickeringGrid from '@/components/ui/flickering-grid';
import SparklesText from '@/components/ui/sparkles-text';

export function HomePage() {
  const supabase = createClient();
  const { user } = useUserInfo(supabase);
  const [country, setCountry] = useState('US');

  return (
    <>
      <FlickeringGrid
        className="fixed inset-0 z-[0]"
        squareSize={4}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.5}
        flickerChance={0.1}
      />
      <div>
        <Header user={user} />

        <HeroSection />

        <div className="flex justify-center pt-12 pb-72">
          <div className="flex space-x-4">
            <Button variant={'default'} asChild={true}>
              <Link href={'/stats'}>Explore WhopStats</Link>
            </Button>

            <Button variant={'link'} asChild={true}>
              <Link href={'/#example-table'} className="text-default-500">
                Start Previewing {'->'}
              </Link>
            </Button>
          </div>
        </div>

        <div id="example-table" className="pb-36">
          <div className="flex flex-col items-center my-8">
            <SparklesText text="Previewing" className="text-center text-4xl" />
            <p className="text-large text-center text-default-500">
              This is an example of how the statistics will appear
            </p>
            <p className="text-large text-center text-default-500">
              WhopStats contains over 8,000 Whop products, which we update on a weekly basis
            </p>
          </div>
          <ExampleTable />
        </div>

        <div id="pricing" className="pt-12 pb-36">
          <div className="flex flex-col items-center my-8">
            <SparklesText text="Pricing" className="text-center text-4xl" />
            <p className="text-large text-center text-default-500">
              Get full access to WhopStats by subscribing to our pricing plan
            </p>
          </div>
          <Pricing country={country} />
        </div>

        <Footer />
      </div>
    </>
  );
}
