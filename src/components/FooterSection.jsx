import '../css/FooterSection.css'
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faInbox } from '@fortawesome/free-solid-svg-icons'
import Icon from './Icon';
const FooterSection = ()=> {
    return (
        <section className='FooterSection'>
            <div className='first'>
                <h5>Get In Touch</h5>
                <Icon icon={faInbox} title="serganyyyyy@gmail.com" href="mailto:serganyyyyy@gmail.com" />
            </div>
            <div className='middle'>
            <button>Contact Us</button>
            </div>
            <div className='last'>
                <Icon icon={faFacebook} title="" href="https://facebook.com" />
                <Icon icon={faInstagram} title="" href="https://instagram.com" />
                <Icon icon={faLinkedin} title="" href="https://linkedin.com" />
            </div>
        </section>
    );
}

export default FooterSection;