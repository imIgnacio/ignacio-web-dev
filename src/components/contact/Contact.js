import whatsAppIcon from '../../assets/images/whatsapp-logo.png';
import mailIcon from '../../assets/images/mail-logo.png';

import WhatsApp from '../../assets/icon/Icon';
import Mail from '../../assets/icon/Icon';

import './Contact.css';

function Contact() {

    return <div className="contact">
        <h2 id='contact'>Contáctame hoy</h2>
        <WhatsApp link='https://wa.me/61448712130' logo={whatsAppIcon} text='+61448712130'/>
        <Mail link='mailto:ignacio.diaz1299@gmail.com?subject=Desarrollo web' logo={mailIcon} text='Escríbeme'/>

    </div>
}

export default Contact;