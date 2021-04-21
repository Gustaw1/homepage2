import React from 'react'
import { ContactContent, InfoContainerContact } from './ContactElements';
import { InfoHeader } from './InfoElements'
import styles from '../../styles/contact.module.css'

enum Theme {
    Dark,
    Light
};


const ContactSection = () => {

    const theme = (theme: Theme) => {
        return {
            fontColor: theme === Theme.Light ? '#FFF' : '#000'
        };
    };

    return (
        <>
            <InfoContainerContact id="contact">
                <InfoHeader theme={theme(Theme.Dark)}>Contact</InfoHeader>
                <ContactContent>
                    <form action="https://formspree.io/xqkyvaqp" method="POST">
                        <input className={styles.email} type="email" name="_replyto" placeholder="E-mail"></input>
                        <input type="hidden" name="_subject" value="Contact request from Maciej Kubale Homepage"></input>
                        <textarea className={styles.message} name="message" placeholder="Message"></textarea>
                        <input className={styles.submit} type="submit" value="Send"></input>
                    </form>
                </ContactContent>
            </InfoContainerContact>
        </>
    )
}

export default ContactSection
