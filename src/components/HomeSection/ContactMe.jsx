import styles from './home.module.css';

const ContactMe = () => {
    return (
        <div className={styles.contactCtn}> 
            <div className={styles.contactText}>
                <h1>Want to get in touch?</h1>
                <p>If you’d like to reach out, feel free to contact me and I’ll get back to you soon!</p>
            </div>
            <button className={styles.contactBtn}>Get in touch</button>
        </div>
    );
}

export default ContactMe;