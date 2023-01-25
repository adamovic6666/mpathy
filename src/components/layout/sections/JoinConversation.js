import Image from "next/image";
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
            There are so many ways you can help – make a donation if you can. Or
            support, like and share our social media content. Join the
            conversation. Share your thoughts and ideas.
          </p>
          <a
            href="https://www.paypal.com/donate/?hosted_button_id=8XD94W7RRUQMC"
            target="_blank"
          >
            Donate
          </a>
        </div>
      </div>
      <div className={classes.AppScreenshots}>
        <MpathyYouth />
        <p>
          With your help, we can turn great ideas into a great app and help
          millions of kids avoid a downward spiral to medica2on.
        </p>
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
        </div>
        <div className={classes.AppLogos}>
          <MpathyFamily />
          <p>
            Our second app will be to help families and carers dealing with
            mental health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default JoinConversation;
