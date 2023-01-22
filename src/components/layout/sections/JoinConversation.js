import Image from "next/image";
import Link from "../../ui/Link";
import classes from "./JoinConversation.module.css";
const JoinConversation = () => {
  return (
    <div className="container">
      <div className={classes.JoinConversation}>
        <Image
          src="/assets/happy-kids.jpg"
          width={1280}
          height={720}
          alt="happy-kids"
          className={classes.JoinConversationImage}
        />
        <div>
          <p>
            There are so many ways you can help – make a donation if you can,
            support, like and share our Social Media content, join the
            conversation. Share your thoughts and ideas.
          </p>
          <Link href="/">Donate</Link>
        </div>
      </div>
      <div className={classes.AppScreenshots}>
        <h2>Our APP</h2>
        <div>
          <Image
            src="/assets/screen-1.png"
            width={1280}
            height={720}
            alt="screen-image"
            className={classes.JoinConversationImage}
          />
          <Image
            src="/assets/screen-2.png"
            width={1280}
            height={720}
            alt="screen-image"
            className={classes.JoinConversationImage}
          />
          <Image
            src="/assets/screen-3.png"
            width={1280}
            height={720}
            alt="screen-image"
            className={classes.JoinConversationImage}
          />
          <Image
            src="/assets/screen-4.png"
            width={1280}
            height={720}
            alt="screen-image"
            className={classes.JoinConversationImage}
          />
          <div className={classes.AppLogos}>
            <Image
              src="/assets/mpathy-youth-logo.png"
              width={105}
              height={48}
              alt="app-logo"
            />
            <Image
              src="/assets/mpathy-family-logo.png"
              width={105}
              height={48}
              alt="app-logo"
            />
            {/* <Image
            src="/assets/mobile-mockup.png"
            width={313}
            height={522}
            alt="app-logo"
          /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinConversation;
