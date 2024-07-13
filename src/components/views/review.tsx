import { IUser } from "@/lib/user.data";
import Marquee from "../magicui/marquee";
import { Icons, Section } from "../ui";
import { SectionTab } from "../ui/section";
import { ReviewCard } from "../ui/reviewcard";

export default function Review({ data }: { data: IUser }) {
  const { review } = data;
  const firstRow = review.slice(0, review.length / 2);
  const secondRow = review.slice(review.length / 2);
  return (
    <Section
      id="review"
      tab={<SectionTab title="Review" icon={Icons.review} />}
    >
      <h1 className="section-heading">Testimonial</h1>
      <div className="relative my-10 flex h-full w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="my-3 gap-3 [--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>

        <Marquee reverse pauseOnHover className="gap-3 [--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black"></div>
      </div>
    </Section>
  );
}
