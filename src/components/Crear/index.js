import React,{ useState } from 'react';
import {app} from '../../fb';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'


function Crear(){
    const talles =["1","2","3","4","5"];
    const [show, setShow] = useState(1);
    const handleShow = () => setShow(useState+1);
    const [archivoUrl,setArchivoUrl] = React.useState("")
    const [docus,setDocus] = React.useState([]);
    const archivoHandler = async (e)=>{
        const archivo = e.target.files[0];
        const storageRef = app.storage().ref();
        const archivoPath = storageRef.child(archivo.name);
        await archivoPath.put(archivo);
        console.log("archivo cargado:"+archivo.name);
        const enlaceUrl = await archivoPath.getDownloadURL();
        setArchivoUrl(enlaceUrl);

    }
    const submitHandler = async (e)=>{
        e.preventDefault();
        const nombreArchivo = e.target.nombre.value;
        const categoriaArchivo = e.target.categoria.value;
        const descripcionArchivo = e.target.descripcion.value;
        const precioArchivo = e.target.precio.value;
        const talle1Archivo = e.target.talle1.value;
        const talle2Archivo = e.target.talle2.value;
        const talle3Archivo = e.target.talle3.value;
        const talle4Archivo = e.target.talle4.value;
        const talle5Archivo = e.target.talle5.value;
        const coleccionRef = app.firestore().collection("productos");
        const docu = await coleccionRef.doc(nombreArchivo.name).set({nombre: nombreArchivo, url:archivoUrl, precio:precioArchivo, descripcion:descripcionArchivo, categoria:categoriaArchivo, talle1:talle1Archivo, talle2:talle2Archivo, talle3:talle3Archivo, talle4:talle4Archivo, talle5:talle5Archivo});
        window.location="/solomelicrear"
    }
    React.useEffect(async ()=>{
        const docusList = await app.firestore().collection("productos").get();
        setDocus(docusList.docs.map((doc)=>doc.data()))
    },[])
    return(
        <>
            <h1>Solo para crear productos</h1>
            <form onSubmit={submitHandler}>
                <input type="file" onChange={archivoHandler} />
                <input type="text" name="nombre" placeholder="Nombre del producto" />
                <input type="text" name="categoria" placeholder="Categoria del producto" />
                <input type="text" name="descripcion" placeholder="Descripcion del producto" />
                <input type="number" name="precio" placeholder="Precio del producto" />
                <input type="text" name="talle1" placeholder="Talle1" />
                <input type="text" name="talle2" placeholder="Talle2" />
                <input type="text" name="talle3" placeholder="Talle3" />
                <input type="text" name="talle4" placeholder="Talle4" />
                <input type="text" name="talle5" placeholder="Talle5" />
                <button>Enviar</button>
            </form>
            <ul>
                {docus.map((doc)=><li><img src={doc.url} height="100px" width="100px"/><h3>{doc.nombre}</h3>
                <ButtonGroup vertical>
                <DropdownButton as={ButtonGroup} title="Talle" id="bg-nested-dropdown">
                    {talles.map((i)=> {
                        let a = doc.talle+{i};
                        if(a!="nulo"){
                            <Dropdown.Item eventKey={show}>{a}</Dropdown.Item>
                            
                        }}
                    )}
    
  </DropdownButton></ButtonGroup>
                </li>)}
            </ul>
        </>
    );
}

export default Crear;