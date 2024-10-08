import { LineText } from './LineText';
import NumberTicker from '@/components/ui/number-ticker';

export function HeroSection() {
  return (
    <section className={'mx-auto max-w-7xl px-[32px] relative flex items-center justify-between mt-16 mb-12 pt-12'}>
      <div className={'text-center w-full '}>
        <h1 className={'text-[48px] leading-[48px] md:text-[64px] md:leading-[64px] tracking-[-1.6px] font-medium'}>
          Discover <LineText>Whop</LineText> Opportunities
          {/* <br />
          Simple pricing. */}
        </h1>
        <p className={'mt-6 text-[18px] leading-[27px] md:text-[20px] md:leading-[30px]'}>
          Get insight from successful Whop products, and start your business.
        </p>
        <p className={'mt-2 text-[18px] leading-[27px] md:text-[20px] md:leading-[30px]'}>
          Products count in our database: {<NumberTicker value={8123} />}
        </p>
      </div>
    </section>
  );
}
