import Hero from "../src/components/layout/sections/Hero";
import Crew from "../src/components/layout/sections/Crew";

const ourCrew = () => (
  <>
    <Hero
      title="<h1>Our crew<h1/>"
      image="/assets/bhody-our-crew.png"
      description="<p>We’ve assembled a diverse team of expert communicators, educationalists, psychologists, therapists, nutrionists, designers, application developers and social media marketing specialists. In the backroom, there’s also a ‘focus –group’ of young people ensuring that we keep it real for their generation.</p><p>
Some of us are parents. All of us share a single passion and a total dedication – to help children, young people and their families join the Emotional Revolution and share happier, healthier futures.</p>"
    />
    <Crew />
  </>
);

export default ourCrew;
