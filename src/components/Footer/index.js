import styles from './styles.module.css';
import { faEnvelope, faCirclePhone } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Footer(){
    return(
        <div className={styles.footer}>
            Atención al cliente Lun/Vier de 10 A 21 hs, Sab de 10 a 14 hs
            <faCirclePhone /><a>+5492614690078</a>
            <faEnvelope /><a>noda@gmail.com</a>
            Desarrollada por Yeit SD - 2022
        </div>
    );
}

export default Footer;