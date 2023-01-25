import Image from "next/image";
import classes from "./MediaSection.module.css";

const MediaSecton = () => {
  return (
    <div className={`${classes.MediaSectionWrapper} container`}>
      <div>
        <div className={classes.ParagraphsWrapper}>
          <h2>Why?</h2>
          <p>
            The causes are complex and interlinked and the cost to society and
            the future of our race is astronomical. Our children deserve better.
          </p>
          <p>
            But simple, powerful solutions are available through the promotion
            of positive life choices - delivered in a safe and private space via
            age-specific mobile apps. Mpathy Youth will help children avoid a
            downward spiral as they approach adolescence.
          </p>
          <p>
            Mpathy’s content will be designed to encourage re-connection with
            the environment, the natural world and engagement in healthier
            activities both on and off-line. It will reinforce self-worth and
            build emotional resilience. In short, we’ll help open doors to a
            better life.
          </p>
          <p>
            Parents and families also need special support and guidance to help
            them provide a loving and caring framework for their children, who
            may be dealing with very challenging emotional issues. Mpathy Family
            will be there for them.
          </p>
          <p>
            Our mission, our unshakeable determination, is to deliver a series
            of new apps providing all the help we can; giving more hope to
            coming generations. Nothing could be more important.
          </p>
        </div>
        <Image
          src="/assets/distressed-kids.jpg"
          width={1280}
          height={720}
          alt="distressed-kids"
          className={classes.Image}
        />
      </div>
      <div>
        <iframe
          width="100%"
          height="780"
          src="https://www.youtube.com/embed/6LF4zpZ6-wM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default MediaSecton;
