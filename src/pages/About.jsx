import React from "react";
import { Hero, TeamMember } from "../components";
import members from "../data/members";

function About() {
  return (
    <section className="">
      <Hero
        img="assets/aboutHero.gif"
        headText={"Empowering Learning, Enriching Lives"}
        subText={"Discover the Story Behind Mayeso"}
      />
      <div className="max-w-[960px] mx-auto py-16">
        <h2 className="text-3xl lg:text-4xl my-3 lg:font-semibold text-center">
          About Us
        </h2>
        <p className="pb-3 text-base lg:text-lg">
          Welcome to our humble abode, the brainchild of four daring souls who
          dared to dream big... and then dared some more. Our journey began with
          a simple question: "What if learning was as addictive as scrolling
          through cat memes?" And thus, Mayeso was born!
        </p>
        <p className="pb-3 text-base lg:text-lg">
          Picture this: it's 3 AM, and you're knee-deep in textbooks, drowning
          in a sea of caffeine. Suddenly, a thought hits you like a lightning
          bolt: "There has to be a better way!" That's right, folks, Mayeso was
          born out of the collective desperation of four sleep-deprived souls
          who just wanted to make learning fun again (or at least tolerable).
        </p>
        <p className="pb-6 text-base lg:text-lg">
          Let's be real, folks. There are more educational apps out there than
          there are grains of sand on a beach. But what sets Mayeso apart? Well,
          for starters, we've infused our app with more sass than your grandma's
          Sunday roast. From quirky quizzes to brain-teasing challenges, we've
          got it all. And did we mention the cat memes? Yeah, we've got those
          too.
        </p>
        <h3 className="text-lg lg:text-xl lg:font-semibold text-center lg:text-left">
          It Was an ALX SE Portfolio Project
        </h3>
        <p className="pb-3 text-base lg:text-lg">
          Ah, yes, the ALX SE Portfolio project. A journey filled with triumphs,
          tribulations, and enough late-night coding sessions to make your head
          spin. Meet the dream team behind the magic: in the backend corner, we
          have the illustrious Joshua Attah and the enigmatic Frank Kaziputa.
          And holding down the frontend fort, we've got the dynamic duo of
          Kwabena Boakye and Samuel Ifeanyi Okoh. Together, we've conquered
          bugs, battled deadlines, and emerged victorious (mostly).
        </p>
        <p className="pb-3 text-base lg:text-lg">
          So there you have it, bro (or dude, or whatever you want to call
          yourself). Mayeso: where learning meets laughter, and where cat memes
          reign supreme. Welcome aboard the crazy train – buckle up, it's gonna
          be a wild ride! 🚀✨
        </p>

        <div className="max-w-[1240px] mx-auto">
          <h2 className="text-2xl lg:text-3xl my-3 lg:font-semi-bold text-center">
            Meet the team Members
          </h2>
          <div className="grid px-10 md:px-5 lg:px-0  md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-3">
            {members.map((member, idx) => {
              return <TeamMember key={idx} {...member} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
