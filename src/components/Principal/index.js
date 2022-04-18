import React, { useState } from 'react';
import {app} from '../../fb';
import styles from './styles.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'react-bootstrap/Accordion';
import Dropdown from 'react-bootstrap/Dropdown';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { faBars, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, animateScroll as scroll } from "react-scroll";


function Principal() {

    //Productos
    const [docus,setDocus] = React.useState([]);
    React.useEffect(async ()=>{
        const docusList = await app.firestore().collection("productos").get();
        setDocus(docusList.docs.map((doc)=>doc.data()))
    },[])

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

    
    return (
        <>
            {/*Todo esto es el header*/}
            <div className={styles.header}>
                <h1 className={styles.noda} onClick={paraVerPrin} id="inicio">NODA</h1>
                <Offcanvas show={show} onHide={handleClose} className={styles.todaLaBarra}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>NODA</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className={styles.barra}>
                        <Link to="inicio"><div className={styles.itemMenu} onClick={()=>{paraVerPrin();handleClose()}}>Inicio</div></Link>
                        <div className={styles.itemMenu} >Categorias</div>
                        <div className={styles.darleEspacio}>
                            {
                                categorias.map((coso, i) => {
                                    return (<div className={styles.itemMenu}><a onClick={() => { paraVerCateg(); setCat(coso); handleClose() }}>{coso}</a></div>);
                                })
                            }
                        </div>
                        <Link to='sobre'><div className={styles.itemMenu} onClick={()=>{paraVerPrin();handleClose()}}>Sobre Nosotros</div></Link>
                        <Link to="preguntas"><div className={styles.itemMenu} onClick={()=>{paraVerPrin();handleClose()}}>Preguntas Frecuentes</div></Link>
                    </Offcanvas.Body>
                </Offcanvas>
                {/* Esto es para el menu grande */}
                <div className={styles.grande}>
                <Button variant="dark" className={styles.itemGrande} onClick={paraVerPrin} ><Link to="inicio" onClick={paraVerPrin} >Inicio</Link></Button>{' '}
                    <Dropdown className={styles.itemGrande} >
                        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="dark" className={styles.itemGrande2}>
                            Categorias
                        </Dropdown.Toggle>

                        <Dropdown.Menu variant="dark">
                            {categorias.map((coso, i) => {
                                return <Dropdown.Item size="lg" as="button" onClick={() => {setCat(coso);paraVerCateg()}}>{coso}</Dropdown.Item>
                            })}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Button variant="dark" className={styles.itemGrande}  onClick={paraVerPrin} ><Link to="sobre" onClick={paraVerPrin}>Sobre Nosotros</Link></Button>{' '}
                    <Button variant="dark" className={styles.itemGrande} onClick={paraVerPrin} ><Link to="preguntas" onClick={paraVerPrin}>Preguntas Frecuentes</Link></Button>{' '}
                    <Button variant="dark" className={styles.itemGrande} onClick={() => {
                        handleShow2();paraVerCateg()
                    }}>Carrito</Button>{' '}

                </div>
                {<div className={styles.menuTotal}><div className={styles.burger}><a className={styles.cosito1} className={styles.cosito2} ><FontAwesomeIcon icon={faBars} onClick={
                    handleShow} /></a></div>
                </div>}
                <div className={styles.bug}><a className={styles.cosito1} onClick={() => {
                    handleShow2(); paraVerCateg()
                }}><FontAwesomeIcon icon={faShoppingBag} /></a></div>
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
                            <div className={styles.imagen1}><img className={styles.imagen2}
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
                        return (<div className={styles.cate}><a className={styles.cateName} onClick={() => { paraVerCateg(); setCat(coso) }}>{coso}</a></div>);
                    })}
                </div>
                <h2 className={styles.titulo} id="sobre">¿Qué es Noda?</h2>

                <p className={styles.textoSobre} >Noda es una marca que nace en honor al nombre de mujeres de tres generaciones amantes de la vida, el diseño, los colores y el arte.
                </p>
                <p className={styles.textoSobre} >Noda es audaz y sofisticada, sin importar los estandares dfe la moda, sino creando un nuevo concepto.
                </p>
                <p className={styles.textoSobre} >Cada prenda es una pieza unica, fusionando lo tecnologico con lo artesanal, mezclando texturas, usos, detalles, primando la originalidad.
                </p>
                <p className={styles.textoSobre} >Recorre nuestro viaje virtual y sentite parte de <>NODA</>
                </p>    
                <h2 className={styles.titulo} >¿Tenes alguna duda?</h2>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header >¿Cómo comprar?</Accordion.Header>
                        <Accordion.Body>
                            1) Seleccionar modelo, talle y color para agregar al carrito.
                            <br />2) Una vez en el carrito presionar el boton de finalizar compra, donde se pedira algunos datos para finalizar el proceso.
                            <br />3) Al finalizar el paso anterior presionar el boton finalizar compra que te redireccionará a WhatsApp donde se pondra en contacto un asesor de ventas para elegir forma de pago y coordinar el envío. 
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" id="preguntas">
                        <Accordion.Header>¿Puedo realizar un cambio o devolución del producto?</Accordion.Header>
                        <Accordion.Body>
                            Se puede hacer unn cambio en un plazo de treinta(30) días corridos, contados a partir de la fecha de recepción del pedido. Los productos deben encontrarse en el mismo estado en el cual fueron recibidos, sin haber sido utilizados, lavados o alterados.
                            <br /> Importante: No se realizan cambios de ropa interior, bikinis o accesorios.
                            <br /> Las devoluciones se aceptan en un plazo de 73 horas hábiles de recibido el producto.
                            <br /> Para continuar con la gestión comunicarse a atención al cliente noda@gmail.com o +5492614690078 (Lun/Vier de 10 A 21 hs, Sab de 10 a 14 hs) 
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>¿Cuál es el costo del envío?</Accordion.Header>
                        <Accordion.Body>
                            Es a cargo del cliente y dependiendo del correo elegido a retirar en sucursal o entrega a domicilio. Salvo en promociones comerciales por tiempo determinado sonde el envío sera a cargo de Noda.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div> : null}

            {/*Todo esto es el lo categorias, se muestra o esto o lo principal segun funciones*/}
            {categ ? <div className={{ categ }}>
                <Dropdown className={styles.selector} className={styles.barraCateg}>
                    <h5 className={styles.barraFil}>Filtrar: </h5>
                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary" size="lg" >
                        {cat}
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant="dark">
                        {categorias.map((coso, i) => {
                            return <Dropdown.Item size="lg" as="button" onClick={() => setCat(coso)}>{coso}</Dropdown.Item>
                        })}
                    </Dropdown.Menu>
                </Dropdown>
                <div className={styles.cardsGrupo}>
                {
                    docus.map((doc) => {
                        if (cat == "Todos" || cat == doc.categoria) {
                            return <Card style={{ width: '18rem' }, { marginLeft: '50%' }, { marginTop: '15px' }} className={styles.cardGrande}>
                                <Card.Img variant="top" src={doc.url} />
                                <Card.Body>
                                    <Card.Title>{doc.nombre}</Card.Title>
                                    <Card.Text>
                                        Descripción: {doc.descripcion}
                                    </Card.Text>
                                    <Card.Text>
                                        Precio: ${doc.precio}
                                    </Card.Text>
                                    <Button variant="primary" onClick={
                                        () => {
                                            setState(state => [...state, doc]);
                                            setPrecio(precio + Number(doc.precio));
                                            setQuiere(quiere => [...quiere, doc.name]);
                                        }}>Agregar al Carrito</Button>
                                </Card.Body>
                            </Card>
                        }
                    })
                }
                </div>
                <Offcanvas show={show2} onHide={handleClose2}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Carrito</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        {
                            state.map((coso, i) => {

                                return <Card style={{ width: '18rem' }, { marginLeft: '50%' }, { marginTop: '15px' }}>
                                    <Card.Img variant="top" src={coso.url} />
                                    <Card.Body>
                                        <Card.Title>{coso.nombre}</Card.Title>
                                        <Card.Text>
                                            Precio: ${coso.precio}
                                        </Card.Text>
                                        <Button variant="primary" onClick={
                                            () => {
                                                setState(state.filter((_, j) => i !== j));
                                                setPrecio(precio - coso.precio);
                                                setQuiere(quiere.filter((_, j) => i !== j));
                                            }}>Quitar</Button>
                                    </Card.Body>
                                </Card>
                            }
                            )
                        }

                        <p className={styles.total}>Total: ${precio}</p>
                        <button onClick={
                            handleShow3} className={styles.botonFinalizar} >Finalizar Compra</button>
                    </Offcanvas.Body>
                </Offcanvas>

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