import React, { useState } from 'react';
import styles from './styles.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'react-bootstrap/Accordion';
import Dropdown from 'react-bootstrap/Dropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { faBars, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Principal() {


    //Header
    

    //Lista de opciones del menu
    const menus = [{ name: "Home", dire: "/" }, { name: "Vestidos", dire: "/categoria" }, { name: "Faldas", dire: "/categoria" }, { name: "Accesorios", dire: "/categoria" }, { name: "Otros", dire: "/categoria" }]
    
    //UseState y funciones para mostrar y ocultar el menu
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    //Principal y Categoria


    //UseState y funciones para determinar si se muestra la pagina principal o las categorias
    const [prin, setPrin] = useState(true)
    const [categ, setCateg] = useState(false)
    const paraVerPrin = () => { setPrin(true); setCateg(false) };
    const paraVerCateg = () => { setPrin(false); setCateg(true) };

    //Lista de categorias
    const categorias = ["Todos", "Vestido", "Falda", "Otros"]

    //Que productos mostrar segun la categoria
    const [cat, setCat] = useState("Todos");

    //UseState y funciones para mostar el carrito
    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    //UseState para agregar y sacar cosas del carrito
    const [state, setState] = useState([]);

    //UseState y funciones para pasar a seccion de edatos del carrito
    const [show3, setShow3] = useState(false);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

    //UseState para determinar el precio de la compra
    const [precio, setPrecio] = useState(0);

    //UseState para determinar los productos que quiere solo el nombre
    const [quiere, setQuiere] = useState([]);

    //UseState para los datos del cliente
    const [datos, setDatos] = useState({
        nombre: '',
        apellido: '',
        direccion: '',
        provincia: '',
        email: ''
    })

    //Funcion para almacenar datos del cliente
    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }

    //Creacion del mensaje
    const mensaje = "Pedido de: " + datos.nombre + " " + datos.apellido + " Mail: " + datos.email + " De la provincia: " + datos.provincia + " Direccion: " + datos.direccion + " Quiere comprar: " + quiere.toString() + " El valor total es de: " + precio;

    //Mostrar mensaje por consola
    const enviarDatos = (event) => {
        event.preventDefault()
        console.log(mensaje)
    }

    //Productos
    const productos = [
        {
            name: "Primero",
            descripcion: "haaaayyyy que bonito behjbcibcedjncde",
            precio: 2300,
            img: require("../../img/imagen.webp"),
            categoria: "Vestido"
        },
        {
            name: "segundo",
            descripcion: "haafrferfreedjncde",
            precio: 2300,
            img: require("../../img/imagen2.webp"),
            categoria: "Falda"
        },
        {
            name: "primero",
            descripcion: "haaaayyyy que bonito bueno no tan bonitodjncde",
            precio: 2300,
            img: require("../../img/imagen3.webp"),
            categoria: "Vestido"
        },
        {
            name: "cuarto",
            descripcion: "haaaayyyy que bonito behjbcibcedjncde",
            precio: 2300,
            img: require("../../img/imagen2.webp"),
            categoria: "Otros"
        }
    ]
    return (
        <>
            {/*Todo esto es el header*/}
            <div className={styles.header}>
                <h1 className={styles.noda} onClick={paraVerPrin}>NODA</h1>
                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>NODA</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className={styles.barra}>
                        {
                            menus.map((coso, i) => {
                                return <div><a className={styles.links} to={coso.dire} key={i}>{coso.name}</a></div>
                            })
                        }
                    </Offcanvas.Body>
                </Offcanvas>
                {<div className={styles.menuTotal}><div className={styles.burger}><a className={styles.cosito1} className={styles.cosito2} ><FontAwesomeIcon icon={faBars} onClick={
                    handleShow} /></a></div>
                </div>}
            </div>

            {/*Todo esto es el lo principal, se muestra o esto o las categorias segun funciones*/}
            {prin ? <div>
                <div className={styles.carrusel}>
                <Carousel fade className={styles.carrusel}>
        <Carousel.Item interval={5000} >
            <div className={styles.imagen1}><img className={styles.imagen2}
            className='d-block w-100'
            src={require('../../img/imagen.webp')}
            alt='First Slide'
            /></div>
            {/* <Carousel.Caption className={styles.letrascarrusel}>
                <h1>Segundo Coso</h1>
                <p>Esta es como la descripcion del coso que hay que poner</p>
            </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item interval={5000} >
            <div className={styles.imagen1}><img className={styles.imagen2}
            className='d-block w-100'
            src={require('../../img/imagen2.webp')}
            alt='First Slide'
            /></div>
            {/* <Carousel.Caption className={styles.letrascarrusel}>
                <h1>Tercer Coso</h1>
                <p>Esta es como la descripcion del coso que hay que poner</p>
            </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item interval={5000}>
            <div  className={styles.imagen1}><img className={styles.imagen2}
            className='d-block w-100'
            src={require('../../img/imagen3.webp')}
            alt='First Slide'
            /></div>
            {/* <Carousel.Caption className={styles.letrascarrusel}>
                <h1>Primer Coso</h1>
                <p>Esta es como la descripcion del coso que hay que poner</p>
            </Carousel.Caption> */}
        </Carousel.Item>
        </Carousel>
                </div>
                <h2 className={styles.titulo}>Categorias</h2>
                <div className={styles.categorias} id="productos">
                    {categorias.map((coso, i) => {
                        return (<div className={styles.cate}><a className={styles.cateName} onClick={()=>{paraVerCateg();setCat(coso)}}>{coso}</a></div>);
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
            </div> : null}

            {/*Todo esto es el lo categorias, se muestra o esto o lo principal segun funciones*/}
            {categ ? <div className={{ categ }}>
            <Dropdown className={styles.selector} >
                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary" size="lg">
                        {cat}
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant="dark">
                        {categorias.map((coso, i) => {
                            return <Dropdown.Item size="lg" as="button" onClick={() => setCat(coso)}>{coso}</Dropdown.Item>
                        })}
                    </Dropdown.Menu>
                </Dropdown>

                {
                    productos.map((coso, i) => {
                        if (cat == "Todos" || cat == coso.categoria) {
                            return <div className={styles.producto}>
                                <img src={coso.img} className={styles.img}></img>
                                <h4 className={styles.titulo}>{coso.name}</h4>
                                <p className={styles.descripcion}>Descripción: {coso.descripcion}</p>
                                <div className={styles.juntos}>
                                    <p className={styles.precio}>Precio: ${coso.precio}</p>
                                    <button className={styles.button} onClick={
                                        () => {
                                            setState(state => [...state, coso]);
                                            setPrecio(precio + coso.precio);
                                            setQuiere(quiere => [...quiere, coso.name]);
                                        }

                                    }>Agregar al Carrito</button></div>
                            </div>
                        }
                    })
                }
                <Offcanvas show={show2} onHide={handleClose2}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Carrito</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        {
                            state.map((coso, i) => {
                                return (<div className={styles.productoCarrito}>
                                    <div><img src={coso.img} className={styles.imgCarrito}></img></div>
                                    <div><p className={styles.nombreCarrito}>{coso.name}</p>
                                        <p className={styles.precioCarrito}>{coso.precio}</p>
                                        <button onClick={
                                            () => {
                                                setState(state.filter((_, j) => i != j));
                                                setPrecio(precio - coso.precio);
                                                setQuiere(quiere.filter((_, j) => i != j));
                                            }

                                        } className={styles.botonCarrito}>Quitar</button>

                                    </div></div>
                                )
                            })
                        }
                        <p className={styles.total}>Total: ${precio}</p>
                        <button onClick={
                            handleShow3} className={styles.botonFinalizar} >Finalizar Compra</button>
                    </Offcanvas.Body>
                </Offcanvas>

                <div className={styles.bug}><a className={styles.cosito1} onClick={
                    handleShow2}><FontAwesomeIcon icon={faShoppingBag} /></a></div>

                <Offcanvas show={show3} onHide={handleClose3}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title >Finalizar Compra</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>

                        <form className="row" onSubmit={enviarDatos}>
                            <div className="col-md-3">
                                <input type="text" placeholder="Nombre" className="form-control" onChange={handleInputChange} name="nombre"></input>
                            </div>
                            <div className="col-md-3">
                                <input type="text" placeholder="Apellido" className="form-control" onChange={handleInputChange} name="apellido"></input>
                            </div>
                            <div className="col-md-3">
                                <input type="text" placeholder="Direccion" className="form-control" onChange={handleInputChange} name="direccion"></input>
                            </div>
                            <div className="col-md-3">
                                <input type="text" placeholder="Provincia" className="form-control" onChange={handleInputChange} name="provincia"></input>
                            </div>
                            <div className="col-md-3">
                                <input type="text" placeholder="Email" className="form-control" onChange={handleInputChange} name="email"></input>
                            </div>
                            <button type="submit" className="btn btn-primary" >
                                Finalizar por WhatsApp
                            </button>
                        </form>
                        




                    </Offcanvas.Body>
                </Offcanvas>

                

            </div> : null}
        </>
    );
}

export default Principal;