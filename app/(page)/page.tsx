import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import events from "@/lib/constants";


const Page = () => {
  return (
    <section className="text-white text-center">
      <h1>The Hub for Every DEV event you can't miss</h1>
      <p className="mt-5">
        Hackathons, Meetups and Conferences all in one place
      </p>
      <ExploreBtn />
      <div className="mt-20 space-y-7">
        <h3>Featured events</h3>
        <ul className="events list-none text-start">
          {events.map((event) => (
            <li key={event.title}>
              <EventCard {...event} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Page;
