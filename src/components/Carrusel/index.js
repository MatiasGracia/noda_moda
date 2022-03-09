import Carousel from 'react-bootstrap/Carousel';
import styles from './styles.module.css';

function Carrusel(){
    return(
        <Carousel fade>
        <Carousel.Item interval={5000} className={styles.imagen1}>
            <img className={styles.imagen1}
            className='d-block w-100'
            src={require('../../img/imagen.webp')}
            alt='First Slide'
            />
            <Carousel.Caption>
                <h3>Segundo Coso</h3>
                <p>Esta es como la descripcion del coso que hay que poner</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000} className={styles.imagen1}>
            <img className={styles.imagen1}
            className='d-block w-100'
            src={require('../../img/imagen2.webp')}
            alt='First Slide'
            />
            <Carousel.Caption>
                <h3>Tercer Coso</h3>
                <p>Esta es como la descripcion del coso que hay que poner</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000} className={styles.imagen1}>
            <img className={styles.imagen1}
            className='d-block w-100'
            src={require('../../img/imagen3.webp')}
            alt='First Slide'
            />
            <Carousel.Caption>
                <h3>Primer Coso</h3>
                <p>Esta es como la descripcion del coso que hay que poner</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    )
}

export default Carrusel;