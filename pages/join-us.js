import Hero from "../src/components/layout/sections/Hero";
import JoinConversation from "../src/components/layout/sections/JoinConversation";
import SEO from "../src/components/seo/SEO";

const joinUs = () => {
  return (
    <>
      <SEO metaTitle="Join us" metaDescription="" />
      <Hero
        title="<h1>Join us<h1/>"
        image="/assets/join-us-bhody.png"
        description="<p>Together, we can make the <span>Emotional Revolution</span> happen and literally change the shape of the future.</p><p>We need donors, partners and investors who are ready to join our mission
      downward spiral to medication and despair.</p>"
      />
      <JoinConversation />
    </>
  );
};

export default joinUs;
