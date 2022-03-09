import React from 'react';
import {Link, NavLink} from 'react-router-dom'
import Categoria from '../Categoria';

import Offcanvas from 'react-bootstrap/Offcanvas'
import { useState } from 'react';
import styles from './styles.module.css';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



    function Header() {
        const menus = [{ name: "Home",  dire: "/" }, { name: "Vestidos",  dire: "/categoria" }, { name: "Faldas", dire: "/categoria" }, { name: "Accesorios", dire: "/categoria" }, { name: "Otros", dire: "/categoria" }]
        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        const [show2, setShow2] = useState(false);

        
        return (
            <div className={styles.header}>
                <h1 className={styles.noda}>NODA</h1>


                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>NODA</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                    {
                        menus.map((coso, i) => {

                            return <a className={styles.link} to={coso.dire} key={i}>{coso.name}</a>
                        })
                    }
                    </Offcanvas.Body>
                </Offcanvas>
                


                { <div className={styles.menuTotal}><div className={styles.burger}><a className={styles.cosito1} className={styles.cosito2} ><FontAwesomeIcon icon={faBars} onClick={
                    handleShow} /></a></div>
                </div> }
                    

            </div>
        );
    }


export default Header;