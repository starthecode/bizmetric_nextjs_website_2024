import { Text } from '../Headings/Text';
import { Blockquote } from './Blockquote';

const Testimonials = ({ testimonials }: any) => {
  return (
    <section className="relative mt-24 sm:mt-24 md:mt-32 xl:mt-40">
      <div className="container">
        <div className="flex flex-col justify-center text-center mb-14">
          <Text
            small={'Client Testimonials'}
            main={'Learn about Our Services from Industry Leaders'}
            classes={'font-cursive'}
          />
        </div>

        <div className="marquee">
          <div className="slide">
            <Blockquote testimonials={testimonials} />
            <Blockquote testimonials={testimonials} />
            <Blockquote testimonials={testimonials} />
          </div>
          {/* <div className="flex animate-marqueeLeft space-x-8">
            <Blockquote testimonials={testimonials} />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
