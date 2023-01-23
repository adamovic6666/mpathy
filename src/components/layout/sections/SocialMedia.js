import Linkedin from "../../svgs/Linkedin";
import Facebook from "../../svgs/Facebook";
import Youtube from "../../svgs/Youtube";
import Mail from "../../svgs/Mail";
import classes from "./SocialMedia.module.css";
import Instagram from "../../svgs/Instagram";

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
