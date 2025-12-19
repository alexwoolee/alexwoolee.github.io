import { useState } from "react";
import SocialRow from "./SocialRow";
import Mail from "../icons/actions/Mail";
import GitHub from "../../assets/icons/github.png"
import Instagram from "../../assets/icons/instagram.png"
import X from "../../assets/icons/twitter.png"
import LinkedIn from "../../assets/icons/linkedin.png"
import Discord from "../../assets/icons/discord.png"
import TikTok from "../../assets/icons/tik-tok.png"

const ContactPopup = () => {
  const [justCopied, setJustCopied] = useState("");
  const email = import.meta.env.VITE_EMAIL;
  const github_user = import.meta.env.VITE_GITHUB_USER;
  const tiktok = import.meta.env.VITE_TIK_TOK
  const discord = import.meta.env.VITE_DISCORD;
  const linkedin = import.meta.env.VITE_LINKEDIN

  
  return (
    <div className="popup-wrapper inline z-10">
      <SocialRow content={email} icon={Mail}/>
      <SocialRow content={github_user} icon={GitHub}/>
      {/* <SocialRow content={justCopied} icon={Instagram} /> */}
      {/* <SocialRow content={justCopied} icon={X}/> */}
      <SocialRow content={linkedin} icon={LinkedIn}/>
      <SocialRow content={discord} icon={Discord}/>
      <SocialRow content={tiktok} icon={TikTok}/>
    </div>
  );
};

export default ContactPopup;

