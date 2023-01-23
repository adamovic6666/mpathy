import Image from "next/image";
import Link from "../../ui/Link";
import classes from "./JoinConversation.module.css";
import MpathyYouth from "../../../components/svgs/mpathy-youth.svg";
import MpathyFamily from "../../../components/svgs/mpathy-family.svg";

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
            src="/assets/mockup-1.png"
            width={1280}
            height={720}
            alt="screen-image"
            className={classes.JoinConversationImage}
          />
        </div>
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

          <div className={classes.AppLogos}>
            <MpathyYouth />
            <MpathyFamily />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinConversation;
