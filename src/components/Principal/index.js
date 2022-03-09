import styles from './styles.module.css';
import Carrusel from '.././Carrusel';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

import Accordion from 'react-bootstrap/Accordion';

function Principal() {
    const categorias = [{ name: "Vestidos" }, { name: "Faldas" }, { name: "Accesorios" }, { name: "Otros" }]
    return (
        <div>
            




            <div className={styles.carrusel}>
              <Carrusel /> 
            </div>
            <h2 className={styles.titulo}>Categorias</h2>
            <div className={styles.categorias} id="productos">
                {categorias.map((coso, i) => {
                    return (<div className={styles.cate}><a className={styles.cateName}>{coso.name}</a></div>);
                })}
            </div>
            <h2 className={styles.titulo}>Sobre Nosotros</h2>

            <p className={styles.textoSobre} id="sobre">Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.

                Aunque no posee actualmente fuentes para justificar sus hipótesis, el profesor de filología clásica Richard McClintock asegura que su uso se remonta a los impresores de comienzos del siglo xvi.1​ Su uso en algunos editores de texto muy conocidos en la actualidad ha dado al texto lorem ipsum nueva popularidad.

                El texto en sí no tiene sentido, aunque no es aleatorio, sino que deriva de un texto de Cicerón en lengua latina, a cuyas palabras se les han eliminado sílabas o letras. El significado del mismo no tiene importancia, ya que solo es una demostración o prueba. El texto procede de la obra De finibus bonorum et malorum (Sobre los límites del bien y del mal) que comienza con:</p>
            <h2 className={styles.titulo} >Preguntas Frecuentes</h2>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>¿Funciona?</Accordion.Header>
                    <Accordion.Body>
                        Si soy re bueno
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" id="preguntas">
                    <Accordion.Header>¿Era un error muy facil de cometer?</Accordion.Header>
                    <Accordion.Body>
                        No, soy re boludo
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>¿Soy un tonto?</Accordion.Header>
                    <Accordion.Body>
                        Si Tima
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

        </div>
    );
}

export default Principal;