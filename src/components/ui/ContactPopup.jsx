import { useState } from "react";
import SocialRow from "./SocialRow";
import Mail from "../icons/actions/Mail";
import GitHub from "../../assets/icons/github.svg";
// import Instagram from "../../assets/icons/instagram.png";
// import X from "../../assets/icons/twitter.png";
import LinkedIn from "../../assets/icons/linkedin.png";
import Discord from "../../assets/icons/discord.svg";
import TikTok from "../../assets/icons/tiktok.svg";
import styles from './UI.module.css';

const ContactPopup = () => {
  const [justCopied, setJustCopied] = useState("");
  const email = import.meta.env.VITE_EMAIL;
  // const github_user = import.meta.env.VITE_GITHUB_USER;
  // const tiktok = import.meta.env.VITE_TIK_TOK;
  // const discord = import.meta.env.VITE_DISCORD;
  const linkedin = import.meta.env.VITE_LINKEDIN;

  return (
    <div className={`${styles.popupWrapper} inline z-10`}>
      <SocialRow content={email} icon={Mail} />
      {/* <SocialRow content={justCopied} icon={Instagram} /> */}
      {/* <SocialRow content={justCopied} icon={X}/> */}
      <SocialRow content={linkedin} icon={LinkedIn} />
      <div className="flex flex-row justify-center items-center gap-4">
        <img src={GitHub} alt="github" className="w-8 h-8 bg-[#FFFFFF] p-1" />
        <img src={Discord} alt="discord" className="w-8 h-8 bg-[#FFFFFF]"/>
        <img src={TikTok} alt="tiktok" className="w-8 h-8 bg-[#FFFFFF]" />
      </div>
    </div>
  );
};

export default ContactPopup;