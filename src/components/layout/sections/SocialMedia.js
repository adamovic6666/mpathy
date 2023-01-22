import Linkedin from "../../svgs/Linkedin";
import Facebook from "../../svgs/Facebook";
import Youtube from "../../svgs/Youtube";
import Mail from "../../svgs/Mail";
import classes from "./SocialMedia.module.css";

const SocialMedia = () => {
  return (
    <div className={classes.SocialMedia}>
      <a href="https://m.facebook.com/Mpathyapps/" target="_blank">
        <Facebook />
      </a>
      <a
        href="https://www.youtube.com/channel/UCwxVvq5LYsqCLUlW7HyhFMg"
        target="_blank"
      >
        <Youtube />
      </a>
      <a
        href="https://www.linkedin.com/company/mpathyfoundation/about/"
        target="_blank"
      >
        <Linkedin />
      </a>
      <a href="mailto:Info@mpathyapps.com" target="_blank">
        <Mail />
      </a>
    </div>
  );
};

export default SocialMedia;
