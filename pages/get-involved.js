import Hero from "../src/components/layout/sections/Hero";
import JoinConversation from "../src/components/layout/sections/JoinConversation";
import SEO from "../src/components/seo/SEO";

const joinUs = () => {
  return (
    <>
      <SEO
        metaTitle="Mpathy Apps | Get Involved in Emotional Revolution"
        metaDescription="Now we need funding to make Mpathy live. But that’s only a part of the story. There are many different ways you can be part of it."
      />
      <Hero
        title="<h1>Get involved<h1/>"
        image="/assets/join-us-bhody.png"
        description="<p>Together, we can make the <span>emotional revolution</span> happen and literally change the shape of the future.</p><p>We need donors, partners and investors who are ready to join our mission and help to save millions more young people from a downward spiral…</p><p>We are open-minded and ready to discuss collaboration, alliances and partnerships. Together, we can make a difference.</p>"
      />
      <JoinConversation />
    </>
  );
};

export default joinUs;
