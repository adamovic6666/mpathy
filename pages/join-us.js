import Hero from "../src/components/layout/sections/Hero";
import JoinConversation from "../src/components/layout/sections/JoinConversation";

const joinUs = () => {
  return (
    <>
      <Hero
        title="Join our journey"
        image="/assets/join-us-bhody.png"
        description="<p>Together, we can make the <span>Emotional Revolution</span> happen and literally change the shape of the future.</p>"
      />
      <JoinConversation />
    </>
  );
};

export default joinUs;
