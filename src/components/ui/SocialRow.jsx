import { Copy } from 'lucide-react';
import styles from './ui.module.css';

const SocialRow = ({ icon, content }) => {
  const renderIcon = () => {
    if (!icon) return null;
    if (typeof icon === "string") {
      return <img src={icon} alt="social icon" className={styles.popupSocialIcon}></img>;
    }
    const Icon = icon;
    return <Icon />
  };
  return (
    <span className={styles.socialRow}>
      {renderIcon()}
      <p className={styles.socialRedirect}>{content}</p>
      <div className={styles.copyIcon}>
        <Copy w={13} h={13} />
      </div>
    </span>
  );
};

export default SocialRow;