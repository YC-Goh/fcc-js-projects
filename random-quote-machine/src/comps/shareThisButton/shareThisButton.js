
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useSelector } from "react-redux";
import styles from '../styles/styles.module.css';

export const TweetThisButton = () => (
    <a 
        href='https://twitter.com/intent/tweet' 
        data-text={ useSelector((state) => state.randomiser.currentQuote)} 
        rel='noreferrer' 
        target='_blank'
        id='tweet-quote'
    >
        <FontAwesomeIcon 
            icon={faTwitter} 
            className={styles.shareButton}
        />
    </a>
);
/*
export const FacebookThisButton = () => (
    <a 
        href='https://facebook.com/' 
        data-text={ useSelector((state) => state.randomiser.currentQuote)} 
        rel='noreferrer' 
        target='_blank'
        id='facebook-quote'
    >
        <FontAwesomeIcon 
            icon={faFacebook} 
            style={shareButtonStyle}
        />
    </a>
);
*/