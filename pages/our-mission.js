import Hero from "../src/components/layout/sections/Hero";
import MediaSecton from "../src/components/layout/sections/MediaSecton";
import SEO from "../src/components/seo/SEO";

const ourMission = () => (
  <>
    <SEO
      metaTitle="Mpathy Apps | Mission of the Emotional Revolution"
      metaDescription="A generation faces unprecedented crisis in mental health. Mpathy is about preventing millions more damaged lives."
    />
    <Hero
      title="<h1>Our mission<h1/>"
      image="/assets/our-mission-bhody.png"
      description="<p>A whole young generation is in deep trouble with mental health problems. Millions are suffering from depression, eating disorders, self-harm, bullying, body-shaming and every form of toxic influence.<p> Tragically, in the worst cases, we’re losing many young, promising lives to suicide.</p><p>
      Everywhere across the western world, up to 25% of our children will be affected some time in their young lives. It’s nothing less than a mental health tsunami. </p>"
    />
    <MediaSecton />
  </>
);

export default ourMission;
