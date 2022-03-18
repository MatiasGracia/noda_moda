import React from 'react';
import {app} from '../../fb'

function Crear(){
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
        const coleccionRef = app.firestore().collection("productos");
        const docu = await coleccionRef.doc(nombreArchivo.name).set({nombre: nombreArchivo, url:archivoUrl, precio:precioArchivo, descripcion:descripcionArchivo, categoria:categoriaArchivo});
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
                <button>Enviar</button>
            </form>
            <ul>
                {docus.map((doc)=><li><img src={doc.url} height="100px" width="100px"/><h3>{doc.nombre}</h3></li>)}
            </ul>
        </>
    );
}

export default Crear;