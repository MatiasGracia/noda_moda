import React, { useState } from 'react';
import styles from './styles.module.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { faBars, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function Categoria() {

    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const [show3, setShow3] = useState(false);

    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

    const [cat, setCat] = useState("Todos");

    const [state, setState] = useState([]);


    const [precio, setPrecio] = useState(0);

    const [datos, setDatos] = useState({
        nombre: '',
        apellido: '',
        direccion: '',
        provincia: '',
        email: ''
    })

    const [quiere, setQuiere] = useState([]);

    
    const mensaje = "Pedido de: "+datos.nombre+" "+datos.apellido+" Mail: "+datos.email+" De la provincia: "+datos.provincia+" Direccion: "+datos.direccion+" Quiere comprar: "+quiere.toString()+" El valor total es de: "+precio;


    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        console.log(mensaje)
    }


    const categorias = ["Todos", "Vestido", "Falda", "Otros"]
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
                                        
                                    }  className={styles.botonCarrito}>Quitar</button>

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
                    {/* <ul>
                        <li>{datos.nombre}</li>
                        <li>{datos.apellido}</li>
                        <li>{datos.direccion}</li>
                        <li>{datos.provincia}</li>
                        <li>{datos.email}</li>
                    </ul> */}




                </Offcanvas.Body>
            </Offcanvas>

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

        </>
    );
}

export default Categoria;