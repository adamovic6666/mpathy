import Linkedin from "../../svgs/linkeding.svg";
import Facebook from "../../svgs/facebook.svg";
import Youtube from "../../svgs/youtube.svg";
import Mail from "../../svgs/emal.svg";
import classes from "./SocialMedia.module.css";
import Instagram from "../../svgs/instagram.svg";

const SocialMedia = () => {
  return (
    <div className={classes.SocialMedia}>
      <a href="mailto:Info@mpathyapps.com" target="_blank">
        <Mail />
      </a>
      <a
        href="https://www.linkedin.com/company/mpathyfoundation/about/"
        target="_blank"
      >
        <Linkedin />
      </a>
      <a href="https://m.facebook.com/Mpathyapps/" target="_blank">
        <Facebook />
      </a>
      <a href="https://www.instagram.com/mpathyapps/" target="_blank">
        <Instagram />
      </a>
      <a
        href="https://www.youtube.com/channel/UCwxVvq5LYsqCLUlW7HyhFMg"
        target="_blank"
      >
        <Youtube />
      </a>
    </div>
  );
};

export default SocialMedia;
